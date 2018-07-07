const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const TextSchema = new Schema({
	name:{
		type: String,
		required: [true, "name field"]
	},


});

const Post = mongoose.model('ninja', TextSchema);
module.exports=Ninja;
