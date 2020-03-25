const chatServer = require('./lib/server.js')
const dotenv = require('dotenv');

dotenv.config();

chatServer.start(process.env.PORT)