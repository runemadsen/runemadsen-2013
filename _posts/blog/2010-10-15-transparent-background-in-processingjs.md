---
layout:     blog
title:      "Transparent background in Processing.js"
date:       2010-10-15 01:03:52
categories: blog
---

This took me a while to figure out because the documentation on the processing.js is way behind. I wanted to overlay a processing.js element on top of a video canvas, which I already did a while ago, but updating to the newest version of processing.js made the canvas background grey. I searched through the source code and found out that to enable transparent background in your processing.js canvas, you need to add this directive to your javascript code:

<script src="https://gist.github.com/2077169.js"> </script>

You can find a working example in<a target="_blank" href="http://github.com/runemadsen/ArduinoDocs"> this Github repository</a>.