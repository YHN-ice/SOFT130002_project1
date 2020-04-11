function changeCities(countriesSelector, citiesSelector) {
    if (countriesSelector.value == "default") {
        citiesSelector.options.length = 0;
        citiesSelector.options[0] = new Option("Filter by City", "default");
    } else {
        var cityList = cities[countriesSelector.value];
        for (var i = 0; i < cityList.length; i++) {
            citiesSelector.options[i + 1] = new Option();
            citiesSelector.options[i + 1].text = cityList[i];
            citiesSelector.options[i + 1].value = cityList[i];
        }
    }
}


