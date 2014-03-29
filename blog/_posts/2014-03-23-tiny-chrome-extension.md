---
layout:     blog
title:      "Tiny Chrome Extension"
date:       2014-03-23 16:53:00
categories: blog
permalink: "blog/tiny-chrome-extension"
---

<div class="wide-750">
  <img alt="header hunter" src="{% asset_path blog/headerhunter.jpg %}" />
</div>

I made a silly one-day hack in the form a Chrome extension called [Header Hunter](https://chrome.google.com/webstore/detail/headerhunter/almeoedichpmgpjhobhenfacacpohbma). It's a simple Google Chrome extension that will show a small alert whenever you visit a website that returns recruitment messages in the HTTP headers.

A few companies started adding recruitment messages via "X-Recruiting", "X-Hacker", "X-Hire" or "X-Jobs" HTTP headers. Without any centralized job site, this extension turns your browser into a job listing app, by reading these headers when they are present. All web admins have to do is to include one of these headers with a custom message to the user.

You can [contribute to the development on GitHub](https://github.com/runemadsen/headerhunter).