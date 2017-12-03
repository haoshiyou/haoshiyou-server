# Database Migration and Schema Change

This document describe how to conduct Database Migration and Schema Change

## Database Migration
On a high level, perform the following steps.

1. Backup Database.

Our current database vendor ClearDB has its own perodic backup

2. Set NODE_ENV 

You can do 

```
# This will migrate database #heroku:haoshiyou-dev ClearDB
export NODE_ENV='legacy' 

# This will migrate database #heroku:haoshiyou-server-dev ClearDB
export NODE_ENV='dev' 
```

2. Open `slc arc` and click on model to migrate
then click on "Migrate model"

