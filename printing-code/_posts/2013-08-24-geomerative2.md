---
layout:     printing-code
title:      Geomerative 2
date:       2013-08-24 19:15:22
categories: printing-code
---


Geomerative 2
=============

Vectors and Direction
---------------------

When we looked at vectors last time, I said that a vector is basically just a x,y position. That's true, but often those numbers refer to more than just a location. A vector can, for example, be a number that specifies a direction. If you multiply the vector, you'll get the point further away in this direction. 

This example demonstrates this by drawing 2 lines from the same vector.

<img src="{% asset_path printing-code/geomerative/rpoint_small.jpg %}" data-slideshow="{% asset_path printing-code/geomerative/rpoint.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/geomerative/rpoint)

If we were to demonstrate this in a real-world example, we could make a sketch where a bunch of flowers automatically choose a direction and a length, and dynamically draw themselves. This is a simple example of how that would look like.

<img src="{% asset_path printing-code/geomerative/flowers_small.jpg %}" data-slideshow="{% asset_path printing-code/geomerative/flowers.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/geomerative/flowers)

As you can see, a vector is really fundamental in computational geometry, as all shapes consists of vectors.


Building an RShape
-------------------

Remember that there are 2 different set of classes in Geomerative. One is an RShape (that holds RPath that holds RCommands), which are made up of vertices. Another is Rpolygon (that holds RContour that holds RPoint) whichare the classes that holds an RShape that has been converted to an outline. All of these classes have a "draw" method to quickly draw the object.

Here's a simple example where I'm creating an RShape (a line) and converting to an RPolygon (also a line, but made up of a lot of points, instead of 2).

<img src="{% asset_path printing-code/geomerative/line_small.jpg %}" data-slideshow="{% asset_path printing-code/geomerative/line.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/geomerative/line)

Let's look at a little bit more advanced example, where we'll be creating a small drawing of a house. First we'll create the house as an RShape, and then we'll convert it to an RPolygon to make it feel more like a line drawing.

In the first session on Geomerative, we saw how to create a single wobbly form as an RShape. Here's an example where we draw house - a shape with more than one RPath's.

<img src="{% asset_path printing-code/geomerative/house_small.jpg %}" data-slideshow="{% asset_path printing-code/geomerative/house.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/geomerative/house)

Here's an example of how to convert our house to an outline, in order to simluate a hand-written line.

<img src="{% asset_path printing-code/geomerative/house_wobbly_small.jpg %}" data-slideshow="{% asset_path printing-code/geomerative/house_wobbly.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/geomerative/house_wobbly)


Helpful Functions
-----------------

	RPoint cross?

	TODO: contains

	TODO: BinaryOps - subtracting two shapes form each other

	TODO: BinaryIntersection - to create masks

	TODO: HelloAdaptChildren - use text on a curve