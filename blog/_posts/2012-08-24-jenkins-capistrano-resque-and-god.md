---
layout: blog
title:  "Jenkins, Capistrano, Resque and God"
date:   2012-08-24 21:05:07
categories: blog
---

I'm currently working on a web application that uses Resque heavily to send jobs to a separate server that picks up these jobs, runs them, and reports back to the Rails app hosted on Heroku.

Until now we have been deploying the workers by SSH'ing into the worker server, pulling down the changes from the github repo, and killing the workers manually by running "kill -QUIT PID". Not exactly continuous integration. So this week I took a stab at optimizing our deployment setup. This is how I did it.

I wanted this: Whenever I push something to the "production" branch on Github, a server running Jenkins will pull down the code and run the tests. If they pass, Jenkins will run a capistrano script that will deploy the code to the worker server. We are using God to monitor our Resque processes, so capistrano would need to kill these processes in order for God to start them up again with the new code.

The big takeaways are:

1) RVM (which we use on the jenkins server for tests and on the worker server for production gems) needs to be installed under the users running the code. This means the "jenkins" user on the Jenkins server and the "worker" user on the worker server. That will save you hours of banging your head against the table.

2) Most docs about god says that it should run as root. That caused me serious headaches, so I run it as the "worker" user, and it works perfectly.

Here's the god configuration file we use to start the processes the first time. Notice how we make god keep track of the process PID's in a custom folder, so we can later use them in a rake script to kill the processes.

<div class="wide-750">
  <script src="https://gist.github.com/3455396.js?file=god.rb"> </script>
</div>

Here's the Capfile and deploy.rb that we use to make Jenkins deploy the new code, install dependencies via bundler, and kill the processes. Normally Capistrano creates all the "current", "releases" and "shared" folders to keep track of different revisions of the code. However, Git has this built in, so this script will just deploy the code directly into the deploy_to folder. Clean and simple. Notice how we override the normal Capistrano methods in order to provide rollback functionality directly in git.

<div class="wide-750">
  <script src="https://gist.github.com/3455396.js?file=Capfile"> </script>
</div>

<div class="wide-750">
  <script src="https://gist.github.com/3455396.js?file=deploy.rb"> </script>
</div>

Lastly, here's the rake script that kills the processes. God will start them up again in order to reload the code.

<div class="wide-750">
  <script src="https://gist.github.com/3455396.js?file=Rakefile"> </script>
</div>
