
const edge = require('edge-js');
const path = require('path');

module.exports = edge.func(path.join(__dirname, 'winpos.cs'));