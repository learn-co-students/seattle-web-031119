require 'bundler'
Bundler.require

DB = {
  conn: SQLite3::Database.new('db/twitter.db')
}

DB2 = {
  conn: SQLite3::Database.new('db/books.db')
}

DB[:conn].results_as_hash = true
# [{'id' => 1, 'username' => 'coffee_dad', 'message' => 'u'},{}, {}]

require_relative '../lib/tweet.rb'
require_relative '../lib/tweets_app.rb'
