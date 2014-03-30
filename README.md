runemadsen.com
==============

The following is the jekyll setup running on runemadsen.com. 

TODO
----

- Go through work pages and fix problems
- Add "Talks" menu item, with Printing Code, my class


Deployment
----------

Run this to deploy to S3:

```bach
s3cmd sync --delete-removed --guess-mime-type --cf-invalidate --acl-public _site/ s3://runemadsen.com
```

TODO
----

- Responsive grid system
- Better menu
- Make invalidation work