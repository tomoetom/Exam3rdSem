/**
 * Created by Tomoe on 20-01-2015.
 */

var contacts = [{name:"Tomoe",phone:"71201456"},{name:"Tim",phone:"31615966"},{name:"Lars",phone:"11111111"},{name:"Peter",phone:"12345678"}];


function getAll(callback) {

    if (contacts == null) {
        var error = {};
        error.msg = "error in retrieving the data";
        error.status = 500;

        return callback(error);
    }
    callback(null, contacts);

}

function addPhone(newContact, callback) {


    contacts.push(newContact);
    callback(null, newContact);

}

function removeContact(contactName, callback) {

    for (var i = 0; i < contacts.length; i++) {

        if (contacts[i].name === contactName) {
            var deletingContact= contacts[i];
            contacts.splice(i, 1);
            callback(null, deletingContact);
            return;
        }

    }
    var error = {};
    error.msg = "there is no such name in contacts";
    error.status = 400;

    callback(error);


}

module.exports = {
    getAll: getAll,
    addPhone: addPhone,
    removeContact: removeContact

}