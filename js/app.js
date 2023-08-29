
/*!
    Booklet Template
    Created on date: 8/18/2023
    Built on date: 8/20/2023
*/


// NAVBAR
function navbarClick() {
    document.getElementById("navbarClick").classList.toggle("navbarClickStyle");
}
// AVATAR USER DROPDOWN
function avatarUserDropdown() {
    document.getElementById("avatarUserDropdown").classList.toggle("avatarUserDropdownStyle");
}

// NEW NOTE
function newNote() {
    document.getElementById("newNote").classList.toggle("newNoteStyle");
}
function editNoteAction1() {
    var editNoteAction = document.getElementById("editNoteAction1");
    editNoteAction.select();
}
function editNoteAction2() {
    var editNoteAction = document.getElementById("editNoteAction2");
    editNoteAction.select();
}
function editNoteAction3() {
    var editNoteAction = document.getElementById("editNoteAction3");
    editNoteAction.select();
}
function editNoteAction4() {
    var editNoteAction = document.getElementById("editNoteAction4");
    editNoteAction.select();
}
function editNoteAction5() {
    var editNoteAction = document.getElementById("editNoteAction5");
    editNoteAction.select();
}

// TOGGLE MODE
function toggleMode() {
    document.body.classList.toggle("toggleModeStyle");
}