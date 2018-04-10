description "Start a Resque worker by supplying an ID. For example: start resque ID=1. See also: resque-workers.conf"

kill signal QUIT

setgid site
setuid site

respawn
respawn limit 5 20

instance $ID

env VERBOSE=true
env QUEUE='default,emails'
env APP_INCLUDE='{{ site.current }}/app/Plugin/CakeResque/Lib/CakeResqueBootstrap.php'
env RESQUE_PHP='{{ site.current }}/app/Vendor/kamisama/php-resque-ex/lib/Resque.php'
env INTERVAL=5
env REDIS_BACKEND='localhost:6379'
env REDIS_DATABASE=0
env REDIS_NAMESPACE='resque:{{ app.code }}:'
env REDIS_PASSWORD=''
env CAKE='{{ site.current }}/lib/Cake/'
env APP='{{ site.current }}/app/'
env COUNT=1
env LOGHANDLER='RotatingFile'
env LOGHANDLERTARGET='{{ site.current }}/app/tmp/logs/resque.log'

script
  cd '{{ site.current }}/app/Vendor/kamisama/php-resque-ex';
  exec bash -c '/usr/bin/php ./bin/resque'
end script