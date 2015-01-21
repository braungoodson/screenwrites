/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Screenwrite = require('./screenwrite.model');

exports.register = function(socket) {
  Screenwrite.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Screenwrite.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('screenwrite:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('screenwrite:remove', doc);
}