function SignUpValidate() {
    var email = document.forms["SignUp"]["Email"];
    var password = document.forms["SignUp"]["Pass"];
    var rpassword = document.forms["SignUp"]["RPass"];
    var m = false;
    var p = false;
    var r = false;

    if (email.value == "") {
        document.getElementById("merror").innerHTML = "Please Enter your Email";
        document.getElementById("m").style.borderColor = "red";
        document.getElementById("m").style.borderWidth = "3px";
        email.focus();
        return false;
    }
    if (!(String)(email.value).includes('@',1) || !(String)(email.value).includes('.',3)) {
        document.getElementById("merror").innerHTML = "Valid Emails must be in the form -@-.-";
        document.getElementById("m").style.borderColor = "red";
        document.getElementById("m").style.borderWidth = "3px";
        email.focus();
        return false;
    }
    if (email.value != "" && (String)(email.value).includes('@',1) && (String)(email.value).includes('.',3)) {
        document.getElementById("merror").innerHTML = "";
        document.getElementById("m").style.borderWidth = "0px";
        email.focus();
        m = true;
    }
    if (password.value == "") {
        document.getElementById("perror").innerHTML = "Please Enter a Password";
        document.getElementById("p").style.borderColor = "red";
        document.getElementById("p").style.borderWidth = "3px";
        password.focus();
        return false;
    }
    if ((String)(password.value).length < 8) {
        document.getElementById("perror").innerHTML = "Strong Passwords have to be more than 8 characters long";
        document.getElementById("p").style.borderColor = "red";
        document.getElementById("p").style.borderWidth = "3px";
        password.focus();
        return false;
    }
    if (password.value != "" && (String)(password.value).length >= 8) {
        document.getElementById("perror").innerHTML = "";
        document.getElementById("p").style.borderWidth = "0px";
        password.focus();
        p = true;
    }
    if ((String)(rpassword.value) != ((String)(password.value))) {
        document.getElementById("rperror").innerHTML = "Repeated Password must be the same as Password";
        document.getElementById("r").style.borderColor = "red";
        document.getElementById("r").style.borderWidth = "3px";
        rpassword.focus();
        return false;
    }
    if ((String)(rpassword.value) == ((String)(password.value))) {
        document.getElementById("rperror").innerHTML = "";
        document.getElementById("r").style.borderWidth = "0px";
        rpassword.focus();
        r = true;
    }
    return m && p && r;
}
function Password() {
    var x = document.getElementById("p");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

function changeBackground(){
    var n = Math.floor(Math.random()*10+1);
    var number = parseInt(document.getElementById("num").value);
    var c;

    if(number==n){
        document.getElementsByClassName("h13")[0].innerHTML="Congrats! You guessed it right!";
        c = "royalblue";
    }
    else if(number>=1 && number<=10 && number!=n){
        document.getElementsByClassName("h13")[0].innerHTML="Better Luck next time!";
        c = "salmon";
    }
    else if(number>10 || number<1){
        window.alert('Number has to be between 1 and 10');
    }
    else{
        window.alert('Pick a number between 1 and 10');
    }
    document.body.style.backgroundColor=c;
    document.querySelectorAll("button")[0].addEventListener("click");
}

function ContactUsValidate() {
    var firstName = document.forms["ContactUs"]["fn"];
    var lastName = document.forms["ContactUs"]["ln"];
    var message = document.forms["ContactUs"]["mess"];
    var f = false;
    var l = false;
    var m = false;

    if (firstName.value == "") {
        document.getElementById("fnerror").innerHTML = "Please Enter your First Name";
        document.getElementById("f").style.borderColor = "red";
        document.getElementById("f").style.borderStyle = "solid";
        document.getElementById("f").style.borderWidth = "3px";
        firstName.focus();
        return false;
    }
    if (firstName.value != "") {
        document.getElementById("fnerror").innerHTML = "";
        document.getElementById("f").style.borderColor = "black";
        document.getElementById("f").style.borderWidth = "0.5px";
        document.getElementById("f").style.borderStyle = "double";
        firstName.focus();
        f = true;
    }
    if (lastName.value == "") {
        document.getElementById("lnerror").innerHTML = "Please Enter your Last Name";
        document.getElementById("l").style.borderColor = "red";
        document.getElementById("l").style.borderStyle = "solid";
        document.getElementById("l").style.borderWidth = "3px";
        lastName.focus();
        return false;
    }
    if (lastName.value != "") {
        document.getElementById("lnerror").innerHTML = "";
        document.getElementById("l").style.borderColor = "black";
        document.getElementById("l").style.borderWidth = "0.5px";
        document.getElementById("l").style.borderStyle = "double";
        lastName.focus();
        l = true;
    }
    if (message.value == "") {
        document.getElementById("texterror").innerHTML = "Please Enter a message to proceed";
        document.getElementById("c").style.borderColor = "red";
        document.getElementById("c").style.borderStyle = "solid";
        document.getElementById("c").style.borderWidth = "3px";
        message.focus();
        return false;
    }
    if (message.value != "") {
        document.getElementById("texterror").innerHTML = "";
        document.getElementById("c").style.borderColor = "black";
        document.getElementById("c").style.borderWidth = "0.5px";
        document.getElementById("c").style.borderStyle = "double";
        message.focus();
        m = true;
    }
    window.alert('Your Message have been submitted Successfully!');
    return m && p && r;
}