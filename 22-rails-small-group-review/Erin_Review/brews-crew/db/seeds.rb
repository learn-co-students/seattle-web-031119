# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#Brew.destroy_all
Customer.destroy_all

5.times do
  Brew.create(
    blend_name: Faker::Coffee.blend_name,
    origin: Faker::Coffee.origin,
    notes: Faker::Coffee.notes,
    strength: rand(1..5)
  )
end

5.times do
  Customer.create(
    name: Faker::FunnyName.name_with_initial
  )
end

10.times do
  Purchase.create(
    customer: Customer.all.sample,
    price: Faker::Commerce.price(range = 3..7.0),
    brews: Brew.all.sample(3)
  )
end
