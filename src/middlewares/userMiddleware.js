const validateBody = (request, response, next) => 
{
    const {body} = request;

    if(body.username === undefined || body.username === '') {
        return response.status(400).json({ message: 'The field username is required!'});
    }
    else if(body.password === undefined || body.password === '') {
        return response.status(400).json({ message: 'The field password is required!'});
    }

    next();
};

module.exports = {
     validateBody
};