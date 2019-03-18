class Screening

  attr_accessor :date, :film, :festival
  @@all = []

  def initialize(date, film, festival)
    @date = date
    @film = film
    @festival = festival

    @@all << self
  end

  def self.all
    @@all
  end

  ##############################################################################
  # Note: all code after this comment was written after the review session ended
  ##############################################################################

  def hometown_setting?
    # here the only tricky part is figuring out that the Film class calls this
    # "setting" and the Festival class calls this "location"
    self.film.setting == self.festival.location
  end

end
