---
layout:     blog
title:      "itouchyoutouch"
date:       2010-03-24 20:56:29
categories: blog
---

<iframe src="https://player.vimeo.com/video/10443431?title=0&amp;byline=0&amp;portrait=0&amp;color=ffd663" width="600" height="450" frameborder="0"> </iframe>

Itouchyoutouch is a prototype for an interactive installation I did with <a target="_blank" href="http://www.addictivelabs.com/">Nikolas Psaroudakis</a> in Open Frameworks. We wanted to create a way for people to interact and form connections across time using spatial media. The installation consists of a round table with a touch sensitive surface. When a user touches the screen, particles will be emitted from the outline of the users hand. The movement of the hand will be recorded and stored - along with the outline of the hand - in an XML file.

<img alt="touches_multi" src="{% asset_path blog/touches_multi.jpg %}" />

This allows other users to touch the surface and interact with recorded touches: When you touch the surface, the application finds the oldest touch and plays this back along with the current users touch.

<img alt="touches_noconnect" src="{% asset_path blog/touches_noconnect.jpg %}" />

When a user moves his hand on top of and old touch, the particles emitting from the 2 touches will establish gravity and start moving towards each other. The color of the particles will also change, signaling a connection.

<img alt="touches_connect" src="{% asset_path blog/touches_connect.jpg %}" />

The installation is built to allow multi-touch and can be used by many users at the same time.

<img alt="touches_multi2" src="{% asset_path blog/touches_multi2.jpg %}" />