const validateBody = (request, response, next) => 
{
    const {body} = request;

    if(body.number === undefined || body.number === '') {
        return response.status(400).json({ message: 'The field number card is required!'});
    }
    else if(body.expirationDate === undefined || body.expirationDate === '') {
        return response.status(400).json({ message: 'The field date is required!'});
    }
  
    next();
};

module.exports = {
     validateBody
};