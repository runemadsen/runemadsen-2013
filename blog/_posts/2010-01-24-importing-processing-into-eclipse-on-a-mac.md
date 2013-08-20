---
layout:     blog
title:      "Processing in Eclipse on a Mac"
date:       2010-01-24 17:01:55
categories: blog
---

Lately I've been doing a lot of Processing and it's pretty clear the the Processing IDE doesn't compare to powerful applications like Eclipse. There's an <a target="_blank" href="http://processing.org/learning/tutorials/eclipse/">excellent tutorial</a> on processing.org on how to import the core.jar Processing library into your Eclipse Java project. I tried the tutorial, but couldn't figure out how to import the core.jar - because when trying to import the filesystem, I couldn't expand the Processing applications folder. Because OSX treats applications like an encapsulated file, it's not possible to browse into the Processing folder and select the library. In Finder it's possible to right-click and select "Show Package Contents", but you cannot do this from inside the Eclipse dialog. This is how you solve the problem:

1. Select your Applications folder and press "OK"<br />
<img alt="eclipse1" src="http://runemadsen-2012.s3.amazonaws.com/blog/eclipse1.jpg" />

2. Manually add "/Processing" in the textfield.<br />
<img alt="eclipse2" src="http://runemadsen-2012.s3.amazonaws.com/blog/eclipse2.jpg" />

3. Click "Browse". Now you will see the package contents of the Processing applications folder<br />
<img alt="eclipse3" src="http://runemadsen-2012.s3.amazonaws.com/blog/eclipse3.jpg" />

4. Navigate to the core.jar file and import it.<br />
<img alt="eclipse4" src="http://runemadsen-2012.s3.amazonaws.com/blog/eclipse4.jpg" />