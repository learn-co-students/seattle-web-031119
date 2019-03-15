## Objectives
- Implement both sides of a many to many relationship
- Practice keeping groups of data related to classes on the class as a class variable
- Demonstrate single source of truth by not storing collections of objects on other objects
- Demonstrate single source of truth by not storing one object in multiple collections
  - can store one object in mutiple places in case of different type of relationships




## Deliverables

- User class
  - `#like_tweet` that accepts as a tweet instance as a parameter
  - `#liked_tweets` that returns a collection of all the tweets this user has liked
  - `#unlike_tweet`
- Tweet class
  - `#likers` that returns a collection of all the Users who have liked this tweet