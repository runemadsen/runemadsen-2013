echo "\n\n-> Uploading to S3"

# Sync everything else with a year in cache control
echo "\n--> Syncing cached assets"
s3cmd sync --acl-public --guess-mime-type --exclude '*.html' --add-header="Cache-Control: max-age=31536000"  _site/ s3://runemadsen.com

# Sync html files last to not provoke CDN to cache 404's on images. Also set 0 seconds cache control
echo "\n--> Syncing .html"
s3cmd sync --acl-public --guess-mime-type --exclude '*.*' --include  '*.html' --add-header="Cache-Control: max-age=0, must-revalidate"  _site/ s3://runemadsen.com

echo "\n--> Done!"