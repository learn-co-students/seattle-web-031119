# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Pencil.destroy_all
Pencil.create(color: "yellow", lead_size: 0.7 ,favorite: false, owner_name: "Soundarya")
Pencil.create(color: "red", lead_size: 0.7 ,favorite: false, owner_name: "Rylan")
Pencil.create(color: "blue", lead_size: 0.7 ,favorite: false, owner_name: "Chris")
Pencil.create(color: "black", lead_size: 0.7 ,favorite: false, owner_name: "Erin")
