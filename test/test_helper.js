const mongoose = require('mongoose');

before(done => {
    mongoose.connect('mongodb://localhost/uber_driver');
    mongoose.connection
        .once('open', () => done())
        .on('error', err => {
            console.warn('Warrning', error);
        })
})

beforeEach(done => {
    const { drivers } = mongoose.connection.collections;
    drivers.drop()
        .then(() => done())
        .catch(() => done());
});