---
layout: blog
title:  "Record video from C++"
date:   2010-10-13 15:46:54
categories: blog
permalink: "blog/record-video-from-c"
---

**Update: I've created an openframeworks wrapper around the VLC remote features. You can [find the details here](http://ofxaddons.com/repos/528)**.

For a new project I needed to be able to record video from within an OpenFrameworks / Cinder project. I immediately started looking for libraries supporting this, but both of the frameworks fell short. Then I saw that the amazing [VLC player](http://www.videolan.org/vlc/) had all that I needed:

1. Full control from the command line
2. Ability to capture from input devices
3. Ability to save captured movie to file

I researched how to run terminal commands on OSX from within C++, and found out that it's very easy using the _system()_ function. So I created a [Gist on Github that shows how to run a simple command from a C++ script](http://gist.github.com/624284). All you need is to run the needed commands from C++ to make VLC do whatever you want to. Check out [VLC's command line documentation](http://wiki.videolan.org/VLC_command-line_help) for more info. You may also need to look at the [OSX specific page](http://wiki.videolan.org/Mac_OS_X). I will continue to update [this GitHub repository](http://github.com/runemadsen/TimeMachine) with code as I continue to develop this project further.