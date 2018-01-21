## Sample Queries 

### Get

```bash
  curl --request GET \
    --url 'http://0.0.0.0:3000/api/HsyListings' \
    --header 'accept: application/json' \
    --header 'content-type: application/json' \
    --header 'x-ibm-client-id: default' \
    --header 'x-ibm-client-secret: SECRET' \
    --insecure
```

### Update a given HsyListing

```
export HSY_SERVER_HOST=http://0.0.0.0:3000
curl --request PUT \
 --url 'http://0.0.0.0:3000/api/HsyListings' \
    --header 'accept: application/json' \
    --header 'content-type: application/json' \
    --header 'x-ibm-client-id: default' \
    --header 'x-ibm-client-secret: SECRET' \
    --insecure \
    --data '{"amenities":null,"content":"AD543N","hsyGroupEnum":"SouthBayWest","hsyGroupNick":"JFAKNF","rentalEndDate":"2018-01-15T00:00:00.000Z","rentalStartDate":"2018-01-15T00:00:00.000Z","title":"ANAkfafF","uid":"7a880a2b-82be-4a09-b803-f5fca6b78b65","wechatId":null,"latestUpdatedOrBump":"2018-01-15T01:17:58.000Z","numBathRoom":2,"numBedRoom":2,"isRentingEntireHouse":true,"lastUpdated":"2018-01-15T01:17:58.000Z","imageIds":[],"location":{"lat":57.41666,"lng":-122.09106},"listingTypeEnum":"NeedRoommate","otherCosts":null,"ownerId":"facebook|10153622995632596","price":1850,"requireToContact":null,"singleRoomBathRoomType":null,"state":null,"type":null,"addressLine":"1600 Amphitheatre Pkwy","addressZipcode":null,"addressState":null,"addressCity":"Mountain View","addressCityAndState":null,"amenityArray":["可养宠物"]}'

```

### Update `location_lat` and `location_lng` with `location` field

```sql
SELECT uid, X(location) FROM HsyListing;UPDATE HsyListing
SET location_lat = X(location),
    location_lng = Y(location)
```
