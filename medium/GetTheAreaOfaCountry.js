// Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.
// The total world's landmass is 148,940,000 [Km^2]
// Round the result to two decimal places.

function areaOfCountry(name, area) {
    const result = (area / 148940000 * 100).toFixed(2)

    return `${name} is ${result}% of the total world's landmass`
}

areaOfCountry('Russia', 17098242)
