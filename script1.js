var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();

request.onload = function() {

    let countryData = JSON.parse(this.response);

    //Countries from Asia
    let countriesFromAsia = countryData.filter((x) => x.region == 'Asia');
    console.log(countriesFromAsia);

    //Countries with population less than 2 lakhs
    let countriesPopulation = countryData.filter((x) => x.population < 200000);
    console.log(countriesPopulation);

    //Country name capital and flag
    countryData.forEach(element => {
        console.log(`${element.name} - ${element.capital} - ${element.flag}`);
    });

    //Total population of all countries

    let totalPopulation = countryData.reduce((sum, currentValue) => sum + currentValue.population, 0);
    console.log(`Total population : ${totalPopulation}`);

    //Countries which use US dollars
    let countriesUsingUsDollars = countryData.filter((x) => {
        for (let curr in x.currencies) {
            if (x.currencies[curr].code == 'USD') {
                return true;
            }
        }

    }).map(x => console.log(x.name));
    //console.log(countriesUsingUsDollars);

}
