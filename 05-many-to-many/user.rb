class User

  attr_reader :username

  def initialize(username)
    @username = username
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  def like_tweet(tweet)
    me_like_tweet?(tweet) ? nil : Like.new(self, tweet)
  end

  def me_like_tweet?(tweet)
    Like.all.any?{|like| like.user == self && like.tweet == tweet}
  end

  def unlike_tweet(tweet)
    if me_like_tweet?(tweet)
      like = Like.all.find{|like| like.user == self && like.tweet == tweet}
      like.kill_me
      like
    end
  end


  def likes
    # look at likes
    # likes with self as user
    Like.all.select {|like| like.user == self}
  end

  def liked_tweets
    # get tweet from like
    # Like.all.select {|like| like.user == self}.map{|like| like.tweet}
    likes.map(&:tweet)
  end

end
