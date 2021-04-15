function isRepdigit(num) {

	return new Set('' + num).size === 1
}


isRepdigit(66)

isRepdigit(0)

isRepdigit(-11)