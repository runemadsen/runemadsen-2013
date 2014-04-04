runemadsen.com
==============

The following is the jekyll setup running on runemadsen.com. 

TODO
----

- Fix 404 page
- Favicon
- Page title not showing up
- Metadata
- Add "Talks" menu item, with Printing Code, my class


Deployment
----------

Run this to deploy to S3:

```bach
s3cmd sync --guess-mime-type --cf-invalidate --acl-public _site/ s3://runemadsen.com
```