'use strict';

const Person = require('../models/persons.models');

exports.findByInput = function (req, res) {
    Person.findByInput(req.params.input, function (err, person) {
        if (err) {
            res.send(err);
        }
        res.json({
            status: 200,
            data: person
        });
    });
}

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: "Enter All Information"
        });
    } else {
        const id = req.params.id;
        const updatedPerson = req.body;

        Person.update(id, updatedPerson, function (err, result) {
            if (err) {
                res.status(500).send({
                    error: true,
                    message: "Internal Server Error"
                });
            } else {
                res.json({
                    error: false,
                    status: 200,
                    message: "Person Updated!"
                });
            }
        });
    }
};

exports.delete = function (req, res) {
    Person.delete(req.params.id, function (err, person) {
        if (err) {
            res.send(err);
        }
        res.json({
            error: false,
            status: 200,
            message: "Person Deleted!"
        });
    });
}

exports.create = function (req, res) {
    const new_person = new Person(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: "Enter All Information"
        });
    } else {
        Person.create(new_person, function (err, person) {
            if (err) {
                res.send(err);
            }
            res.json({
                error: false,
                status: 200,
                message: "Person Created!",
                data: person
            });
        });
    }
};

exports.findAll = function (req, res) {
    Person.findAll(function (err, person) {
        if (err) {
            res.send(err);
        }
        console.log('res', person);
        res.send({
            status: 200,
            data: person
        });
    });
};