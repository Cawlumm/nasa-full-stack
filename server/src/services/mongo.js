const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
    console.log('MongoDB connetion ready');
});

mongoose.connection.on('error', (error) => {
    console.error(error);
})

async function mongoConnect() {
    await mongoose.connect(MONGO_URL, {    
        useNewUrlParser: true,
        useUnifiedTopology: true,});
}

async function mongoDisconnect() {
    await mongoose.disconnect()
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}