const validateBody = (request, response, next) => 
{
    const {body} = request;

    if(body.value === undefined || body.value === '') {
        return response.status(400).json({ message: 'The field value is required!'});
    }
    else if(body.date === undefined || body.date === '') {
        return response.status(400).json({ message: 'The field date is required!'});
    }
    else if(body.type === undefined || body.type === '') {
        return response.status(400).json({ message: 'The field type is required!'});
    }

    next();
};

module.exports = {
     validateBody
};