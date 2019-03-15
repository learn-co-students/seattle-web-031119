class Like

  attr_reader :user, :tweet

  @@all = []

  def initialize(user, tweet)
    @user = user
    @tweet = tweet
    @@all << self
  end

  def self.all
    @@all
  end

  def kill_me
    @@all.delete_if{|like| like == self}
  end

end