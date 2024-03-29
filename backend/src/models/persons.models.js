'use strict';
const dbConn = require('../../config/db.config');

const Person = function (person) {
    this.firstname = person.firstname;
    this.lastname = person.lastname;
    this.registered = new Date();
    this.updated = null;
}

Person.update = function (id, person, result) {
    dbConn.query("UPDATE persons SET firstname = ?, lastname = ?, updated = ? WHERE id = ?", [person.firstname, person.lastname, new Date(), person.id], function (err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

Person.delete = function (id, result) {
    dbConn.query("DELETE FROM persons WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

Person.create = function (newPerson, result) {
    dbConn.query("INSERT INTO persons set ?", newPerson, function (err, res) {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
}

Person.findAll = function (result) {
    dbConn.query("SELECT * FROM persons", function (err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("Persons: ", res);
            result(null, res);
        }
    });
}

module.exports = Person;