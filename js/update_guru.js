var table = document.getElementById("tabelinput"), rIndex;

for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
        rIndex = this.rowIndex;

        document.getElementById("nip_guru").value = this.cells[0].innerHTML;
        document.getElementById("nama_guru").value = this.cells[1].innerHTML;
        document.getElementById("jenis_kelamin_guru").value = this.cells[2].innerHTML;
        document.getElementById("usname_guru").value = this.cells[3].innerHTML;
        document.getElementById("pass_guru").value = this.cells[4].innerHTML;
        document.getElementById("wali_kelas").value = this.cells[5].innerHTML;
        document.getElementById("alamat_guru").value = this.cells[6].innerHTML;
        document.getElementById("no_telepon_guru").value = this.cells[7].innerHTML;
    }
}

function editRow(){
    table.rows[rIndex].cells[0].innerHTML = document.getElementById("nip_guru").value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("nama_guru").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("jenis_kelamin_guru").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("usname_guru").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("pass_guru").value;
    table.rows[rIndex].cells[5].innerHTML = document.getElementById("wali_kelas").value;
    table.rows[rIndex].cells[6].innerHTML = document.getElementById("alamat_guru").value;
    table.rows[rIndex].cells[7].innerHTML = document.getElementById("no_telepon_guru").value;
}

function editTableDisplay(){
    document.querySelector(".editTable").setAttribute('style','display:block;')
}