//oma:

function add_suffix(suffix) {
   

    return function (second) {
        return second + suffix
    }
}

//esimerkki:
const add_suffix = suffix => prefix => prefix + suffix

add_ly = add_suffix('ly')

