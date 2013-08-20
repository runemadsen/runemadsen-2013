---
layout: blog
title:  "Why beginners should choose Ruby"
date:   2011-03-06 23:34:21
categories: blog
---

I've rarely been as excited about anything related to web development as when making the switch to Ruby a couple of years ago. But it was when my fellow student from [ITP](http://www.itp.nyu.edu), [Greg Borenstein](http://urbanhonking.com/ideasfordozens) introduced me to [Sinatra](http://www.sinatrarb.com/) that I first noticed how perfect an environment Ruby is for web dev beginners.

In this post I will try to illustrate why I think Ruby and Sinatra should be the preferred environment for students who have never programmed before - and why it beats PHP any time.

**The Ruby syntax**

One of the strongest things about Ruby is the language syntax. In Ruby there are no messy variable symbols ($), no semi-colons (;), and the use of curly brackets ({}) and parenthesis () is often optional. This means shorter, readable code. The language structure in Ruby is as close to a written language structure as possible.

In the following few examples I'll try to compare the readability between Ruby and PHP. First is an example of creating an associative array in both languages:

<script src="https://gist.github.com/2075819.js?file=associative.rb"> </script>

The last evaluated value in a Ruby function is always used as the return value. Notice the optional parenthesis in the Ruby function call.

<script src="https://gist.github.com/2076465.js"> </script>

One of the most important things about Ruby is that it's a pure object oriented language, which means that everything is an object (including numbers and string literals). Take the following code that outputs "Hello" 10 times, using the 'times' function of the Number class. Is that not the most read-able for-loop you have ever seen?

<script src="https://gist.github.com/2076498.js"> </script>

There is a clean and defined place for every Ruby function, and this makes the life of the beginner much easier. The exact opposite is true for PHP, where you have to search through odd global functions to perform standard routines. As an example, in PHP you use sizeof() to count the size of an array, but strlen() to count the size of a string. In Ruby it's a different story:
  
<script src="https://gist.github.com/2076531.js"> </script>

This leads me to another important fact about Ruby: It's so well structured that your guess if often enough to find the correct function call of an object. I love this next one. Ruby functions that return boolean values have a question mark at the end:

<script src="https://gist.github.com/2076544.js"> </script>

**Class properties and symbols**
You remember all that time you've spent scrolling up and down in your PHP classes to define or edit class properties and constants, because they need to be defined at the top of the class, but used from within your functions? Ruby gets rid of all this by allowing class properties (using @) and constants (called symbols, using :) to be declared on the fly. The following code examples both do the same thing: create an associative array as a class property and use a constant as a key and a string as a value. PHP uses 10 lines of code to do this. Ruby uses 5. Which example do you think is the easiest to understand for a beginner?
  
<script src="https://gist.github.com/2076561.js"> </script>

**The Ruby Gem system**

One of the areas where PHP really fails is with libraries. Even though people have been using PHP for many years, I've never seen a student use a PHP library in my life. This is a problem with the language framework: To use a PHP library you have to download it, unzip it, copy it to your server root and include it in your script. Kind of a hassle. But what happens when the library gets updated? Then you have to do it all over again.

One of the most powerful things about Ruby is the Gem system. It's a small program that comes with Ruby that can download, update or delete Ruby libraries from a central repository. You can also create your own online repository if you want to. Because Ruby has a central place for all libraries this means that the beginner has easy access to well-documented and well-maintained Ruby libraries (called gems).
  
One of these gems is the Bundler gem, which helps you automatically install the gems you need for your project. Create a simple file in your project folder that lists all the gems your project needs. Run a single command in terminal, "bundle install" , and all your gems will install on the machine. Imagine how easy it is to update libraries in a project: update the Gemfile and run the command again. Deploying to a server that has no Ruby gems installed? No problem. Run "bundle install" after uploading your project files and you're ready to go.

<script src="https://gist.github.com/2076568.js"> </script>

Ruby Gem makes the life of a beginner so much easier, as they almost never have to build complicated functionality by themselves. If someone has done it before, it's probably accessible as a gem. Want to build a Twitter application that saves all of your tweets as PDF's? No problem. Using the Prawn and Twitter gem this is possible with only 10 lines of code.

**Databases and ORM's**

I have not written a single line of SQL code since I started developing in Ruby. This is because there are tons of gems that take care of the database calls for you, the so-called Object Relational Mappers. All programmers know the problem: you work and think in object oriented patterns, but still you need to write SQL calls to fill your models. This is not so much a problem when you have single model to fill, but what if your project demands class associations (my blog post has many comments), or even polymorphic associations (my blog post has many comments. Comments can have nested comments)? There is simply no way a beginner can wrap his head around this easily.

ORM's exist as a layer between the code and the database, providing excellent abstraction for the beginner. In other words, it allows you to stay in the object-oriented world. As an example, let's look at how you would create a blog using [Datamapper](http://datamapper.org), a perfect ORM fit for your Sinatra application. First you define your models and then run the command "auto_migrate!" to create the tables in your database.

<script src="https://gist.github.com/2076588.js"> </script>

Then you can save data from Ruby to the database. Notice how my_post.comments.create automatically creates and saves a comment belonging to my_post:

<script src="https://gist.github.com/2076667.js"> </script>

And you can show the data on your website. Notice how all the comments automatically gets build in the comments array of the Post objects:

<script src="https://gist.github.com/2076677.js"> </script>

And that's basically it. Using ORM's the beginner don't have to worry about SQL calls, as DataMapper will take care of all the querying.
  
**IRB**

Ruby comes with an interactive console, which allows you to type code and get the results immediately. For the beginner this can be an excellent way of testing code without having to worry about creating Ruby files or classes. The interactive console is opened by typing "irb" into a terminal window:

<script src="https://gist.github.com/2076685.js"> </script>

**Sinatra**

Sinatra is a micro-framework perfectly suited for a beginner. You can write a Sinatra application in one single file or use view files to separate code and formatting. In Sinatra you write a function for every route in your website, also specifying the type of HTTP request. This is an excellent approach for newcomers, as it learns the beginner the basic concepts of HTTP requests and routes. The following is a simple Sinatra application specifying 3 routes available for GET requests. Notice the last route. It allows visitors to visit e.g. /greeting/rune, and Sinatra automatically parses the value of :yourname into an associative array and makes it available in the function.

<script src="https://gist.github.com/2076708.js"> </script>

Another great thing about Sinatra is how easy it is to separate the controller code from the view. This is standard practice for any web project, and with Sinatra it is as easy as creating a 'views' folder, create the views, and render them with one line of code. All class properties will be available in the rendered view, as shown in this simple greeting application:

<script src="https://gist.github.com/2076718.js"> </script>

With Sinatra it's ridiculously  easy to build your own API, using the GET, POST, PUT, DELETE functions. This example is taken directly from the [Sinatra Book](http://sinatra-book.gittr.com):

<script src="https://gist.github.com/2076734.js"> </script>

**Heroku**

No programming language is worth anything without easy deployment, and this is where PHP has been successful. With PHP you can upload your files to a server via FTP and the site is online immediately. However this approach quickly becomes a problem when working with bigger projects. Either you choose to edit your PHP-files on your local computer and upload them to the server manually via your FTP client, or you choose to edit the files directly on the server. I've seen students doing both things, and in the end it's a frustrating way of working. If you edit your files on your local computer, you have no idea what files you actually changed, and you often have to upload the entire project again. This is not a great approach if you're building your site using Drupal that ships with +8000 files. Editing the files directly on the server is not a better alternative, as your local copy gets out of sync, and the live site will crash if you make any coding mistakes.
  
(http://www.heroku.com">Heroku</a> is a rock-solid Ruby platform that provides free hosting for your Ruby site. Heroku ships with a heroku gem, which allows you to create a domain and deploy your files from your local computer. The following commands will install the Heroku gem and create your personal web space on [http://rune.heroku.com](http://rune.heroku.com):

<script src="https://gist.github.com/2076763.js"> </script>

Heroku integrates with the version control system Git, which means that you can upload your code using one simple command. This command will only upload your changes since last push, and you will never find yourself looking for updated files in your FTP client ever again.
  
<script src="https://gist.github.com/2076768.js"> </script>

Using Heroku does require the beginner to learn the basic concepts of Git. This can be challenging for a beginner who has never used the command line before. Fortunately there is a number of great GUI's like [Git Tower](http://www.git-tower.com/) that provides a clean interface for the beginner. However I'm a big supporter of learning basic command line usage to beginners. Git can basically be operated using very few commands:

<script src="https://gist.github.com/2076775.js"> </script>

**Conclusion**

I feel strongly about Sinatra as the perfect tool for teaching web development, especially in places where non-programmers need to learn to sketch out prototypes fast. On top of that, students who learn Sinatra can jump to Rails when building larger-scale applications. Almost everything about the Ruby/Sinatra combination seems like a perfect match for the web dev beginner: The Ruby syntax, excellent documentation, clear separation of code and views, great ORM's and an easy and understandable introduction to HTTP requests through the Sinatra API. On top of that comes easy deployment with Heroku.

Just like the professional web development firms have moved away from PHP, I think it's time for educational institutions to take the same approach. The reasons for using Ruby instead of PHP are simply too many.

Much of this is directly inspired by discussions with [Greg Borenstein](http://urbanhonking.com/ideasfordozens) around the use of Ruby and Sinatra at [ITP](http://www.itp.nyu.edu).
