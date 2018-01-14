# Haoshiyou-Server, an API server for [haoshiyou.org](http://haoshiyou.org)

[![Build Status](https://travis-ci.org/xinbenlv/haoshiyou-server.svg?branch=master)](https://travis-ci.org/xinbenlv/haoshiyou-server)

`Haoshiyou-Server` is the server for haoshiyou.org. Please find more Developer Documentation
under `docs`

Powered by StrongLoop/ApiConnec


## Quick Start

1. Start the MySQL server on your MacBook

2. Start the Server using API Connect

### Open SLC GUI: 

```slc arc```

 then open a browser to go to `http://127.0.0.1:3000/`, 

### Open API Connect GUI
  - Though GUI, first run in `haoshiyou-server` folder, 
  
  ```bash
  apic edit
  ``` 
  
  then open a browser to go to `http://127.0.0.1:9000/`, 

### Query

 then query the server by

  ```bash
  curl --request GET \
    --url 'http://0.0.0.0:3000/api/HsyListings' \
    --header 'accept: application/json' \
    --header 'content-type: application/json' \
    --header 'x-ibm-client-id: default' \
    --header 'x-ibm-client-secret: SECRET' \
    --insecure
   ```
  
- Or visits local instance at http://0.0.0.0:3000/api/HsyListings/f8e40c34-e09a-4c2f-abb2-c5fe685338be
 
### Through UI

  - Through CLI, run `npm start` 
  
## Working with Ionic

  Generate Angular2 SDK

  ```bash
  ./node_modules/.bin/lb-sdk server/server \
  <client source code> \
  -d ng2web -i disabled -v enabled
  ```

  for example, for `haoshiyou-dev`

  ```bash
  ./node_modules/.bin/lb-sdk server/server \
  ../haoshiyou-dev/haoshiyou/src/loopbacksdk \
  -d ng2web -i disabled -v enabled
  ```
    ./node_modules/.bin/lb-sdk server/server \
    ../haoshiyou-ai/loopbacksdk \
    -d ng2web -i disabled -v enabled
  or for `haoshiyou-bot`

  ```bash
  ./node_modules/.bin/lb-sdk server/server \
  ../haoshiyou-bot/v1/loopbacksdk \
  -d ng2web -i disabled -v enabled
  ```
  
  or for `haoshiyou-ai`

  ```bash
  ./node_modules/.bin/lb-sdk server/server \
  ../haoshiyou-ai/loopbacksdk \
  -d ng2web -i disabled -v enabled
  ```  
  
## Release to Heroku
```bash
git push heroku master
```
## Migrate to a New DataBase
[![How to use a new MySQL in ApiConnect(formerly StrongLoop)](https://j.gifs.com/Wnv8DJ.gif)](https://www.youtube.com/watch?v=I8TvGrmZCGU)
