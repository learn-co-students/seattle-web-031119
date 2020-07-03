### Deploying to Heroku


# Assumed before deploying
- `rails new app_name --database=postgresql`
- `rails db:setup` makes our db for postgresql
- `rails db:migrate`
- nice to have [Postico](https://eggerapps.at/postico/) [Postgresql GUI](https://postgresapp.com/downloads.html) for viewing your db
  
# Deploying to heroku
- Install heroku CLI [CLI ](https://devcenter.heroku.com/articles/heroku-cli)
- Run `heroku login` in your terminal.
- It will open a browser window and ask you to signin to your account if you dont have one make one.
- In your terminal run `ls -a` and make sure that you have a `.git` file if you do not run `git init` to initialize it.
- Navigate to github and make a repo for your app
- Copy the path to the app and run in terminal `git remote add origin "path_to_gh_app"`
- Run `git remote -v` in terminal you should see an origin now
- `git add git commit git push` 
- In terminal run `heroku create` this will provision a new heroku app for you.
- In terminal run `git remote -v` to see new remote that was added.
- In terminal run `git push heroku master`
- In terminal run `heroku run rake db:migrate`
- In terminal run `heroku open`

## To rename your app
- In terminal run `heroku apps:rename "newname"`
