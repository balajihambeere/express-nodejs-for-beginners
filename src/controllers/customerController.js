var mongoose = require('mongoose');
var CustomerSchema = require('../models/customerModel');

const Customer = mongoose.model('Customer', CustomerSchema);

const createCustomer = (request, response) => {
    let customer = new Customer(request.body);
    customer.save((error, customer) => {
        if (error) {
            return response.send(error);
        }
        return response.json(customer);
    });
};

const getCustomers = (request, response) => {
    Customer.find({}, (error, customer) => {
        if (error) {
            return response.send(error);
        }
        return response.json(customer);
    });
};

const getCustomerById = (request, response) => {
    Customer.findById({ _id: request.params.customerId }, (error, customer) => {
        if (error) {
            return response.send(error);
        }
        return response.json(customer)
    });
};

const updateCustomer = (request, response) => {
    Customer.findOneAndUpdate({ _id: request.params.customerId }, request.body, { new: true },
        (error, customer) => {
            if (error) {
                return response.send(error);
            }
            return response.json(customer);
        });
};

const deleteCustomer = (request, response) => {
    Customer.remove({ _id: request.params.customerId }, (error, customer) => {
        if (error) {
            return response.send(error);
        }
        return response.json(customer);
    });
};

module.exports = {
    getCustomers,
    createCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer
};
