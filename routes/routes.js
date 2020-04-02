const DriversControllers = require('../controllers/drivers_controllers');

module.exports = (app) => {
    app.get('/api', DriversControllers.greeting);
    app.post('/api/drivers', (req, res, next) => {
        setImmediate(() => {
            next(new Error('Ohh!! Something went wrong'));
        });
    })
    // app.post('/api/drivers', DriversControllers.create);
};