const playlist = document.getElementById("playlist");

const statusText = document.getElementById("status");

function fetchSongs() {

    statusText.innerText = "⏳ Loading Playlist...";

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const success = true;

            if (success) {

                const jsonData = `[
          {
            "id": 1,
            "title": "Night Drive",
            "artist": "Alan Walker",
            "duration": "3:45",
            "image": "https://picsum.photos/400?1"
          },
          {
            "id": 2,
            "title": "Dream Lights",
            "artist": "Marshmello",
            "duration": "4:10",
            "image": "https://picsum.photos/400?2"
          },
          {
            "id": 3,
            "title": "Sky Beats",
            "artist": "The Weeknd",
            "duration": "2:58",
            "image": "https://picsum.photos/400?3"
          },
          {
            "id": 4,
            "title": "Moon Vibes",
            "artist": "Imagine Dragons",
            "duration": "3:20",
            "image": "https://picsum.photos/400?4"
          },
          {
            "id": 5,
            "title": "Electric Heart",
            "artist": "Dua Lipa",
            "duration": "4:02",
            "image": "https://picsum.photos/400?5"
          },
          {
            "id": 6,
            "title": "Sunset Flow",
            "artist": "Ed Sheeran",
            "duration": "3:50",
            "image": "https://picsum.photos/400?6"
          }
        ]`;

                resolve(JSON.parse(jsonData));

            } else {

                reject("❌ Failed To Fetch Playlist");

            }

        }, 3000);

    });

}

fetchSongs()

    .then((songs) => {

        statusText.innerText = "✅ Playlist Loaded";

        songs.forEach((song) => {

            playlist.innerHTML += `
        <div class="card">
          <img src="${song.image}">
          
          <div class="card-content">
            <h2>${song.title}</h2>
            <p class="artist">${song.artist}</p>
            <p class="duration">⏱ ${song.duration}</p>
          </div>
        </div>
      `;

        });

    })

    .catch((error) => {

        statusText.innerText = error;

    });