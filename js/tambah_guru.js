function terimainput() {
    var a = document.forms['biodata']['nip_guru'].value;
    var b = document.forms['biodata']['nama_guru'].value;
    var c = document.forms['biodata']['jenis_kelamin_guru'].value;
    var d = document.forms['biodata']['usname_guru'].value;
    var e = document.forms['biodata']['pass_guru'].value;
    var f = document.forms['biodata']['wali_kelas'].value;
    var g = document.forms['biodata']['alamat_guru'].value;
    var h = document.forms['biodata']['no_telepon_guru'].value;
   
    var tabel = document.getElementById("tabelinput");
    var row = tabel.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);


    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = c;
    cell4.innerHTML = d;
    cell5.innerHTML = e;
    cell6.innerHTML = f;
    cell7.innerHTML = g;
    cell8.innerHTML = h;
    cell9.innerHTML = '<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">';
}

function delStudent(Stud) {
    var s = Stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
}

