---
layout:     blog
title:      "Calculating Your PERM Audit Reply Date"
date:       2014-11-16 17:43:00
categories: blog
description: "A very simple way to calculate when you will hear back from your audited PERM application."
keywords: "Ruby, PERM, greencard, audit, average, time"
---

Like many other foreigners in the US, I've been stuck in the greencard application process since early 2013. The frustrations over that process and its toll on my family is a story for another time. Long story short, our greencard application was randomly audited, and we've now been stuck waiting for a reply for 513 days and counting.

The only info you can find about the PERM audit process is that it will take 9-14 months. This weekend, I wanted to see if I couldn't find a better estimate for this, and it was very easy.

Using data from the [Trackitt PERM tracker](http://www.trackitt.com/usa-immigration-trackers/atlanta-perm), I found the last 6 resolved PERM audit cases, and looked at the total processing time for each audit. The ranges were close (573-584 days) with an average of 578 days. Using my own priority date, it was super easy to throw together a small Ruby countdown script.

<script src="https://gist.github.com/runemadsen/0ed83804921343a9cd4d.js"></script>

It seems like I have at least 65 days more of waiting, with an estimated reply date of January 20th 2015. It's very simple stuff, but having a concrete date  feels really good.