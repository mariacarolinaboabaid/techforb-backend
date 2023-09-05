const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3333;
// Run the server
app.listen(PORT, () => console.log(`Serever running on port ${PORT}!`));