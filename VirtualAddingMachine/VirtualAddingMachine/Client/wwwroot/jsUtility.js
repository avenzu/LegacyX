// source: https://www.syncfusion.com/faq/blazor/general/how-do-i-generate-and-save-a-file-client-side-using-blazor
function saveFile(name, Content) {
    var link = document.createElement('a');
    link.download = name;
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(Content)
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function invokePrint() {
    window.print();
}

function focusTextArea(id) {
    document.getElementById(id).focus();
}
