const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	name:{
		type: String
	}
});

const Post = mongoose.model('post', PostSchema);
module.exports = Post;
