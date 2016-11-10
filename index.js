/**
 * Parses the sub query into an obj.
 * @param  {Object} obj      The object to return.
 * @param  {String} subQuery Query string in the format key=value.
 * @return {Object}          The object with the set key value pair.
 */
function subParse(obj, subQuery) {
  obj = obj || {};

  subQuery = subQuery.split("=");
  var key = decodeURIComponent(subQuery[0]);
  var val = decodeURIComponent(subQuery[1] || "");
  
  /* If key already exists then its an array */
  var currentValue = obj[key];

  if (typeof currentValue !== "undefined") {
    
    obj[key] = [].concat(currentValue, val);

  } else {
    obj[key] = val;
  }


  return obj;
}

/**
 * Cleans the query removing starting '?' or '#' so that location.search and location.hash can be passed in.
 * @param  {String} query The queryString to clean.
 * @return {String}       The cleaned queryString.
 */
function cleanQuery(query) {
  query = query || "";

  return query.replace(/^[?#]/g, "");
}

/**
 * Parses the pased in querystring returning an object with the values set.
 * @param  {String} query The query string in the format: key1=val1&key2=val2
 * @return {Object}       The object with the keys and values set.
 */
module.exports = exports = function(query) {
  var json = {};

  if (typeof query !== "string") return json;

  query = cleanQuery(query);

  json = query.split("&").reduce(subParse, {});

  return json;
};
