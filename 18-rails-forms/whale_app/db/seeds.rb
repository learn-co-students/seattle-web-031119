# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Merby.create(name: "Moby Dick", species: "Sperm", kill_count: 100, length: 50, alive: true)
#<Merby id: 1, species: "White", kill_count: 100, length: 50, alive: true, created_at: "2019-04-08 16:29:23", updated_at: "2019-04-08 16:29:23">
Merby.create(name: "Nicey", species: "Baleen", kill_count: 05, length: 30, alive: true)
#<Merby id: 2, species: "Baleen", kill_count: 5, length: 30, alive: true, created_at: "2019-04-08 16:31:02", updated_at: "2019-04-08 16:31:02">
Merby.create(name: "Happy", species: "Beluga", kill_count: 00, length: 200, alive: true)
#<Merby id: 3, species: "Beluga", kill_count: 0, length: 200, alive: true, created_at: "2019-04-08 16:31:18", updated_at: "2019-04-08 16:31:18">
Merby.create(name: "Power", species: "Beaked", kill_count: 40, length: 04, alive: true)
#<Merby id: 4, species: "Beaked", kill_count: 40, length: 4, alive: true, created_at: "2019-04-08 16:31:56", updated_at: "2019-04-08 16:31:56">
Merby.create(name: "leader", species: "narwhal", kill_count: 40, length: 04, alive: true)
#<Merby id: 5, species: "narwhal", kill_count: 40, length: 4, alive: true, created_at: "2019-04-08 16:32:29", updated_at: "2019-04-08 16:32:29">
Sailor.create(name: "Ishmael", peg_leg: false, kill_count: 100, seen_whale: false)
#<Sailor id: 1, name: "Ishmael", peg_leg: false, kill_count: 100, created_at: "2019-04-08 16:33:22", updated_at: "2019-04-08 16:33:22">
Sailor.create(name: "Captain Ahab", peg_leg: true, kill_count: 5, seen_whale: true)
#<Sailor id: 2, name: "Captain Ahab", peg_leg: true, kill_count: 5, created_at: "2019-04-08 16:34:07", updated_at: "2019-04-08 16:34:07">
Sailor.create(name: "Elijah", peg_leg: true, kill_count: 0, seen_whale: false)
#<Sailor id: 3, name: "Elijah", peg_leg: true, kill_count: 0, created_at: "2019-04-08 16:34:37", updated_at: "2019-04-08 16:34:37">
Sailor.create(name: "Father Mapple", peg_leg: false, kill_count: 0, seen_whale: true)
#<Sailor id: 4, name: "Father Mapple", peg_leg: false, kill_count: 0, created_at: "2019-04-08 16:35:03", updated_at: "2019-04-08 16:35:03">
Sailor.create(name: "Captain Peleg", peg_leg: true, kill_count: 10, seen_whale: true)
#<Sailor id: 5, name: "Captain Peleg", peg_leg: true, kill_count: 10, created_at: "2019-04-08 16:35:32", updated_at: "2019-04-08 16:35:32">
Sailor.create(name: "Captain Boomer", peg_leg: true, kill_count: 200, seen_whale: false)
#<Sailor id: 6, name: "Captain Boomer", peg_leg: true, kill_count: 200, created_at: "2019-04-08 16:36:30", updated_at: "2019-04-08 16:36:30">
