runemadsen.com
==============

The following is the jekyll setup running on runemadsen.com. 


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