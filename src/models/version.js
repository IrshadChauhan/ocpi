const mongoose = require('mongoose');

const endpointSchema = new mongoose.Schema({
  identifier: {
    type: String,
    enum: ['cdrs', 'commands', 'credentials', 'locations', 'sessions', 'tariffs', 'tokens']
  },
  role: {
    type: String,
  },
  url: {
    type: String,
    match: /^https?:\/\/.+$/i
  }
}, { _id: false });

const versionSchema = new mongoose.Schema({
  version: {
    type: Number,
  },
  url: {
    type: String,
    match: /^https?:\/\/.+$/i
  }
}, { _id: false });

const VersionSchema = new mongoose.Schema({
  version: {
    type: versionSchema,
    required: true
  },
  endpoints: {
    type: [endpointSchema],
    required: true,
    validate: [arr => arr.length > 0, 'Array should contain at least one item.']
  }
});

const Version = mongoose.model('Version', VersionSchema);

module.exports = Version