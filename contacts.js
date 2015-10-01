/**
 * Two constructors, Contact() which contains two function to check if someone was called and several variables. ContactList() which   contains a number of functions to modify the contact list.
 * Created by Micah on 10/1/2015.
 */

/* globals _ */
/* exported addContact, numContacts, findContact, deleteContact, listContact */
/* exported firstName, lastName, address, zipcode, telephoneNumber */
/* exported Contact, ContactList */

/**
 * Constructor that contains two functions for calling and variables for the contact.
 * @param firstName the first name of the contact
 * @param lastName the last name of the contact
 * @param address the address of the contact
 * @param zipcode the zipcode of the contact
 * @param telephoneNumber the telephone number of the contact
 * @constructor has variables to initialize the information for a contact and functions to check if the contact was called.
 */
function Contact(firstName, lastName, address, zipcode, telephoneNumber){
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.zipcode = zipcode;
  this.telephoneNumber = telephoneNumber;
  var calls = 0;

  /**
   * Function that indicates you are calling a contact and keeps track of how many time the contact is called.
   * @returns {boolean} returns true showing that the contact was called successfully.
   */
  this.call = function(){
    calls +=1;
    return true;
  };

  /**
   * Functions that returns the number of times a contact was called.
   * @returns {number} returns the number of times a contact was called.
   */
  this.numCalls = function(){
    return calls;
  };
}

/**
 * Constructor that contains five functions that edit the contact list.
 * @constructor
 */
function ContactList(){
  var contacts = [];

  /**
   * Function that accepts a Contact instance and adds it to an internal data structure.
   * @param Contact
   */
  this.addContact = function(Contact){
    contacts.push(Contact);
  };

  /**
   * Function that returns the number of contacts in the ContactList().
   * @returns {Number}
   */
  this.numContacts = function(){
    return contacts.length;
  };

  /**
   * Function that is passed a string and returns all of the Contacts with that lastName.
   * @param Last
   * @returns {Array}
   */
  this.findContact = function(Last){
    var sameLast = [];
    for(var i = 0; i < contacts.length; i++){
      if(contacts[i].lastName === Last){
        sameLast.push(contacts[i]);
      }
    }
    return sameLast;
  };

  /**
   * Function that is passed a firstName and lastName and deletes all matching Contacts.
   * @param first
   * @param last
   */
  this.deleteContact = function(first, last){
    for(var j = 0; j < contacts.length;j++){
      if(contacts[j].lastName === last && contacts[j].firstName === first){
        contacts.splice(j-1, j+1);
      }
    }
  };

  /**
   * Function that returns a string containing the contacts sorted by lastName.
   */
  this.listContacts= function(){
    return _.sortBy(ContactList, "lastName");
  }
  ;
}


