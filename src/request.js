server {
    listen 80;
    server_name 68.183.84.4 3choices.in;

    location = /favicon.ico { access_log off; log_not_found off; }
    location / static / {
        alias / home / django / teenchoice / static /;
}

location / media / {
    alias / home / django / teenchoice / build / media /;
    }

location / {
    include proxy_params;
    proxy_pass http://unix:/run/gunicorn.sock;
    }
}


2f$fkiR_gLHh2zd







