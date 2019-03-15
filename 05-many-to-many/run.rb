require_relative './tweet'
require_relative './user'
require_relative './like'
require 'pry'


coffee_dad = User.new('coffee_dad')
coffee_dad.post_tweet('Help')
coffee_dad.post_tweet('I need more coffee')

tea_mom = User.new('tea_mom')
tea_mom.post_tweet('mmmmmatcha')
tea_mom.post_tweet('latte time!')

rando_tweet = Tweet.all.sample
tea_mom.like_tweet(rando_tweet)
rando_tweet = Tweet.all.sample
tea_mom.like_tweet(rando_tweet)

Pry.start


