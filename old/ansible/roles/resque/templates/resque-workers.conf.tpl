description "Resque workers"

start on runlevel [2345]

env NUM_WORKERS=5

pre-start script
  for i in `seq 1 $NUM_WORKERS`
  do
    start resque-worker ID=$i
  done
end script

post-stop script
  for inst in `initctl list|grep "^resque-worker " | awk '{print $2}' | tr -d ')' | tr -d '('`
  do
     stop resque-worker ID=$inst
  done
end script