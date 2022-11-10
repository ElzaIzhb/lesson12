    let requestObj = new XMLHttpRequest();

    requestObj.open('GET','https://kitsu.io/api/edge/anime', false);

    requestObj.send();

    let array = JSON.parse(requestObj.responseText);

    for (let i = 0; i < array['data'].length; i++ ) {
 
        document.getElementById('photos').innerHTML += `
                                    <h1>
                                        ${array['data'][i]['attributes']['titles']['en_jp']}
                                    </h1>
                                    <img src='${array['data'][i]['attributes']['posterImage']['small']}'>
                                    `;
     
    }
     
  