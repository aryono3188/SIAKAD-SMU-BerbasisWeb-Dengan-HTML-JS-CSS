function myPrint(tabelinput) {
    var prindata = document.getElementById(tabelinput);
    newwin = window.open("");
    newwin.document.write(prindata.outerHTML);
    newwin.print();
    newwin.close();
}