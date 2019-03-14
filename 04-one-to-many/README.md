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
  - `#initialize` which takes a username and have
  - a reader, writer method for the username
  - `#tweets` that returns an array of Tweet instances
  - `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection
- Create a Tweet class. The class should have these methods:
  - `#message` that returns a string
  - `#user` that returns an instance of the user class
  - `.all` that returns all the Tweets created.
  - `#username` that returns the username of the tweet's user