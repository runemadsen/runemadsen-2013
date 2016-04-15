---
layout:     blog
title:      "Video and Processing.js"
date:       2010-09-29 18:43:22
categories: blog
---

![arduinoroll]({% asset_path blog/arduinoroll.jpg %})

I'm currently working on a project with [Greg Borenstein](http://urbanhonking.com/ideasfordozens/) and [Zeven Rodriguez](http://zevenwolf.com/blog/), trying to use HTML5 video and the Processing.js javascript library to create a more interactive way of documenting electronic projects... more about that later.

[This is a small example](/code/processingvideo/video.html) showing how to overlay a canvas element on top of a video element. The ultimate goal is to control both the Processing canvas and the video via JQuery. In this example I'm basically just setting the 2 elements to overlay each other via absolute positioning. The example is tested in Safari 5.02 and Chrome 6.04 on Snow Leopard.

**Update:** Greg tweaked the code to allow control of video canvas from within the Processing.js canvas. His code basically uses the mouseX variable in the processing.js javascript file and calls normal javascript (JQuery) methods embedded in the html page. Check out the link to the Github repo to download the code.

[See the Example](code/processingvideo/video.html)
[Source Code on GitHub](http://github.com/runemadsen/ProcessingJSVideo)
