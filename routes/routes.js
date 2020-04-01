const DriversControllers = require('../controllers/drivers_controllers');

module.exports = (app) => {
    app.get('/api', DriversControllers.greeting);
};