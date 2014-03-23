---
layout:     blog
title:      "Generative Webfonts with JS"
date:       2014-03-08 13:55:00
categories: blog
permalink: "blog/gerstner-js"
---

These last couple of weekends I've been toying around with the idea of generating CSS rules via Javascript, trying to see if that could open up some opportunities for fun browser experiments. I've been compiling all this functionality into a library I call [Gerstner.js](https://github.com/runemadsen/gerstner.js).

Yesterday I added the ability to generate SVG webfonts with the library. The idea is that SVG support is getting rather good in most browsers, as is web font support. Now that most browsers support SVG data for their font-face rules, it's possible to generate this SVG at runtime and base64-encode the result to a data-uri in a generated stylesheet.

This makes it possible to dynamically generate rule-based fonts in Javascript, and even animate the fonts while preserving full text capability. [I made a small fun example to demonstrate this](/experiments/generative-webfont).

<a href="/experiments/generative-webfont"><img alt="generative" src="{% asset_path blog/webfonts.jpg %}" /></a>