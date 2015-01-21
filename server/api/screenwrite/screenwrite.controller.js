'use strict';

var _ = require('lodash');
var Screenwrite = require('./screenwrite.model');

// Get list of screenwrites
exports.index = function(req, res) {
  Screenwrite.find(function (err, screenwrites) {
    if(err) { return handleError(res, err); }
    return res.json(200, screenwrites);
  });
};

// Get a single screenwrite
exports.show = function(req, res) {
  Screenwrite.findById(req.params.id, function (err, screenwrite) {
    if(err) { return handleError(res, err); }
    if(!screenwrite) { return res.send(404); }
    return res.json(screenwrite);
  });
};

// Creates a new screenwrite in the DB.
exports.create = function(req, res) {
  Screenwrite.create(req.body, function(err, screenwrite) {
    if(err) { return handleError(res, err); }
    return res.json(201, screenwrite);
  });
};

// Updates an existing screenwrite in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Screenwrite.findById(req.params.id, function (err, screenwrite) {
    if (err) { return handleError(res, err); }
    if(!screenwrite) { return res.send(404); }
    var updated = _.merge(screenwrite, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, screenwrite);
    });
  });
};

// Deletes a screenwrite from the DB.
exports.destroy = function(req, res) {
  Screenwrite.findById(req.params.id, function (err, screenwrite) {
    if(err) { return handleError(res, err); }
    if(!screenwrite) { return res.send(404); }
    screenwrite.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}