# Default Apache virtualhost template

<VirtualHost *:80>
    SetEnv SERVER_NAME '{{ item }}'

    ServerAdmin webmaster@localhost
    DocumentRoot {{ apache.docroot }}
    ServerName {{ item }}

    <Directory {{ apache.docroot }}>
        AllowOverride All
        Options -Indexes +FollowSymLinks
        Require all granted
    </Directory>
</VirtualHost>