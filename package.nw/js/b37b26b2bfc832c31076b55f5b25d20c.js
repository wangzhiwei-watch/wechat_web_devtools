"use strict";!function(require,directRequire){const a=require('./5dd0a744ff6ee4b9cb0cd591eb6bad09.js');module.exports={private_geolocation:async function(b,c){let d=await a();return JSON.stringify({errMsg:`${c.api}:ok`,result:{location:{lat:d.latitude,lng:d.longitude}}})}}}(require("lazyload"),require);