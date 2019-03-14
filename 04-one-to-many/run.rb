require_relative './tweet'
require_relative './user'
require 'pry'


coffee_dad = User.new('coffee_dad')
coffee_dad.post_tweet('Help')
coffee_dad.post_tweet('I need more coffee')

tea_mom = User.new('tea_mom')
tea_mom.post_tweet('mmmmmatcha')
tea_mom.post_tweet('latte time!')



Pry.start