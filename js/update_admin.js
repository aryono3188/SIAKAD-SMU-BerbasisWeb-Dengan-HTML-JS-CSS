var table = document.getElementById("tabelinput"), rIndex;

for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
        rIndex = this.rowIndex;

        document.getElementById("id_admin").value = this.cells[0].innerHTML;
        document.getElementById("nama_admin").value = this.cells[1].innerHTML;
        document.getElementById("usname_admin").value = this.cells[2].innerHTML;
        document.getElementById("pass_admin").value = this.cells[3].innerHTML;
        document.getElementById("email").value = this.cells[4].innerHTML;
        document.getElementById("regdate").value = this.cells[5].innerHTML;
    }
}

function editRow(){
    table.rows[rIndex].cells[0].innerHTML = document.getElementById("id_admin").value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("nama_admin").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("usname_admin").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("pass_admin").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("email").value;
    table.rows[rIndex].cells[5].innerHTML = document.getElementById("regdate").value;
}

function editTableDisplay(){
    document.querySelector(".editTable").setAttribute('style','display:block;')
}