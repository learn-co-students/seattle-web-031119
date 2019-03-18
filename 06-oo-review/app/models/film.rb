class Film
  attr_accessor :name
  attr_reader :setting

  @@all = []

  def initialize(name, setting)
    @name = name
    @setting = setting

    @@all << self
  end

  def self.all
    @@all
  end

  def screenings
    Screening.all.select do |screening|
      screening.film == self
    end
  end

  def festivals
    self.screenings.map do |screening|
      screening.festival
    end
  end

  def self.all_introductions
    self.all.map do |film|
      puts "Welcome, this is #{film.name}, set in #{film.setting}"
    end
  end

  def self.most_festivals
    most_film = nil
    most_festival_count = 0

    self.all.each do |film|
      if film.festivals.count > most_festival_count
        most_film = film
        most_festival_count = film.festivals.count
      end
    end

    most_film
  end

  def self.most_festivals_longer
    most_film = nil
    most_festival_count = 0

    self.all.each do |film|

      film_screenings = Screening.all.select{|s| s.film == film}

      film_festivals = film_screenings.map {|s| s.festival}

      film_festival_count = film_festivals.count
      if film_festival_count > most_festival_count
        most_film = film
        most_festival_count = film_festival_count
      end
    end

    most_film
  end

  def self.most_festivals_from_screening
    # key is the film object, value is the number of screenings of that film
    # (we are assuming that 1 screening = 1 festival)
    festival_counts = {}

    Screening.all.each do |screening|
      film = screening.film
      if festival_counts.keys.include?(film)
        festival_counts[film] += 1
      else
        festival_counts[film] = 1
      end
    end

    film, count = festival_counts.max_by {|k,v| v}
    film
  end


  ##############################################################################
  # Note: all code after this comment was written after the review session ended
  ##############################################################################

  def self.most_festivals_shorter
    # this is some shortcut syntax that is handy if you know it, but not necessary
    self.all.max_by {|film| film.festivals.count }
  end

  def screen_at_festival(festival, date)
    # "associates the film to that festival" means make a new screening object with
    # `self` as the film and `festival` as the festival
    Screening.new(date, self, festival)
  end

end
