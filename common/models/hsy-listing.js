'use strict';

module.exports = function(Hsylisting) {
  Hsylisting.observe('before save', function (ctx, next) {
    if (!ctx.data || ctx.data.location === undefined) return next();
    else if (ctx.data.location == null) { // unset
      ctx.data.location_lat = null;
      ctx.data.location_lng = null;
    } else if (ctx.data.location) { // set
      ctx.data.location_lat = ctx.data.location.lat;
      ctx.data.location_lng = ctx.data.location.lng;
    }
    return next();
  });
};
