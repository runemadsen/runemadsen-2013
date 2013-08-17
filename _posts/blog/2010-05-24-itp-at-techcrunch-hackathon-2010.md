---
layout:     blog
title:      "ITP at TechCrunch Hackathon 2010"
date:       2010-05-24 18:51:57
categories: blog
---

<iframe src="http://player.vimeo.com/video/11964814?title=0&amp;byline=0&amp;portrait=0&amp;color=ffd663" width="600" height="450" frameborder="0"></iframe>

Yesterday I participated in TechCrunch's HackDisrupt with a team of 6 other fellow students from ITP. The idea of the event is for teams to come up with an idea, create it and present it on stage within a period of 20 hours. Our project was called API For the World and consisted of a physical device and an API build in Ruby on Rails. With this you can turn anything with a power cord into a networked object. It allows the electric appliances around us to communicate with the internet, filling the gap between "smart" and low-tech devices. We're calling this a social network for everyday objects, because you can use an online dashboard to create unique profiles for different objects in your house and connect them to a variety of web services (e.g. let your lamp post to Twitter or you oven post directly to Patchube every time it's being used).

When the day started, we split into 2 groups: a group building the physical device and another group building the Rails app.

The group building the physical device started the day by building their own current sensor. Sofy wrote a great blog post about this (http://yuditskaya.com/wordpress/). The box have a current sensor, an Arduino and an Xbee to wirelessly communicate with a Processing sketch on your computer. The box was meant to post directly to the internet, but we couldn't get a static IP on the network. The box also has a power outlet, so you can connect the box to your power outlet and any electric appliance to the box. See <a target="_blank" href="http://itp.nyu.edu/~sz590/blog/2010/05/23/api-for-the-world/">Shahars blog post about setting up the code</a>, and <a target="_blank" href="http://github.com/shaharz/A4W-Arduino">download the Arduino code via Github</a>.

I started the day designing the webpage layout and converting this to static HTML pages. Cameron Cundiff scaffolded away in the Rails environment, and pretty soon we had a good looking website   API. We used Github for working on the Rails code at the same time, and you can <a target="_blank" href="https://github.com/ckundo/a4w">download the code for the Rails app on our Github repository</a>. For hosting the application we used <a target="_blank" href="http://www.heroku.com">Heroku</a>, which is an online hosting service you can push your code directly to using Git.

By the morning we had a fully functional prototype: By turning on a lamp we could post tweets to Twitter. We had a fully working dashboard, where you can create new devices, browse their messages and create new behaviors (connecting them to external API's like Twitter, Facebook or Patchube - basically all sites with an API).

It was definitely a great 20 hours of hacking, and it's surprising how fast you can actually build a prototype of your idea. Sometimes people tend to think a great project also require a great deal of planning (skethes, diagrams, user stories, etc..), but this weekend was a great reminder of how important it is to start producing immediatly. It gets you so much faster to the restructuring process that will eventually come in every project. It also makes you a lot less scared of it, because you haven't spent half a year getting to it.

Photos on Flickr:<br /><a href="http://www.flickr.com/photos/imagima/sets/72157623994972293/">http://www.flickr.com/photos/imagima/sets/72157623994972293/</a>

Press Coverage:<br /><a target="_blank" href="http://techcrunch.com/2010/05/22/inside-disrupt-hackathon-video/">http://techcrunch.com/2010/05/22/inside-disrupt-hackathon-video/</a><br /><a target="_blank" href="http://www.zdnet.com/blog/weblife/best-of-techcrunch-disrupt-hack-day-demos/1743">http://www.zdnet.com/blog/weblife/best-of-techcrunch-disrupt-hack-day-demos/1743</a>

Visit the API for the World Website:<br /><a target="_blank" href="http://www.heroku.com">http://www.heroku.com</a>
