---
layout: work
title: Speech Comparison
date: 2011-05-10 22:00:00
excerpt: |
  This interactive infographic is a data visualization of word usage in 9 famous speeches.
categories: work
poster: work/speech-comparison.jpg
permalink: "work/speech-comparison"
---

The speech comparison data visualization is a sketch built in [Processing](http://processing.org/). It parses words from 9 famous speeches and displays the results in a custom diagram. All words are arranged in the right-hand side, ordered by the number of times they appear in the speeches. Each word has an arc divided into 9 colors representing the speakers. By looking at these arcs, you can see the word-use percentages of all speakers.

The design is inspired by works shown in the early [Graphis Diagrams](http://www.flickr.com/search/?q=graphis) books. The sketch uses [Robert Penners easing equations](http://www.robertpenner.com/easing/) ported to Processing for animation.

By pressing keys 1-9 you can highlight a single speech to get an overview of the word-use. Pressing the number 0 will show all the speeches again. Pressing space will reset the sketch and show the arc animation from the beginning.

You can find the [Source code on Github](http://github.com/runemadsen/SpeechComparison).
	
<div class="wide-750">
  <img src="{% asset_path work/speech-comparison.jpg %}" />
</div>

<img src="{% asset_path work/speech-comparison2.jpg %}" />

<img src="{% asset_path work/speech-comparison3.jpg %}" />

<img src="{% asset_path work/speech-comparison4.jpg %}" />