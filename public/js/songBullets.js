var moreBtns = document.querySelectorAll('.more-btn');

function showMenu(e) {
    e.preventDefault();
    var parentMore = this.closest('.more');
    var menu = parentMore.querySelector('.more-menu');
    if (!parentMore.classList.contains('show-more-menu')) {
        parentMore.classList.add('show-more-menu');
        menu.setAttribute('aria-hidden', false);
        document.addEventListener('mousedown', hideMenu, false);
    }
}

function hideMenu(e) {
    var parentMore = e.target.closest('.more');
    if (!parentMore) {
        var menus = document.querySelectorAll('.more-menu');
        menus.forEach(function(menu) {
            menu.setAttribute('aria-hidden', true);
            menu.closest('.more').classList.remove('show-more-menu');
        });
        document.removeEventListener('mousedown', hideMenu);
    }
}

moreBtns.forEach(function(btn) {
    btn.addEventListener('click', showMenu, false);
});

async function addToPlaylist() {
    var modal = document.createElement("div");
    modal.id = "createModalSong";
    modal.classList.add("modal");
    modal.style.display = "none";

    var modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    var closeButton = document.createElement("span");
    closeButton.classList.add("close-song");
    closeButton.textContent = "x";
    closeButton.addEventListener("click", closeModal);

    var title = document.createElement("h1");
    title.classList.add("font-bold", "text-2xl", "mb-4", "text-neutral-300");
    title.textContent = "Add Song to Playlist";

    var form = document.createElement("form");
    form.id = "createSongForm";

    var nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "songName");
    nameLabel.classList.add("block", "text-sm", "font-medium", "text-grey-700", "dark:text-neutral-300", "mb-2");
    nameLabel.textContent = "Choose Playlist : ";

    var selectMenu = document.createElement("select");
    selectMenu.id = "playlistSelect";
    selectMenu.classList.add("shadow-sm", "rounded-md", "w-full", "px-3", "py-2", "border-2", "border-neutral-300", "focus:outline-none", "focus:ring-spotitip", "focus:border-spotitip");
    selectMenu.required = true;
    selectMenu.name = "playlistSelect";

    var defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select Playlist";
    selectMenu.appendChild(defaultOption);

    var uploadButton = document.createElement("button");
    uploadButton.type = "button";
    uploadButton.classList.add("addSong", "w-full", "flex", "justify-center", "py-2", "px-4", "border", "border-transparent", "rounded-md", "shadow-sm", "text-sm", "font-medium", "text-white", "bg-emerald-600", "hover:bg-spotitip", "hover:text-black", "close-song");
    uploadButton.textContent = "Add";
    uploadButton.addEventListener("click", uploadSong);

    modalContent.appendChild(title);
    modalContent.appendChild(closeButton);
    form.appendChild(nameLabel);
    form.appendChild(selectMenu);
    form.appendChild(uploadButton);
    modalContent.appendChild(form);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    try {
        const response = await fetch('/myplaylists');
        if (!response.ok) {
            throw new Error('Failed to fetch playlists');
        }

        const data = await response.json();
        const playlists = data.myplaylists;

        playlists.forEach(function(playlist) {
            var option = document.createElement("option");
            option.value = playlist.id;
            option.textContent = playlist.name;
            selectMenu.appendChild(option);
        });

    } catch (error) { console.error('Error fetching playlists:', error); }
}

addToPlaylist();

function showModal() {
    var modal = document.getElementById("createModalSong");
    if (!modal) { modal = document.getElementById("createModalSong"); }
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("createModalSong");
    modal.style.display = "none";
}

function uploadSong() {
    closeModal();
}

function deleteFromPlaylist() {}
