bundle exec rake assets:precompile
git add -A
git commit -m "Precompile for Heroku."
git push heroku master
git reset --hard HEAD~1
