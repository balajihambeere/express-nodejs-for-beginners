var customer = require('../controllers/customerController');

const routes = (app) => {
    
    app.route('/customers').get(customer.getCustomers);

    app.route('/customer').post(customer.createCustomer);
    
    app.route('/customer/:customerId').get(customer.getCustomerById);
    
    app.route('/customer/:customerId').put(customer.updateCustomer);
    
    app.route('/customer/:customerId').delete(customer.deleteCustomer);
}
module.exports = routes;