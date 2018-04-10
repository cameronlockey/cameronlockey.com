<IfModule mod_rewrite.c>
  RewriteEngine on

  # match any URL with www and rewrite it to https without the www
  RewriteCond %{HTTP_HOST} ^(www\.)(.*) [NC]
  RewriteRule (.*) https://%2%{REQUEST_URI} [L,R=301]

  # match urls that are non https (without the www)
  RewriteCond %{HTTPS} off
  RewriteCond %{HTTP_HOST} !^(www\.)(.*) [NC]
  RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  RewriteRule ^listing/(.*) /job/$1 [R=301,L]
  RewriteRule ^listings(.*) /jobs$1 [R=301,L]


  RewriteRule ^admin/users/login$ /login [R=301,L]
  RewriteCond %{QUERY_STRING} ^query=68075$
  RewriteRule listing/search /listings/category_id:11 [R=301,L]
  RewriteRule ^job_postings/(.*) /job/$1 [R=301,L]
  RewriteRule ^$ app/webroot/ [L]
  RewriteRule (.*) app/webroot/$1 [L]
</IfModule>

<IfModule mod_headers.c>
  # WEEK
  <FilesMatch "\.(jpg|jpeg|png|gif|swf)$">
      Header set Cache-Control "max-age=604800, public"
  </FilesMatch>
</IfModule>