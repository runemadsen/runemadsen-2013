echo "\n\n-> Uploading to S3"

# Sync html files with 0 seconds cache control
echo "\n--> Syncing .html"
s3cmd sync --acl-public --guess-mime-type --exclude '*.*' --include  '*.html' --add-header="Cache-Control: max-age=0, must-revalidate"  _site/ s3://runemadsen.com

# Sync everything else with a year in cache control
echo "\n--> Syncing everything else"
s3cmd sync --acl-public --guess-mime-type --exclude '*.html' --add-header="Cache-Control: max-age=31536000"  _site/ s3://runemadsen.com

echo "\n--> Done!"