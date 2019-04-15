# Rails Quest
We have a pre-built trivia app which presents the user with questions in succession, and allows them to answer.
We can check in our controller whether the user answered correctly or not, but how can we get the server to 'remember' how many questions a user has answered  correctly for as long as they are on the site?

## Deliverables
* Add a feature which displays the number of questions a user has answered correctly
* Add a message which tells the user whether or not they got the last answer correct

## SWBATs
* cookies :
  - stores data for session
  - usuaslly data that's not secure, you don't care if the user changes it.
* session :
  - store data for the whole session
  - secure data
* flash - [hash :  key, values], if you want to access data through one redirect call.
* Bang operator at the end of the method
  * Raise an exception instead of returning nill.

## External Resources:
- [Rails Docs on Sessions](https://guides.rubyonrails.org/security.html#sessions)
- [Wiki Page on HTTP Headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
