const mongoose = require('mongoose');

before(done => {
    mongoose.connect('mongodb://localhost/uber_driver_test');
    mongoose.connection
        .once('open', () => done())
        .on('error', err => {
            console.warn('Warrning', error);
        })
})

beforeEach(done => {
    const { drivers } = mongoose.connection.collections;
    drivers.drop()
        .then(() => drivers.ensureIndex({ 'geometry.coordinates': '2dshpere' }))
        .then(() => done())
        .catch(() => done());
});