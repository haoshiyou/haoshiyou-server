# Haoshiyou-Server, an API server for [haoshiyou.org](http://haoshiyou.org)

Powered by StrongLoop/ApiConnect

## Quick Start

1. Start the MySQL server on your MacBook

2. Start the Server using API Connect

### Through API Connect GUI
  - Though GUI, first run in `haoshiyou-server` folder, 
  
  ```bash
  apic edit
  ```
 
  - then open a browser to go to `http://127.0.0.1:9000/`, 
  click the "<b>Run</b>" button on the bottom, and
  then query the server by

  ```bash
  curl --request GET \
    --url 'https://localhost:4002/api/HsyListings' \
    --header 'accept: application/json' \
    --header 'content-type: application/json' \
    --header 'x-ibm-client-id: default' \
    --header 'x-ibm-client-secret: SECRET' \
    --insecure
  ```
#### Through UI

  - Through CLI, run `npm start` 
  
  - then query the server by

    ```bash
    curl --request GET \
      --url 'http://localhost:3000/api/HsyListings' \
      --header 'accept: application/json' \
      --header 'content-type: application/json' \
      --header 'x-ibm-client-id: default' \
      --header 'x-ibm-client-secret: SECRET' \
      --insecure
    ```

  - Or visits local instance at http://0.0.0.0:3000/api/HsyListings/f8e40c34-e09a-4c2f-abb2-c5fe685338be
## Working with Ionic

  Generate Angular2 SDK

  ```bash
  ./node_modules/.bin/lb-sdk server/server \
  <client source code> \
  -d ng2web -i disabled -v enabled
  ```

  for example

  ```bash
  ./node_modules/.bin/lb-sdk server/server \
  ../haoshiyou-dev/haoshiyou/src/loopbacksdk \
  -d ng2web -i disabled -v enabled
  ```
  
  or for `haoshiyou-bot`

  ```bash
  ./node_modules/.bin/lb-sdk server/server \
  ../haoshiyou-bot/loopbacksdk \
  -d ng2web -i disabled -v enabled
  ```

## Migrate to a New DataBase
[![How to use a new MySQL in ApiConnect(formerly StrongLoop)](https://j.gifs.com/Wnv8DJ.gif)](https://www.youtube.com/watch?v=I8TvGrmZCGU)
