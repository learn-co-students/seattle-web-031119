class Festival
  attr_reader :title, :location

  @@all = []

  def initialize(title, location)
    @title = title
    @location = location

    @@all << self
  end

  def self.all
    @@all
  end

  ##############################################################################
  # Note: all code after this comment was written after the review session ended
  ##############################################################################

  def screenings
    Screening.all.select do |screening|
      screening.festival == self
    end
  end

  def films
    self.screenings.map do |screening|
      screening.film
    end
  end

end
