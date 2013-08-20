---
layout: blog
title:  "Datamapper, MySQL and Sinatra on OSX"
date:   2010-11-12 04:41:57
categories: blog
permalink: "blog/using-datamapper-with-mysql-and-sinatra-on-osx"
---

Trying to set up Sinatra with Datamapper today, I was running into a lot of problems. I got errors when trying to install the mysql gem and the dm-mysql-adapter gem. When I actually managed to do it, Datamapper gave me the following error:

    Can't connect to local MySQL server through socket '/opt/local/var/run/mysql5/mysqld.sock'  

I spent hours trying to fix it, but I finally suceeded. This is what worked for me:

1. [Uninstall Mysql](http://akrabat.com/computing/uninstalling-mysql-on-mac-os-x-leopard/) on your computer (you also may need to do [this](http://www.silverscripting.com/blog/2009/09/04/removing-mysql-on-snow-leopard/))
2. Uninstall the gems (sudo gem uninstall mysql, sudo gem uninstall dm-mysql-adapter)
3. Download the [latest mysql DMG](http://dev.mysql.com/downloads/mysql/) from the MySQL website
4. Install the gems (sudo gem install mysql, sudo gem install dm-mysql-adapter)
5. Restart your computer
6. [Now do this](http://coryodaniel.com/index.php/2010/01/20/installing-mysql-from-dmg-on-mac-and-the-few-commands-to-make-it-work-on-the-command-line/) to make the socket path work

That should hopefully make MySQL and Datamapper work. Connect like this in you app and you're good to go:

