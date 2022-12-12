var attempt = 3; // Variable to count number of attempts.

// Below function Executes on click of login button.

function validate(){
    var username = document.getElementById("usname_guru").value;
    var password = document.getElementById("pass_guru").value;
    if ( 
        ( username == "Haryono" && password == "Keren117" )|| (username == "Gondrong" && password == "beken117")){
            alert ("Login successfully");
            window.location = "index_guru.html"; // Redirecting to other page.
            return false;
        }
    else {
        attempt --;// Decrementing by one.
        alert("your username and password wrong, You have left "+attempt+" attempt;");
        // Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById("usname_guru").disabled = true;
            document.getElementById("pass_guru").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        } 
    }
}