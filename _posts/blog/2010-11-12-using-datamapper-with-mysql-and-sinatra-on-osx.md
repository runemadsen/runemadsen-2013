---
layout: blog
title:  "Using Datamapper MySQL w. Sinatra on OSX"
date:   2010-11-12 04:41:57
categories: blog
---

Trying to set up Sinatra with Datamapper today, I was running into a lot of problems. I got errors when trying to install the mysql gem and the dm-mysql-adapter gem. When I actually managed to do it, Datamapper gave me the following error:

    Can't connect to local MySQL server through socket '/opt/local/var/run/mysql5/mysqld.sock'

I spent hours trying to fix it, but I finally suceeded. This is what worked for me: <a href="http://akrabat.com/computing/uninstalling-mysql-on-mac-os-x-leopard/"></a>


1. <a href="http://akrabat.com/computing/uninstalling-mysql-on-mac-os-x-leopard/">Uninstall Mysql</a> on your computer (you also may need to do <a target="_blank" href="http://www.silverscripting.com/blog/2009/09/04/removing-mysql-on-snow-leopard/">this</a>)
1. Uninstall the gems (sudo gem uninstall mysql, sudo gem uninstall dm-mysql-adapter)
1. Download the <a href="http://dev.mysql.com/downloads/mysql/">latest mysql DMG</a> from the MySQL website
1. Install the gems (sudo gem install mysql, sudo gem install dm-mysql-adapter)
1. Restart your computer
1. <a href="http://coryodaniel.com/index.php/2010/01/20/installing-mysql-from-dmg-on-mac-and-the-few-commands-to-make-it-work-on-the-command-line/">Now do this</a> to make the socket path work

That should hopefully make MySQL and Datamapper work. Connect like this in you app and you're good to go:

<script src="https://gist.github.com/2077151.js"> </script>