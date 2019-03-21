class Tweet
  attr_accessor :message, :username
  # ALL = []

  def self.all
    # ALL
    sql = <<-SQL
    SELECT * FROM tweets
    SQL

    results = DB[:conn].execute(sql)
    puts "Printing results --------------------"
    puts results
    puts "Creating objects -------------------"
    results.map do |tweet_info|
      Tweet.new({'message' => tweet_info['message'], 'username' => tweet_info['username']})
    end
  end

  def initialize(props={})
    @message = props['message']
    @username = props['username']

    # @message =
    # ALL << self
  end
end
