source 'https://rubygems.org'

def darwin_only(require_as)
  RUBY_PLATFORM.include?('darwin') && require_as
end

def linux_only(require_as)
  RUBY_PLATFORM.include?('linux') && require_as
end

group :production, :staging do
  gem 'rack-cache', :require => 'rack/cache'
end

gem 'rails', '~> 4.0'
gem 'foreman'
gem 'capistrano', '~> 2.15'
gem 'dalli'
gem 'exception_notification'
gem 'angularjs-rails'

# SEO
gem 'sitemap_generator'

# Cron
gem 'whenever', require: false

# Server
gem 'unicorn' #staging and production
gem 'thin', group: :development

#Database
gem 'pg'
# gem 'activerecord-postgres-hstore'

# Templating
gem 'slim'
gem 'slim-rails', group: :development

# Form helpers
gem 'simple_form', '~> 3.0'

# Pagination
# gem 'kaminari'

# Date and time
gem 'chronic'

# Settings (password)
gem 'settingslogic'

# Queues
# gem 'queue_classic'

# Javascript
gem 'turbolinks'
gem 'jquery-turbolinks'
gem 'jquery-rails'

# JSON
# gem 'jbuilder'

# CSS
gem 'sass-rails','>= 4.0.0'
gem 'coffee-rails','>= 4.0.0'
gem 'uglifier', '>= 1.3.0'

group :development do
  gem 'letter_opener'
  gem 'quiet_assets'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'pry-debugger'
  gem 'rails-erd' #generates ERD model diagrams
  gem 'annotate'
  # gem 'meta_request' (might break file upload)
  # gem 'xray-rails'   (might break js)
end

group :development, :test do
  gem 'pry-rails'
  gem 'faker'
  gem 'minitest-rails'
  gem 'factory_girl_rails'
  gem 'rb-fsevent',               require: darwin_only('rb-fsevent')
  gem 'terminal-notifier-guard',  require: darwin_only('terminal-notifier-guard')
  gem 'rb-inotify',               require: linux_only('rb-inotify')
  gem 'guard-minitest'
  # gem 'spinach-rails'
  # gem 'guard-spinach'
end

group :test do
  gem 'timecop'
  gem 'capybara-screenshot'
  gem 'capybara-webkit' #brew install qt
  gem 'minitest-metadata', require: false
  # gem "codeclimate-test-reporter", require: false
  gem 'minitest-rails-capybara'
  gem 'database_cleaner'
  gem 'simplecov', require: false
  gem 'turn', require: false
  gem 'mocha'
end

# group :doc do
#   # bundle exec rake doc:rails generates the API under doc/api.
#   gem 'sdoc', require: false
# end
