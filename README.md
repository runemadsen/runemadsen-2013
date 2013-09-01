runemadsen.com
==============

The following is the jekyll setup running on runemadsen.com. 


Deployment
----------

Run this to deploy to S3:

```bach
s3cmd sync --delete --acl-public _site/ s3://runemadsen.com
```

TODO
----

- Find deploy technique
- Setup S3 DNS
- Setup Cloudfront