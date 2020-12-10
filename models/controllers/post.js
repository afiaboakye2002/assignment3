const postRouter = require ('express').Router()
const Post = require('../models/Post')


postRouter.get('/',(request,response,next) => {
    Post.find({}).then(res =>{
        response.status(200).send(res)
        next();
    })
})

postRouter.post('/',async (request, response,next) =>{
    const {title,content} = request.body;

    if (title && content){
        const noteCount = await Note.countDocuments();

        const newNote = new Note ({
            id:noteCount + 1,
            title: title,
            content:content
        })

        newNote.save()
        .then (res => {
            response.status(201).send(res);
        })
        .catch(err => {
            console.log(err)
            response.sendStatus(501);
        })
    }
    else {
        response.status(400).send({ message:"Check your request body"})
    }
});

module.exports = postRouter