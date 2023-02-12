let dropdownProfile = document.querySelector(`.dropdown-profile`);
let headerProfile = document.querySelector(`.header-profile`);
let headerSearch = document.querySelector(`.header-search`);

headerProfile.addEventListener(`click`, function(){
    dropdownProfile.classList.toggle(`d-none`);
});

let container = document.querySelector(`.album-cards`);

for (let i = 0; i < albums.length; i++) {
    let album = albums[i];
    container.innerHTML += `
    <div class="card">
        <img src="${album.img}" alt="" class="card-top-img">
        <div class="card-body">
            <a href="/album.html?i=${i}" class="card-title">${album.title}</a>
            <div class="album-fav">
                <img src="assets/icons8-favorite-48.png" alt="" class="fav-img">
                <span class="numfav">
                        ${album.likes}
                </span>
            </div>
        </div>
    </div>`;
};
