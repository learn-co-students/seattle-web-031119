## Objectives
- Understand, theoretically, how authentication and authorization work
- Sign in vs sign up
- Go over sessions, cookies, and implement log in, and log out

## User Stories

1. As a registered user, I should be able to log in by providing my username (no passwords yet)
  - Does my schema need to change?
  - Do I need any additional routes/views/models?
    - user table / model.
    - new routes.
    - view -> login page.

# User :
  - user vs student
    - maybe like an admin to my page.
  - user table
    - username


2. As an un-authenticated user, I should not be able to see a list of students and information about an individual student.
  - New Route/Model/View - no new creations
  - clear sessions (logout)
  - login_required
    - We added in some conditional/ auth to check privileges around the pages.

3. As an authenticated user I should be able see a list of students and information about an individual student plus create a new student.


4. If an un-authenticated user tries to see the new student form, they should be redirected to the login page.

## Auths
- authentication
- authorization

## Questions
- OAuth - Mod4 (No need to dwelve into now)
- Form_tag (syntax, give fill path in route)

# Login
  - assuming that they are a user.
  - See material they couldn't see before.
