---
layout:     blog
title:      "Balloon Projections"
date:       2010-05-05 16:58:02
categories: blog
---

This video shows a series of audio responsive animations projected onto a cluster of balloons. The projections are going to be used as a part of the stage show for an upcoming US tour. The balloons will be mounted onto an old barrel organ that is a part of the musical performance.

<iframe src="http://player.vimeo.com/video/17891021?title=0&amp;byline=0&amp;portrait=0&amp;color=ffd663" width="600" height="338" frameborder="0"></iframe>

The animations and the software framework is all done in OpenFrameworks. The framework is a Model-View-Controller framework that consists of a number of elements. By pressing "r" you will set the application into record mode, which will enable you to click on the screen to create a new ballon model object and assign the current mouse location to it. You can also plot the points directly on a video feed via the control panel (pressing space), which will automatically map the video coordinates to screen coordinates.

Each ballon can be positioned and scaled individually via a custom control panel or via shortcuts on the keyboard. You can also displace the position and scale of all the ballons if needed. This is useful when mapping from the video feed to the projection space. You can save all the *Balloon* model objects to XML by pressing *Shift - S* and load them into the program by pressing *Shift - L*. The control panel will also keep track of it's settings from build to build via XML.

There a 5 animations in the video: An animation showing coloured circles, an animation showing a PNG image of a head, an animation showing a sky of stars on each balloon, an animation showing singing heads and finally an animation showing letters. These animations can be controlled via MIDI: all of the animations extends the *Animation* class, which automatically takes care of the following process:

The selected animation (the one current being shown) will get all of the balloon model objects from the *Sensing* class and automcatically create a BallonController object for each model object. These objects are also automatically updated every frame. The *Animation* class also handles all MIDI triggering, assigning a midi note to each *BalloonController* object and calling the *nodeOn()* and *nodeOff()* methods of this class.

Creating an animation is a simple, 2-step process: First you need to extend the *Animation* class, which will serve as the base of this animation. Next, you need to extend the *BalloonController* class. The animation class will automatically create one of these objects for every *Balloon* model it receives from the *Sensing* class. To specifiy that you want exaclty these objects to be created, you need to implement the *getNewBalloonController()* method in you subclass of the *Animation* class and return your subclass of *BalloonController* in this method.

To change the midi note each balloon corresponds to is as simple as pushing integers into the *\_midiNotes* vector in your subclass of the *Animation* class. The balloons wil automatically get midi notes assigned, but you can customized these notes via this vector.

The animation with a sky of stars uses the OpenGL Vertex Buffer Objects to draw the particle images. Each balloon draws around 1500 particles each, but I have found I can go to around 80.000 total particles still having a framerate around 60 fps.

<a target="_blank" href="http://github.com/Ronze/SpatialMediaFinal">Source Code on GitHub</a>