#!/bin/bash

#
# NOTIFY FLOWDOCK OF DEPLOY
#
# The following script attempts to send a message to Flowdock via CURL
# passing in SHA or TAG information from git
#

# Go to the directory where git lives, so we can get some info about the deploy
cd /var/www/{{ app.dirname }}/repo;

# Get the name of the branch we are on
BRANCH=$(git symbolic-ref --short HEAD);

# Register the SHA and truncate it to 8 characters
SHA=$(git rev-parse HEAD);

# Register the TAG
TAG=$(git describe --tags);

# If the TAG does not exist, use the SHA we just grabbed
CUT_TAG=$(echo $TAG | cut -c1-5);

if [ $CUT_TAG = "fatal" ]
then
  TAG=$(echo $SHA | cut -c1-8);
fi

# Set the current datetime in mm/dd/yyyy hh:mm:ss format
DATETIME=$(date '+%m/%d/%Y %H:%M:%S');

# Write up the request JSON
JSON="{
  \"flow_token\": \"{{ flowdock.technology }}\",
  \"event\": \"activity\",
  \"author\": {
    \"name\": \"Cameron\",
    \"avatar\": \"https://en.gravatar.com/userimage/2637779/1d4fb9a69e7072d0ea6a2bba05982a06.jpg\"
  },
  \"title\": \"deployment\",
  \"external_thread_id\": \"${SHA}-${DATETIME}\",
  \"thread\": {
    \"title\": \"Deployed ${TAG} on ${BRANCH} on {{ app.servername }}\",
    \"body\": \"<a href='https://github.com/infocusjobs/InFocusJobs/commit/${SHA}' title='View on Github'>View on Github</a>\"
  }
}";


# Debug everthing...
echo "branch_name: ${BRANCH}";
echo "git_sha: ${SHA}";
echo "git_tag: ${TAG}";
echo "datetime: ${DATETIME}";
echo "json: ${JSON}";

# Make the request
curl -i -s -S -X POST -H "Content-Type: application/json" -d "${JSON}" https://api.flowdock.com/messages;