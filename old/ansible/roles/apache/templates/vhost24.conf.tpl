# Default Apache virtualhost template

<VirtualHost *:80>
    ServerAlias www.{{ item }}
    DocumentRoot {{ apache.docroot }}
    ServerAdmin cameron@{{ app.servername }}
    ServerName {{ item }}

    ErrorLog ${APACHE_LOG_DIR}/error.log

    # Possible values include: debug, info, notice, warn, error, crit,
    LogLevel warn
    SetEnvIf Remote_Addr "127\.0\.0\.1" loopback
    SetEnvIf Remote_Addr "::1" loopback
    CustomLog ${APACHE_LOG_DIR}/access.log combined env=!loopback

    <Directory {{ apache.docroot }}>
        AllowOverride All
        Options Indexes FollowSymLinks MultiViews
        Order allow,deny
        allow from all

        <IfModule mod_expires.c>
          ExpiresActive On
          ExpiresDefault "access plus 1 seconds"
          ExpiresByType text/html "access plus 1 seconds"
          ExpiresByType image/gif "access plus 120 minutes"
          ExpiresByType image/jpeg "access plus 120 minutes"
          ExpiresByType image/png "access plus 120 minutes"
          ExpiresByType text/css "access plus 60 minutes"
          ExpiresByType application/javascript "access plus 60 minutes"
          ExpiresByType text/javascript "access plus 60 minutes"
          ExpiresByType application/x-javascript "access plus 60 minutes"
          ExpiresByType text/xml "access plus 60 minutes"
        </IfModule>
    </Directory>

    <IfModule mod_deflate.c>
        SetOutputFilter DEFLATE
        # Compress only html, plain text, xml, css, javascript, application/javascript
        AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript

        # Netscape 4.X has some problems
        BrowserMatch ^Mozilla/4 gzip-only-text/html

        # Netscape 4.06-4.08 have some more problems
        BrowserMatch ^Mozilla/4.0[678] no-gzip

        # MSIE masquerades as Netscape, but it is fine
        BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
     </IfModule>

</VirtualHost>

{% if app.environment == "production" %}
# SSL Config
<VirtualHost *:443>
    ServerAlias www.{{ item }}
    ServerAdmin cameron@{{ app.servername }}
    DocumentRoot {{ apache.docroot }}
    ServerName {{ item }}

    <Directory {{ apache.docroot }}>
        AllowOverride All
        Options Indexes FollowSymLinks MultiViews
        Order allow,deny
        allow from all

        <IfModule mod_expires.c>
          ExpiresActive On
          ExpiresDefault "access plus 1 seconds"
          ExpiresByType text/html "access plus 1 seconds"
          ExpiresByType image/gif "access plus 120 minutes"
          ExpiresByType image/jpeg "access plus 120 minutes"
          ExpiresByType image/png "access plus 120 minutes"
          ExpiresByType text/css "access plus 60 minutes"
          ExpiresByType application/javascript "access plus 60 minutes"
          ExpiresByType text/javascript "access plus 60 minutes"
          ExpiresByType application/x-javascript "access plus 60 minutes"
          ExpiresByType text/xml "access plus 60 minutes"
        </IfModule>
    </Directory>

    <IfModule mod_deflate.c>
        SetOutputFilter DEFLATE
        # Compress only html, plain text, xml, css, javascript, application/javascript
        AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript

        # Netscape 4.X has some problems
        BrowserMatch ^Mozilla/4 gzip-only-text/html

        # Netscape 4.06-4.08 have some more problems
        BrowserMatch ^Mozilla/4.0[678] no-gzip

        # MSIE masquerades as Netscape, but it is fine
        BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
    </IfModule>

    SSLEngine on
    SSLCertificateFile /var/certs/{{ ssl.certificate.name }}
    SSLCertificateKeyFile /var/certs/{{ ssl.key.name }}
    SSLCertificateChainFile /var/certs/{{ ssl.intermediate.name }}
</VirtualHost>
{% endif %}

