var table = document.getElementById("tabelinput"), rIndex;

for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
        rIndex = this.rowIndex;

        document.getElementById("nip_t_u").value = this.cells[0].innerHTML;
        document.getElementById("nama_t_u").value = this.cells[1].innerHTML;
        document.getElementById("alamat_t_u").value = this.cells[2].innerHTML;
        document.getElementById("usname_t_u").value = this.cells[3].innerHTML;
        document.getElementById("pass_t_u").value = this.cells[4].innerHTML;
    }
}

function editRow(){
    table.rows[rIndex].cells[0].innerHTML = document.getElementById("nip_t_u").value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("nama_t_u").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("alamat_t_u").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("usname_t_u").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("pass_t_u").value;
}

function editTableDisplay(){
    document.querySelector(".editTable").setAttribute('style','display:block;')
}