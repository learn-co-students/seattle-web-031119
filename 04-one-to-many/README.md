# The World So Far
- class is a blueprint
- initialize method
  - an instance method called by Klass.new
  - customize the data our instance stores
- define what info we want access to with readers/writers
- User class
  - account.owner_name
  - account.user.birthday


# Goals
- Discuss Domain Modeling
- Implement one object to many objects relationship
- Practice passing custom objects as arguments to methods
- Demonstrate single source of truth
- Infer type of method (class or instance) through naming conventions
- Explore self and private methods

* Private reader method with Macro



# Self
  - whoever calls the method
  - the thing before the dot
  - any method that looks at all of the instances of the class, should be class


## Deliverables - Bank Account
Write an implementation of a bank account that meets the following requirements:
- .whale should return the account with the largest balance
  - an array of all accounts
  - examine each one, iterate through comparing balance
  - return the account object for the one with the highest balance
- .overdraw_warning should return all accounts under min balance of 300
  - an array of all accounts
  - use select to find all accounts with balance under 300

## Deliverables - One to Many
- Create a User class. The class should have these methods:
  <!-- - `User#initialize` which takes a username -->
  <!-- - `User#username` reader method -->
  <!-- - `User#tweets` that returns an array of Tweet instances -->
  <!-- - `User#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection -->
  - `User#change_username` allows user to change name
- Create a Tweet class. The class should have these methods:
  <!-- - `Tweet#message` that returns a string
  - `Tweet#user` that returns an instance of the user class -->
  <!-- - `Tweet.all` that returns all the Tweets created. -->
  - `Tweet#username` that returns the username of the tweet's userme of the tweet's user



