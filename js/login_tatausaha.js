let attempt = 3; // Variable to count number of attempts.

// Below function Executes on click of login button.

function validate(){
    let username = document.getElementById("usname_t_u").value;
    let password = document.getElementById("pass_t_u").value;
    if ( 
        ( username == "Haryono" && password == "Keren117" )|| (username == "Gondrong" && password == "beken117")){
            alert ("Login successfully");
            window.location = "index_tatausaha.html"; // Redirecting to other page.
            return false;
        }
    else {
        attempt --;// Decrementing by one.
        alert("your username and password wrong, You have left "+attempt+" attempt;");
        // Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById("usname_t_u").disabled = true;
            document.getElementById("pass_t_u").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        } 
    }
}