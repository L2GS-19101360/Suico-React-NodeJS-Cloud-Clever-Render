'use strict';

const Person = require('../models/persons.models');

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