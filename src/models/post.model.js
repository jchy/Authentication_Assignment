const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const postSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    body: {type: String, required: true, unique: true},
    user : {
       type : mongoose.Schema.Types.ObjectId,
       ref : 'User',
       required : true
    }},
    {
        timestamps: { created_at: () => Date.now()
    }
   
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;