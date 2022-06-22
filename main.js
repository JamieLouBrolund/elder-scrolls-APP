document.querySelector('button').addEventListener('click', apiRequest)


async function apiRequest(){
    const raceName = document.querySelector('input').value
    try{
        const responce = await fetch(`https://elder-scrolls-api.herokuapp.com/api/${raceName}`)
        const data = await responce.json()
        console.log(data)

        document.getElementById('raceName').innerText = data.raceName
        document.getElementById('knownAs').innerText = data.knownAs
        document.getElementById('homeland').innerText = data.homeland
        document.getElementById('uniqueSkills').innerText = data.uniqueSkills
        document.getElementById('startingSpells').innerText = data.startingSpells
        document.getElementById('uniquePower').innerText = data.uniquePower
        document.getElementById('uniqueEffects').innerText = data.uniqueEffects
        document.getElementById('survivalMode').innerText = data.survivalMode
        document.getElementById('history').innerText = data.history

        document.getElementById('raceImage').src = data.img
        document.getElementById('raceCaption').innerText = data.raceName

    } catch(error) {
        console.log(error)
    }
}