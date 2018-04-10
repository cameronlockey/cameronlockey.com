# Default Apache virtualhost template

<VirtualHost *:80>
    ServerName {{ item }}
    ServerAlias www.{{ item }}
    DocumentRoot {{ apache.docroot }}
    ServerAdmin cameron@{{ app.servername }}

    <Directory {{ apache.docroot }}>
        AllowOverride All
        Options Indexes FollowSymLinks MultiViews
        Order allow,deny
        allow from all
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

# SSL Config
<VirtualHost *:443>
    SetEnv SERVER_NAME {{ item }}

    ServerAdmin cameron@{{ app.servername }}
    DocumentRoot {{ apache.docroot }}
    ServerName {{ item }}

    <Directory {{ apache.docroot }}>
        AllowOverride All
        Options -Indexes +FollowSymLinks
        Require all granted
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
    SSLCertificateFile /var/certs/risehire.crt
    SSLCertificateKeyFile /var/certs/risehire.key
    SSLCertificateChainFile /var/certs/IntermediateCA.crt
</VirtualHost>

