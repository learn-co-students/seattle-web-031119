class Tweet
  attr_accessor :message, :username
  # @@all = []

  def self.all
    #we got back an array of hashes and not Tweet object.
    #In order to work in our instance methods we need OBJECTS.

    results = DB[:conn].execute("SELECT * FROM tweets")

    results.map do |row|
      Tweet.new({'message' => row['message'], 'id' => row['id'], 'username' => row['username']})
    end
    # @@all
  end

  def self.create
    sql = <<-SQL
      CREATE TABLE books(id INTEGER PRIMARY KEY, name TEXT, genre TEXT, author_id INTEGER);
    SQL
    results = DB[:conn].execute(sql)
  end

  def insert

  end

  def self.update()
      #UPDATE books SET (name, author_id) VALUES ('Please', 'Hi');
      #TODO ; get SQL package
      sql = <<-SQL
      UPDATE tweets SET username = ? WHERE id = ?;
      SQL

      results = DB[:conn].execute(sql, 'tea_mom', 13)

  end

  def destroy

  end


  def initialize(props={})
    @id = props['id']
    @message = props['message']
    @username = props['username']

    # @message =
    # @@all << self
  end
end
