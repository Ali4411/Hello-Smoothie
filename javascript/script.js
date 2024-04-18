//Form validation Created by Ross

//assigning html form id to vars
var form = document.getElementById('form');
var fname = document.getElementById('inputName1');
var lname = document.getElementById('inputName2');
var address = document.getElementById('inputAddress1');
var email = document.getElementById('inputEmail1');
var phone = document.getElementById('inputPhone1');
var checkbox1 = document.getElementById('gridCheck1');
var checkbox2 = document.getElementById('gridCheck2');

//check if email exists in parameters and populate the field
const urlParams = new URLSearchParams(window.location.search);
const emailParam = urlParams.get('email');

if(emailParam != null)
{
    email.value = emailParam;
}

/*submit button listener
when the form is submitted, the default form submission behavior is prevented.
The form inputs are validated using the validateInputs() function*/
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

// defining error function
var setError = (element, message) => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
}
// defining success function
var setSuccess = element => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
}

// defining valid email function
var isValidEmail = email => {
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
}

// defining valid phone function
var isValidPhone = phone => {
    var re = /^\d{10}$/;
    return re.test(phone);
}

// defining valid checkbox function
var isValidCheckbox = (checkbox1, checkbox2) => {
    return checkbox1.checked || checkbox2.checked;
}

// validating text inputs and removing whitespace
var validateInputs = () => {
    var nameValue = inputName1.value.trim();
    var nameValue2 = inputName2.value.trim();
    var addressValue = inputAddress1.value.trim();
    var emailValue = inputEmail1.value.trim();
    var phoneValue = inputPhone1.value.trim();


//checking if inputs are valid
    if(nameValue === ''){
        setError(fname, 'Name is required');
    } else{
        setSuccess(fname);
    }

    if(nameValue2 === ''){
        setError(lname, 'Name is required');
    } else{
        setSuccess(lname);
    }

    if(addressValue === ''){
        setError(address, 'Address is required');
    } else{
        setSuccess(address);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(phoneValue === ''){
        setError(phone, 'Phone number is required');
    } else if (!isValidPhone(phoneValue)){
        setError(phone, 'Provide a valid phone number')
    } else {
        setSuccess(phone);
    }

    if(isValidCheckbox(checkbox1, checkbox2)){
        setSuccess(checkbox1);
        setSuccess(checkbox2);
    } else {
        setError(checkbox2, 'Please tick one option');
    }
};