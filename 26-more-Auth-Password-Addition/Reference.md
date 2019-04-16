```ruby
  def password=(password)
    self.password_digest = Digest::SHA256.base64digest
    self.save
  end

  def authenticate(password)
    encrypted_password = Digest::SHA256.base64digest(password)
    encryption_password == self.password_digest
  end
```

## Steps to Authentication
- install gem
- add `has_secure_password` macro to user model
- add password_digest column to user model
- signin
  - add a password field to signin form
  - `user.authenticate` in session create
- signup
  - add a password and password confirmation field to the new user form
  - add password and password confirmation to strong params
