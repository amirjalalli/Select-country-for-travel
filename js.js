let countrySelectBox = document.querySelector('.countrySelect')
let citySelect = document.querySelector('.citySelect')
let countryData = {
    Iran: ['tabriz', 'gilan', 'tehran', 'shiraz'],
    Turkey: ['istanbul', 'esmir', 'ankara' ,],
    US: ['San digo', 'Los Angeles', 'Canada']
}

countrySelectBox.addEventListener('change',function(){
    if (countrySelectBox.value === 'Please Select') {
        citySelect.innerHTML = ''
        citySelect.innerHTML += '<option>Please Select your country</option>'
    } else{
        let mainCountryName = countrySelectBox.value
        let mainCountyCites = (countryData[mainCountryName])
        citySelect.innerHTML = ''
        mainCountyCites.forEach(function(city){
            citySelect.innerHTML += '<option>'+city+'</option>'
        })
    }
})