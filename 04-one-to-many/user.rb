class User

  attr_reader :username

  def initialize(username)
    @tweets = []
    @username = username
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  # No Single Source of Truth
  # Stores the tweet in the user and the user in the tweet
  # def post_tweet(message)
  #   tweet = Tweet.new(message, self)
  #   @tweets << tweet
  #   tweet
  # end

  def tweets
    Tweet.all.select{|tweet| tweet.user == self}
  end

  # attr_reader does this!!!
  # def username
  #   @username
  # end

end