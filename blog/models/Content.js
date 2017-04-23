/**
 * Created by Admin on 2017/4/18.
 */

var mongoose = require('mongoose');
var contentsSchema = require('../schemas/content');

module.exports = mongoose.model('Content',contentsSchema);