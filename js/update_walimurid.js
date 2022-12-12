var table = document.getElementById("tabelinput"), rIndex;

for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
        rIndex = this.rowIndex;

        document.getElementById("id_wali_murid").value = this.cells[0].innerHTML;
        document.getElementById("nama_wali_murid").value = this.cells[1].innerHTML;
        document.getElementById("nama_siswa").value = this.cells[2].innerHTML;
        document.getElementById("alamat_walmur").value = this.cells[3].innerHTML;
        document.getElementById("no_telepon_walmur").value = this.cells[4].innerHTML;
        document.getElementById("usname_wali_murid").value = this.cells[5].innerHTML;
        document.getElementById("pass_wali_murid").value = this.cells[6].innerHTML;
    }
}

function editRow(){
    table.rows[rIndex].cells[0].innerHTML = document.getElementById("id_wali_murid").value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("nama_wali_murid").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("nama_siswa").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("alamat_walmur").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("no_telepon_walmur").value;
    table.rows[rIndex].cells[5].innerHTML = document.getElementById("usname_wali_murid").value;
    table.rows[rIndex].cells[6].innerHTML = document.getElementById("pass_wali_murid").value;
}

function editTableDisplay(){
    document.querySelector(".editTable").setAttribute('style','display:block;')
}