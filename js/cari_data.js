function myFunction() {
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("tabelinput");
    var tr = table.getElementsByTagName("tr");
    var td;
    var i;
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
        tr[i].style.display = "none";
        }}}}