---
layout:     blog
title:      "OK Go – a Golang template for Ruby on Rails developers"
date:       2014-11-26 15:18:00
categories: blog
description: "A Golang application template inspired by Ruby on Rails."
keywords: "Go, Golang, templates, skeleton, project structure"
---

<img src="{% asset_path blog/okgo.jpg %}" />

I have been interested in Go for a while. The benefits are obvious: It’s crazy fast, optimized for concurrency, and the standalone binaries are wonderful for deployments. My Rails app takes about 18 seconds just to come to life, so the speed alone is a huge win for me.

However, getting started with Go is not easy. Say what you want about Ruby on Rails, but it’s hard to find a framework that makes is so easy to get started. Moving to Go feels a bit like coding a new application in Rack: The libraries are there, but you have to integrate everything by yourself. Being closer to the metal is incredible, but ease of use is important too. The popularity of frameworks like Martini is a testament to that.

To contribute a little bit, I’ve been working on a template for Go applications, inspired by some of the concepts from Rails. It has folders for models, views and controllers (models, templates and routes in Go speak). It ships with sane defaults for databases. It has an asset pipeline. It has route and model tests. It *just works* on Heroku.

It is my hope that this template can serve as reference for developers starting out with Go. It might very well be that you will end up using only a few things from the template, but I think it's beneficial to demonstrate all of these concepts in the same application code.

The code itself is heavily commented, and all folders have a README file for clarification. Pull requests are more than welcome, and so is questions and comments on Twitter ([@runemadsen](https://www.twitter.com/runemadsen)).

You can find the GitHub repository here: [OK-GO on GitHub](https://github.com/runemadsen/ok-go)

