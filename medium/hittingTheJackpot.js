// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are
// identical, and false otherwise. The array will contain 4 elements.

function testJackpot(result) {
    return new Set(result).size === 1
}

testJackpot(['&&', '&', '&&&', '&&&&'])

testJackpot(['@', '@', '@', '@'])

testJackpot(['abc', 'abc', 'abc', 'abc'])

testJackpot(['SS', 'SS', 'SS', 'SS'])

testJackpot(['SS', 'SS', 'SS', 'Ss'])
