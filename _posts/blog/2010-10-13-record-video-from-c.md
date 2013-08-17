---
layout: blog
title:  "Record video from C++"
date:   2010-10-13 15:46:54
categories: blog
---

<strong>Update: I've created an openframeworks wrapper around the VLC remote features. You can <a href="http://ofxaddons.com/repos/528">find the details here</a></strong>.

For a new project I needed to be able to record video from within an OpenFrameworks / Cinder project. I immediately started looking for libraries supporting this, but both of the frameworks fell short. Then I saw that the amazing <a target="_blank" href="http://www.videolan.org/vlc/">VLC player</a> had all that I needed:


1. Full control from the command line
1. Ability to capture from input devices
1. Ability to save captured movie to file


I researched how to run terminal commands on OSX from within C++, and found out that it's very easy using the _system()_ function. So I created a <a target="_blank" href="http://gist.github.com/624284">Gist on Github that shows how to run a simple command from a C++ script</a>. All you need is to run the needed commands from C++ to make VLC do whatever you want to. Check out <a target="_blank" href="http://wiki.videolan.org/VLC_command-line_help">VLC's command line documentation</a> for more info. You may also need to look at the <a target="_blank" href="http://wiki.videolan.org/Mac_OS_X">OSX specific page</a>. I will continue to update <a href="http://github.com/runemadsen/TimeMachine">this GitHub repository</a> with code as I continue to develop this project further.