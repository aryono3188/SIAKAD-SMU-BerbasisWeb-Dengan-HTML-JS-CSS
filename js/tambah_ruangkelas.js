function terimainput() {
    var a = document.forms['biodata']['kode_kelas'].value;
    var b = document.forms['biodata']['nama_kelas'].value;
    var c = document.forms['biodata']['jumlah_murid'].value;

    var tabel = document.getElementById("tabelinput");
    var row = tabel.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = c;
    cell4.innerHTML = '<input type="button" name="del" value="Delete" onclick="del(this);" class="btn btn-danger">';
}

function del(Stud) {
    var s = Stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
}