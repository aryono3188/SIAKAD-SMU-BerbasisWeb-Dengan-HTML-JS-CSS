var table = document.getElementById("tabelinput"), rIndex;

for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
        rIndex = this.rowIndex;

        document.getElementById("nis").value = this.cells[0].innerHTML;
        document.getElementById("nama_siswa").value = this.cells[1].innerHTML;
        document.getElementById("jenis_kelamin_siswa").value = this.cells[2].innerHTML;
        document.getElementById("agama").value = this.cells[3].innerHTML;
        document.getElementById("tempat_lahir").value = this.cells[4].innerHTML;
        document.getElementById("tanggal_lahir").value = this.cells[5].innerHTML;
        document.getElementById("alamat_siswa").value = this.cells[6].innerHTML;
        document.getElementById("no_telepon_siswa").value = this.cells[7].innerHTML;
        document.getElementById("usname_siswa").value = this.cells[8].innerHTML;
        document.getElementById("pass_siswa").value = this.cells[9].innerHTML;
    }
}

function editRow(){
    table.rows[rIndex].cells[0].innerHTML = document.getElementById("nis").value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("nama_siswa").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("jenis_kelamin_siswa").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("agama").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("tempat_lahir").value;
    table.rows[rIndex].cells[5].innerHTML = document.getElementById("tanggal_lahir").value;
    table.rows[rIndex].cells[6].innerHTML = document.getElementById("alamat_siswa").value;
    table.rows[rIndex].cells[7].innerHTML = document.getElementById("no_telepon_siswa").value;
    table.rows[rIndex].cells[8].innerHTML = document.getElementById("usname_siswa").value;
    table.rows[rIndex].cells[9].innerHTML = document.getElementById("pass_siswa").value;
}

function editTableDisplay(){
    document.querySelector(".editTable").setAttribute('style','display:block;')
}