class Tweet

  attr_reader :message, :user

  @@all = []

  def initialize(message, user)
    @message = message
    @user = user
    @@all.push(self)
  end

  def self.all
    @@all
  end

  def likes
    # look at likes
    # likes with self as user
    Like.all.select {|like| like.tweet == self}
  end

  def likers
    likes.map(&:user)
  end

  def username
    user.username
  end

  def num_likes
    likes.count
  end
end
