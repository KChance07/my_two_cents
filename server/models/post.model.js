var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: String, //this type will change
    required: true
  },
  postDate: {
    type: Date,
    required: true
  },
  summary: {
    type: String,
    required: true
  }
});


var Post = mongoose.model('Post', postSchema);
module.exports = Post;
