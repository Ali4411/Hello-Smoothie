//Completed by Le Wen

//click event to send user to subscribe page
var subscribePage = "subscribe.html";

$("#subscribe-btn").click(
    function() {
        var email = $("#subscribeEmail").val();

        if(isValidEmail(email)) {
            window.location.href = subscribePage +"?email=" + email;
        }
        else {
            $("#subscribeError").show();
        }
    }
  );

// defining valid email function
var isValidEmail = email => {
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
}