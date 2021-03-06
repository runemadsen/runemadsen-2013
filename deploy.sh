echo "\n\n-> Building production site"
JEKYLL_ENV=production bundle exec jekyll build

echo "\n\n-> Uploading to S3"

# Sync everything that is not HTML to cache for a year
echo "\n--> Syncing cached assets"
s3cmd sync --acl-public --guess-mime-type --exclude '*.html' --add-header="Cache-Control: max-age=31536000"  _site/ s3://runemadsen.com

# Sync html files last to not provoke CDN to cache 404's on images. Also set 300 seconds cache control
echo "\n--> Syncing .html"
s3cmd sync --acl-public --mime-type="text/html; charset=utf-8" --exclude '*.*' --include  '*.html' --add-header="Cache-Control: max-age=300, must-revalidate"  _site/ s3://runemadsen.com

echo "\n--> Done!"
