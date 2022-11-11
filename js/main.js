    let requestObj = new XMLHttpRequest();

    requestObj.open('GET','https://kitsu.io/api/edge/anime', false);

    requestObj.send();

    let array = JSON.parse(requestObj.responseText);

    let cards = [];

    for (let i = 0; i < array["data"].length; i++) {
    // Здесь в массив я пихаю карточки каждую итерацию цикла
    // push(тут это что-то что мы в массив пихаем) это метод чтобы впихнуть в массив что-то
    cards.push(`
        <div id="animecard" class="card">
            <h1>${array["data"][i]["attributes"]["titles"]["en_jp"]}</h1>
            <img src='${array["data"][i]["attributes"]["posterImage"]["small"]}'>
            <div>Рейтинг: ${array["data"][i]["attributes"]["averageRating"]}</div>
            <div>Количество серий: ${array["data"][i]["attributes"]["episodeCount"]}</div>
        </div>
    `);
    }

// Это я вообще весь сайт сюда перенес, а в html у нас тепреь только тупо блок с id "app"
    document.getElementById("app").innerHTML += `
    <header>
        <div class="head">
        <div class="head-text">
            <h1>Аниме</h1>
        </div>
        </div>
    </header>

    <div class="flex-box">${cards}</div>

    <footer>
        <div class="footer-container">
        <div class="head-text">
            Сайт с API-аниме, 2022
        </div>
        </div>
    </footer>
    `;