
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const creationForm = document.getElementById("creation-form")
const songInput = document.getElementById("song-input")
const albumInput = document.getElementById("album-input")
const deletionForm = document.getElementById("delete-form")
const deleteIdInput = document.getElementById("delete-id-input")
const updateForm = document.getElementById("update-form")
const updateIdInput = document.getElementById("update-id-input")
const updateSongInput = document.getElementById("update-song-input")
const resultsSection = document.getElementById("results-section")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const fortune = res.data;
            alert(fortune);
    });
};

const createSong = (event) => {
    event.preventDefault()
    eraseResultsSection()
    
    const body = {
        song: songInput.value,
        album: albumInput.value
    }

    songInput.value = ''
    albumInput.value = ''

    console.log(songInput.value + " " + albumInput.value)

    axios.post("http://localhost:4000/api/create/", body)
    .then((res) => {
        let db = res.data
        for (let i = 0; i < db.length; i++) {
            displayUserOnDOM(db[i])
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

function deleteSong (event) {
    event.preventDefault()
    eraseResultsSection()

    deleteId = deleteIdInput.value
    deleteIdInput.value = ''
    
    axios.delete("http://localhost:4000/api/delete/" + deleteId)
    .then((res)=> {
        let db = res.data
        console.log(db)
        for (let i = 0; i < db.length; i++) {
            displayUserOnDOM(db[i])
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

function updateSong (event) {
    event.preventDefault()
    eraseResultsSection()
    
    const body = {
        id: updateIdInput.value,
        song: updateSongInput.value
    }

    updateIdInput.value = ''
    updateSongInput.value = ''

    axios.put("http://localhost:4000/api/update/", body)
    .then((res) => {
        let db = res.data
        for (let i = 0; i < db.length; i++) {
            displayUserOnDOM(db[i])
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

function displayUserOnDOM(userObj) {
    let container = document.createElement('div')
    let album = document.createElement('p')
    let song = document.createElement('p')
    let id = document.createElement('p')

    album.innerHTML = 'Album: ' + userObj.album
    song.innerHTML = 'Song: ' + userObj.song
    id.innerHTML = 'ID: ' + userObj.id

    container.appendChild(album)
    container.appendChild(song)
    container.appendChild(id)

    container.classList.add('song-container')

    resultsSection.appendChild(container)
}

function eraseResultsSection() {
    resultsSection.innerHTML = ''
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
creationForm.addEventListener('submit', createSong)
deletionForm.addEventListener('submit', deleteSong)
updateForm.addEventListener('submit', updateSong)





