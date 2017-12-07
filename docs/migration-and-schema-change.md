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

3. Open `slc arc` and click on model to migrate
then click on "Migrate model"

## Add Relations

```bash
apic loopback:export-api-def -o definitions/haoshiyou-server-generated.yml
./node_modules/.bin/yml-sorter -i definitions/haoshiyou-server-generated.yml -o definitions/haoshiyou-server-generated-sorted.yml
ksdiff definitions/haoshiyou-server.yaml definitions/haoshiyou-server-generated-sorted.yml
```
