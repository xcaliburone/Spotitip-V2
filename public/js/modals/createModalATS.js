document.addEventListener('DOMContentLoaded', function() {
    const createModalButtonPTS = document.getElementById('createModalSongToPlaylist');
    const createModalPTS = document.getElementById('createModalPTS');
    const closeCreateModalPTS = document.getElementsByClassName('close-song')[0];

    if (createModalButtonPTS) {
        createModalButtonPTS.onclick = function() { createModalPTS.style.display = "block"; }
    } else {
        console.error("Element with ID 'createModalButtonPTS' not found.");
    }

    if (closeCreateModalPTS) {
        closeCreateModalPTS.onclick = function() { createModalPTS.style.display = "none"; }
    } else {
        console.error("Element with class 'close-song' not found.");
    }
});

window.onclick = function(event) {
    if (event.target == createModalPTS) { createModalPTS.style.display = "none"; }
}