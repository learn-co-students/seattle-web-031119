# Why Rails
- speed, ease
- built in security
- built from standard conventions
- lots of helper methods to speed things up


# How to Rails

### Run Generator Commands from Terminal
- `rails new meatwich`
  - builds the app

### Before you do anything else
- update Gemfile from `gem 'sqlite3'` to `gem 'sqlite3', '~> 1.3.6'`
  - stops Rails breakage

### More Commands from Terminal
- `rails g model burgers ...attrs` && `rails g controller burgers`
  - makes model, migrations and controller
- OR `rails g resource fries ...attrs`
  - makes model, migrations, controller and adds routes to route file
- `rails db:migrate`
  - migrates your migrations
- `rails s`
  - serves your content on `http://localhost:3000/`

# Do not use this generator, we will find you
- `rails g scaffold student name email grade:integer`

# Rails v Sinatra

### Similar
- gemfiles are the same
- migrations the same, but you can also run with rails db:migrate
- still mvc directory structure
- still writing html with erb

### Different
- routes are now listed in config/routes
  - restart server when changing to reload routes
- controller actions render templates implicitly, no need to `erb :index`

