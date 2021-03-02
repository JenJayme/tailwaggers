var submitBtn = $('#submitBtn');
var reqForm = $('#requestForm');

function getInputs() {
  'use strict';
  var input, firstName, lastName, petName, petType, phone, email, date, time;

    // alert('Submit button clicked');
    firstName = $('#firstName').val();
    lastName = $('#lastName').val();
    phone = $('#phone').val();
    email = $('#email').val();
    petName = $('#petName').val();
    petType = $('#petType').val();
    date = $('#date').val();
    time = $('#time').val();
    input = {
      'firstName': firstName,
      'lastName': lastName,
      'phone': phone,
      'email': email,
      'petName': petName,
      'petType': petType,
      'date': date,
      'time': time
    }
    console.log("Input:", input)
    return input;
}

$(document).ready(function(){

    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.parallax').parallax();
    $('select').formSelect();
    $('.datepicker').datepicker();
    $('.timepicker').timepicker();

    AOS.init();
    
    // submitBtn.on('click', function (event) {
    //   event.preventDefault();
    //   var input = getInputs();
    //   // generate a five digit number for the contact_number variable
    //   // this.contact_number.value = Math.random() * 100000 | 0;
    //   // these IDs from the previous steps
    //   emailjs.sendForm('contact_service', 'contact_form', this);
    // })    

    reqForm.on('submit', function (event) {
      event.preventDefault();
      var input = getInputs();
      emailjs.sendForm('contact_service', 'contact_form', this);
    })

  }); // end of document ready
