/**
 * File: jsUtility.js
 * Author: Akash Patel
 * Date: 16 Sep 2022
 * Summary : Utility file containing helper JS functions to perform certain tasks
 */

// source: https://www.syncfusion.com/faq/blazor/general/how-do-i-generate-and-save-a-file-client-side-using-blazor
// helping function to download calculator history as a text file
function saveFile(name, Content) {
    var link = document.createElement('a');
    link.download = name;
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(Content)
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// allow to print calculator history
function invokePrint() {
    window.print();
}

// set focus to the textarea which allows user to edit the calculation data
function focusTextArea(id) {
    document.getElementById(id).focus();
}
