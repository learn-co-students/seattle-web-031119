## Objectives
- Discuss different encryption and hashing schemes
  - there's a lot to know about them.
  - Hashing - tranforming a ruby object into another sequence.
  - use `Digest::SHA256.base64digest`
  - deterministic => same input leads to same output
- encryption
  - secret code,
  - use a cipher to decrypt
- introduce `bcrypt`
  - `has_secure_password` macro
- Augment a user model in rails using `bcrypt`
  - `BCrypt::Password.create('beef')`
  - `authenticate`

## Rules of Auth
- you don't store passwords as plain text
- password hashing is one-way encryption (we never decrypt it)

## Resources
- [Digest](https://ruby-doc.org/stdlib-2.2.1/libdoc/digest/rdoc/Digest.html)
- [BCrypt](https://github.com/codahale/bcrypt-ruby)
