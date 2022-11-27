// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// My Personal API Key 
const apiKey = '090b4ac05225d8e029899f60de99edac&units=metric';

//MY generate function to getting the data from API
let generate = document.getElementById('generate')
generate.addEventListener('click', async() => {

    try {
        let myZipCode = document.getElementById('zip').value;
        let feeling = document.getElementById('feelings').value;

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${myZipCode}&appid=${apiKey}`
        const res = await fetch(apiUrl).then(res => res.json())
        const temp = await res.main.temp
            // console.log(temp);

        await fetch('/addInfo', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    temp,
                    newDate,
                    feeling
                })
            })
            //pring my data to client UI
        const showMyData = await fetch('/getInfo').then(res => res.json())
        document.getElementById('temp').innerHTML = `Temp is : ${Math.round(showMyData.temp)} ْC`
        document.getElementById('date').innerHTML = `Date  : ${showMyData.date}`
        document.getElementById('content').innerHTML = `Feeling : ${showMyData.feeling}`



    } catch (error) {
        console.log('there is erorr', error)
    }
})