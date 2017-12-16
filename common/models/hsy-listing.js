'use strict';

module.exports = function(Hsylisting) {

  Hsylisting.observe('before save', function (ctx, next) {
    if (ctx.data == null || ctx.data == undefined) return next();
    else if (ctx.data.location == null) { // set
      ctx.data.location_lat = null;
      ctx.data.location_lng = null;
    } else if (ctx.data.location != undefined) { // uet
      ctx.data.location_lat = ctx.data.location.lat;
      ctx.data.location_lng = ctx.data.location.lng;
    }
    return next();
  });
};
