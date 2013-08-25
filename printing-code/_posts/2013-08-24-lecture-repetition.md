---
layout:     printing-code
title:      Repetition
date:       2013-08-24 19:15:22
categories: printing-code
---


Repetition
==========

Humans have a weird fascination with repetition. The effect of marching soldiers, the arrangement of a bed of flowers. Crowds at football stadiums or concerts. A migrating flock of birds. It's almost hypnotic.

<img src="{% asset_path printing-code/repetition/grapefruit.jpg %}" data-slideshow="{% asset_path printing-code/repetition/grapefruit.jpg %}" />

Repetition in Graphic Design
----------------------------

In graphic design, we can repeat font style, graphic, line, icons, colors, etc. We can use repetition for many things. However, repetition is not something humans are good at. Take this poster by Paul Rand for example.

<img src="{% asset_path printing-code/repetition/repetition_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/repetition.jpg %}" />

Paul Rand had to manually arrange all those hearts, in order to simulate a very computational repetition. However, as programmers, we can distill his design rule into code. Here's that exact same design, recreated in Processing.

<img src="{% asset_path printing-code/repetition/repetition_rune_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/repetition_rune.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/repetition/repetition)

But now that we have the design rule in code, we can randomize some value, in order to create a dynamic design, where we quickly can explore different designs.

<img src="{% asset_path printing-code/repetition/repetition_rune2_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/repetition_rune2.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/repetition/repetition)

<img src="{% asset_path printing-code/repetition/repetition_rune3_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/repetition_rune3.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/repetition/repetition)

<img src="{% asset_path printing-code/repetition/repetition_rune4_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/repetition_rune4.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/repetition/repetition)

<img src="{% asset_path printing-code/repetition/repetition_rune5_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/repetition_rune5.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/repetition/repetition)

<img src="{% asset_path printing-code/repetition/repetition_rune6_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/repetition_rune6.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/repetition/repetition)

<img src="{% asset_path printing-code/repetition/repetition_rune7_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/repetition_rune7.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/repetition/repetition)

<img src="{% asset_path printing-code/repetition/repetition_rune8_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/repetition_rune8.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/repetition/repetition)

<img src="{% asset_path printing-code/repetition/repetition_rune9_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/repetition_rune9.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/repetition/repetition)

If we really look at the graphic design masters, repetition is used throughout our graphic design history, and it can be used for many different purposes. Here's a few examples.

Repetition as Movement
----------------------

<img src="{% asset_path printing-code/repetition/pintori_movement_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/pintori_movement.jpg %}" />

<img src="{% asset_path printing-code/repetition/pintori_movement2_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/pintori_movement2.jpg %}" />

<img src="{% asset_path printing-code/repetition/rand_movement_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/rand_movement.jpg %}" />

Repetition as Rhythm
--------------------

<img src="{% asset_path printing-code/repetition/rand_rhythm_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/rand_rhythm.jpg %}" />

<img src="{% asset_path printing-code/repetition/brockmann_rhythm_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/brockmann_rhythm.jpg %}" />

<img src="{% asset_path printing-code/repetition/brockmann_rhythm2_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/brockmann_rhythm2.png %}" />

Repetition as Direction
-----------------------

<img src="{% asset_path printing-code/repetition/megert_direction_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/megert_direction.png %}" />

<img src="{% asset_path printing-code/repetition/rand_direction_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/rand_direction.jpg %}" />

<img src="{% asset_path printing-code/repetition/direction2_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/direction2.png %}" />

Repetition as Texture
---------------------

<img src="{% asset_path printing-code/repetition/mandala_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/mandala.jpg %}" />

<img src="{% asset_path printing-code/repetition/champalimaud_texture_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/champalimaud_texture.jpg %}" />

<img src="{% asset_path printing-code/repetition/lewitt_texture_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/lewitt_texture.jpg %}" />

<img src="{% asset_path printing-code/repetition/lewitt_texture2_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/lewitt_texture2.jpg %}" />


Repetition in Processing
------------------------

When it comes to repetition and tiling, there are 2 distinct types of patterns. The periodic tiling:

<img src="{% asset_path printing-code/repetition/repetition_periodic_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/repetition_periodic.jpg %}" />

... and the aperiodic tiling:

<img src="{% asset_path printing-code/repetition/repetition_aperiodic_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/repetition_aperiodic.png %}" />

Periodic Tiling
---------------

It's pretty easy to do periodic tiling in Processing. Here's an example of an extremely ugly pattern created with a for-loop.

<img src="{% asset_path printing-code/repetition/simple_pattern_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/simple_pattern.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/repetition/simple_pattern)

Here's a slightly better looking cube pattern.

<img src="{% asset_path printing-code/repetition/cube_pattern_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/cube_pattern.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/repetition/cube_pattern)

Here's that same cube pattern code, but using a function to clean up the main setup function.

<img src="{% asset_path printing-code/repetition/cube_pattern_class_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/cube_pattern_class.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/repetition/cube_pattern_function)

Here I'm using the class twice to overlay two patterns

<img src="{% asset_path printing-code/repetition/cube_pattern_class_overlay_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/cube_pattern_class_overlay.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/repetition/cube_pattern_function_overlay)

However, these patterns only allow us to create stricly repetitive patterns. To do more sophisticated patterns, we need to learn about aperiodic tiling.


Recursion
---------

Crucial to the concept of aperiodic tiling is recursion. 

<img src="{% asset_path printing-code/repetition/recursion_ref_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/recursion_ref.jpg %}" />

<img src="{% asset_path printing-code/repetition/recursion_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/recursion.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/repetition/recursion)

Or here's a slightly more usable example, where I'm splitting a rectangle via recursion.

<img src="{% asset_path printing-code/repetition/recursion2_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/recursion2.png %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/repetition/recursion2)


Aperiodic Tiling: Substitution Rules
------------------------------------

**Simple aperiodic tiling**

[Substitution Rule](http://web.media.mit.edu/~black/tiles/aperiodic.html)

<img src="{% asset_path printing-code/repetition/aperiodic_division_simple_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/aperiodic_division_simple.jpg %}" />

<img src="{% asset_path printing-code/repetition/aperiodic_division_simple2_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/aperiodic_division_simple2.jpg %}" />

<img src="{% asset_path printing-code/repetition/aperiodic_division_simple3_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/aperiodic_division_simple3.jpg %}" />

<img src="{% asset_path printing-code/repetition/aperiodic_division_simple4_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/aperiodic_division_simple4.jpg %}" />

<img src="{% asset_path printing-code/repetition/aperiodic_division_simple5_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/aperiodic_division_simple5.jpg %}" />

<img src="{% asset_path printing-code/repetition/aperiodic_division_simple6_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/aperiodic_division_simple6.jpg %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/repetition/aperiodic_tiling)

**Slightly more advanced aperiodic tiling**

[Substitution Rule](http://tilings.math.uni-bielefeld.de/substitution_rules/t2000)

<img src="{% asset_path printing-code/repetition/aperiodic_division_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/aperiodic_division.jpg %}" />

<img src="{% asset_path printing-code/repetition/aperiodic_division2_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/aperiodic_division2.jpg %}" />

<img src="{% asset_path printing-code/repetition/aperiodic_division3_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/aperiodic_division3.jpg %}" />

<img src="{% asset_path printing-code/repetition/aperiodic_division4_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/aperiodic_division4.jpg %}" />

<img src="{% asset_path printing-code/repetition/aperiodic_division5_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/aperiodic_division5.jpg %}" />

<img src="{% asset_path printing-code/repetition/aperiodic_division6_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/aperiodic_division6.jpg %}" />

<img src="{% asset_path printing-code/repetition/aperiodic_pattern_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/aperiodic_pattern.jpg %}" />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/code/repetition/aperiodic_tiling2)


Some Pattern Examples
---------------------

Andy Gilmore

<img src="{% asset_path printing-code/repetition/gilmore1_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/gilmore1.jpg %}" />

<img src="{% asset_path printing-code/repetition/gilmore2_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/gilmore2.jpg %}" />

<img src="{% asset_path printing-code/repetition/gilmore3_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/gilmore3.jpg %}" />

<img src="{% asset_path printing-code/repetition/gilmore4_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/gilmore4.jpg %}" />

<img src="{% asset_path printing-code/repetition/gilmore5_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/gilmore5.jpg %}" />

<img src="{% asset_path printing-code/repetition/gilmore6_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/gilmore6.jpg %}" />

<img src="{% asset_path printing-code/repetition/gilmore7_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/gilmore7.jpg %}" />

<img src="{% asset_path printing-code/repetition/gilmore8_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/gilmore8.jpg %}" />

<img src="{% asset_path printing-code/repetition/gilmore9_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/gilmore9.jpg %}" />

<img src="{% asset_path printing-code/repetition/gilmore10_small.jpg %}" data-slideshow="{% asset_path printing-code/repetition/gilmore10.jpg %}" />


Links
-----

* [Inspirational Patterns #1](http://design.org/blog/patterns-and-graphic-design-yegor-legkov)
* [Inspirational Patterns #2](http://pinterest.com/cukri/graphic-design-patterns-textures/)
* [Fabric Patters](http://patternobserver.com/)
* [Islamic Patterns Research Project](http://nomadinception.com/gallery-arabic-patterns-islamic-patterns-research.aspx)
* [Pattern Substitution Rules](http://tilings.math.uni-bielefeld.de/substitution_rules/)
* [More substitutions](http://web.media.mit.edu/~black/tiles/aperiodic.html)