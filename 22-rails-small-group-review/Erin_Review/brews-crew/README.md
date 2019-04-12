# README

## Objective

* Perform full CRUD for 1 resource
* Connect multiple resources together
* Understand form helpers

### Getting Started

* Make a Rails app called brews-crew
* Make a model Brew that has attributes `blend_name`, `origin`, `notes`, and `strength`.  The first three are strings, and `strength` is an integer
* Make a model Customer that has a string `name` attribute
* add 'faker' gem to Gemfile
* create seed data (see Faker hint below)

### Deliverables

#### Brews Resource

 - [x] route for '/brews' that displays all of your coffees as links to their show pages, with links to delete each brew
 - [x] route to create a new brew
 - [x] route to edit a brew
 - [x] route to '/brews/strongest' find the brews with the highest strength

#### Purchase Resource

A purchase has many brews, and a brew has many purchases.  A purchase also has a `customer`, which is a Customer instance, and a `price`, which is a float.

 - [x] Make any changes to models needed (migration(s), class(es), association(s))
 - [x] route to create a new purchase
 - [x] the new page should allow you to choose the brews that were purchased (with checkboxes), the customer who made the purchase (with a drop-down), and the price of the purchase (with a textbox)
 - [x] route to show a purchase
 - [x] the show page should include links to the brews that were purchased
 - [x] '/purchases' page that displays all of the purchases as links to their show pages


Now that you have created the purchase association:
 - [x] the brew show page should display a list of all of the customers who have enjoyed that brew

Bonus
 - [] a brew name should be unique
 - [x] a purchase should have a `size`, which should be small, medium, or large
 - [] a purchase should have a `creamer_strength`, which should be light, regular, or none
 - [] a purchase should have `special_instructions`, which should be less than 140 characters

## Faker Hint

We haven't used Faker that much so far.  If you're not sure how to generate seed data with Faker, it should look something like:
```
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
    brews: Brew.all.sample
  )
end
```

## Resources We Used

Things we Googled
 - "rails form helper delete button" https://rubyplus.com/articles/2811-Rails-5-Basics-Delete-Article
 - "rails routes" https://guides.rubyonrails.org/routing.html
 - "rails helper collection_checkboxes" (yes this is the wrong spelling of the helper) https://apidock.com/rails/v4.0.2/ActionView/Helpers/FormOptionsHelper/collection_check_boxes
 - "rails helper collection_select" https://apidock.com/rails/v4.0.2/ActionView/Helpers/FormOptionsHelper/collection_select
 - "activerecord validations" https://guides.rubyonrails.org/active_record_validations.html
 - "rails generate migration add column to table" https://codequizzes.wordpress.com/2013/06/06/rails-migrations-to-add-a-column-and-change-column-type/

Rails generators
 - `rails new brews-crew`
 - `rails g resource Brew blend_name origin notes strength:integer`
 - `rails g resource Customer name`
 - `rails g resource Purchase customer_id:integer price:float`
 - `rails g migration create_join_table_purchases_brews purchases brews` <-- this makes just the migration
 - `rails g model BrewsPurchase purchase_id:integer brew_id:integer` <-- this makes the model and the migration (so you don't actually need the first one)
 - `rails g migration add_size_to_purchase size:string` <-- really this should be "purchases" but Rails is nice and knows what we meant
