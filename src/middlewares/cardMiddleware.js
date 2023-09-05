const validateBody = (request, response, next) => 
{
    const {body} = request;

    if(body.number === undefined || body.number === '') {
        return response.status(400).json({ message: 'The field number card is required!'});
    }
    else if(body.userId === undefined || body.userId === '') {
        return response.status(400).json({ message: 'Fail!'});
    }
  
    next();
};

module.exports = {
     validateBody
};