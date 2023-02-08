let container = document.querySelector(`.album-info`);
let playlist = document.querySelector(`.album-tracks`);
let search = new URLSearchParams(window.location.search);
let i = search.get(`i`);
let album = albums[i];
let dropdownProfile = document.querySelector(`.dropdown-profile`);
let headerProfile = document.querySelector(`.header-profile`);
let darkThemeButton = document.querySelector(`#dark-btn`);

headerProfile.addEventListener(`click`, function(){
    dropdownProfile.classList.toggle(`d-none`);
});

if (!album) {
    container.innerHTML = `Такого альбома не существует. Вы будете перенаправлены на страницу через 5 секунд.`;
    setTimeout(function(){
        window.location.pathname = `index.html`;
    }, 5000);
} else {
    document.title += ` "${album.title}" - МШП Музыка`;

    container.innerHTML = `
    <img src="${album.img}" alt="" class="">
    <div class="album-text">
        <div class="album-char">
            <span class="album-type">Плейлист</span>
            <span class="album-time">Длительность: 3ч. 28мин.</span>
        </div>
        <h1 class="album-title">${album.title}</h1>
        <p class="album-desc">${album.description}</p>
        <p class="album-change"><span class="bold">МШП Музыка</span> обновил плейлист ${album.change} года.</p>
        <div class="album-btns">
            <button class="album-play">
                <img src="assets/icons8-play-button-circled-50.png" alt="">
                Слушать
            </button>
            <button class="album-fav">
                <img src="assets/icons8-favorite-48.png" alt="">
                ${album.likes}
            </button>
        </div>
    </div>`;

    let tracks = album.tracks;

    for (let i = 0; i < tracks.length; i++) {
        let track = tracks[i];
        playlist.innerHTML += `
        <div class="track">
            <div class="track-img-name">
                <img src="${track.img}" alt="" class="track-img">
                <div class="track-text">
                    <p class="track-name">${track.title} <span class="feat">${track.feat}</span></p>
                    <span class="track-author">${track.author}</span>
                </div>
            </div>
            <div class="track-end-info">
                <span class="track-time">${track.time}</span>
            </div>
        </div>`;
    };
}