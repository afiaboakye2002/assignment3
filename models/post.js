const mongoose = require('mongoose')

const postSchema = new monggose.Schema({
    id:{},
    name:{},
    author:{},
    content:{},
    date:{},
    upvotes:{},
    downvotes:{},

})

module.exports = postSchema