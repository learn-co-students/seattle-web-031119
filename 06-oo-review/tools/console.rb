require_relative '../config/environment.rb'

inception = Film.new("Inception", "dreams")
sleepless = Film.new("Sleepless in Seattle", "Seattle")
mean_girls = Film.new("Mean Girls", "high school")

puts "------------- Film instances ----------------"
p Film.all
puts

siff = Festival.new("SIFF", "Seattle")
tiff = Festival.new("TIFF", "Toronto")
sundance = Festival.new("Sundance Film Festival", "Utah")

puts "------------- Festival instances ----------------"
p Festival.all
puts

s1 = Screening.new("2007-04-08", inception, siff)
s2 = Screening.new("2007-04-09", sleepless, siff)
s3 = Screening.new("2009-07-11", inception, tiff)

puts "------------- Screening instances ----------------"
#Screening.all.map {|screening| puts "#{screening}\n"}
p Screening.all
puts

puts "------------- Testing relationships ----------------"
puts "s1.film.name"
puts s1.film.name
puts "s2.festival.title"
puts s2.festival.title
puts "inception.screenings"
p inception.screenings
puts "inception.festivals"
p inception.festivals

puts "------------- Film class methods ----------------"
puts "Film.all_introductions"
Film.all_introductions
puts

# The method described in the README is most_festivals, but we wrote some other
# versions because students had questions
puts "Film.most_festivals"
p Film.most_festivals

##############################################################################
# Note: all code after this comment was written after the review session ended
##############################################################################

puts "Film.most_festivals_longer"
p Film.most_festivals_longer
puts "Film.most_festivals_from_screening"
p Film.most_festivals_from_screening
puts "Film.most_festivals_shorter"
p Film.most_festivals_shorter
puts
puts "different `most_festivals` implementations produce the same result?"
puts Film.most_festivals == Film.most_festivals_longer &&
      Film.most_festivals == Film.most_festivals_from_screening &&
      Film.most_festivals == Film.most_festivals_shorter
puts

puts "------------- Film#screen_at_festival ----------------"
puts "Before:"
puts "mean_girls.festivals.count"
puts mean_girls.festivals.count
puts "Screening.all.count"
puts Screening.all.count
puts "mean_girls.screen_at_festival(tiff, \"2019-03-18\")"
mean_girls.screen_at_festival(tiff, "2019-03-18")
puts "After:"
puts "mean_girls.festivals.count"
puts mean_girls.festivals.count
puts "Screening.all.count"
puts Screening.all.count
puts

puts "------------- Screening#hometown_setting? ----------------"
puts "s1.hometown_setting? # should be false because Inception isn't set in Seattle"
puts s1.hometown_setting? # should be false because Inception isn't set in Seattle
puts "s2.hometown_setting? # should be true because Sleepless in Seattle is set in Seattle"
puts s2.hometown_setting? # should be true because Sleepless in Seattle is set in Seattle
puts

puts "------------- Testing relationships again ----------------"
# Festival#screenings and Festival#films have been written now
puts "::: info about SIFF :::"
puts "siff.screenings.count"
puts siff.screenings.count
puts "siff.screenings.select {|screening| screening.hometown_setting? }.count"
puts siff.screenings.select {|screening| screening.hometown_setting? }.count
puts "siff.films.count"
puts siff.films.count
puts "siff.films.last.name"
puts siff.films.last.name
puts
puts "::: info about TIFF :::"
puts "tiff.screenings.count"
puts tiff.screenings.count
puts "tiff.screenings.select {|screening| screening.hometown_setting? }.count"
puts tiff.screenings.select {|screening| screening.hometown_setting? }.count
puts "tiff.films.count"
puts tiff.films.count
puts "tiff.films.last.name"
puts tiff.films.last.name
puts
puts "::: info about Sundance :::"
puts "sundance.screenings.count"
puts sundance.screenings.count
puts "sundance.screenings.select {|screening| screening.hometown_setting? }.count"
puts sundance.screenings.select {|screening| screening.hometown_setting? }.count
puts "sundance.films.count"
puts sundance.films.count
# commented out because sundance has no films so this would crash
puts "#sundance.films.first.name"
# puts sundance.films.first.name
puts

binding.pry
