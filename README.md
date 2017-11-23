


## GS-ONE - draft


## setup 

```
- Install nodejs 8x

- Install express:
npm install express --save
```





## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:mariobaldini/gs-one.git
$ cd gs-one
$ npm install
$ npm start
or:
DEBUG=gs-node-api:* npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
heroku create # OR  heroku git:remote -a gs-one
git push heroku master
heroku open
heroku logs --tail
```



# production deploy
```
- install node 8.x/npm
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential


- add node ssh-key to deployment keys of git repo

- copy/zip/clone your app directory to the production system, excluding the node_modules.

- On your production system, run npm install to install your dependencies, 
cd /code/gs-one/ && npm install
cd /code/gs-one/modules/node-gnuradio && npm install


- npm test if you have tests 

- run: NODE_ENV=production node server.js
cd /code/gs-one/ && NODE_ENV=production npm start
cd /code/gs-one/modules/node-gnuradio && NODE_ENV=production npm start

ou run com flag de debug:
cd /code/gs-one/ && DEBUG=gs-node-api:* npm start
cd /code/gs-one/modules/node-gnuradio && DEBUG=gs-node-api:* npm start

```


- install complement for afsk decoder
```
sudo apt install python3 python3-pip
pip3 install --upgrade pip
pip3 install bitarray
sudo apt-get install python3-dev
sudo pip3 install scipy
```


- configurar NGINX:
gnuradio.groundstation.one:80 --> localhost:3000

```
sudo apt-get install nginx
sudo rm /etc/nginx/sites-enabled/default
sudo nano /etc/nginx/sites-available/gnuradio

server {
    listen 80;
    server_name gnuradio.csu.center;

    location / {
        proxy_set_header   X-Forwarded-For $remote_addr;
        proxy_set_header   Host $http_host;
        proxy_pass         "http://127.0.0.1:3000";
    }
    client_max_body_size 1000M;
}


sudo ln -s /etc/nginx/sites-available/gnuradio /etc/nginx/sites-enabled/gnuradio


sudo service nginx restart
```

- test
gnuradio.csu.center/afsk2hex





# GS-NODE-GNURADIO SETUP

- follow docs/gnuradio setup guide e instalar em /code/pybombs/default;

- Install:
```
# pip3 install bitarray
# sudo apt-get install python3-dev
# sudo pip3 install scipy
```

run with: python3 bin2hex.py



