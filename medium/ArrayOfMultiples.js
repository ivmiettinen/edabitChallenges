function arrayOfMultiples(num, length) {
  let sum = [];

  let double;

  for (i = 0; i < length; i++) {
    if (sum.length === 0) {
      sum.push(num);
    } else {
      double = sum[i - 1] + num;
      sum.push(double);
    }
  }

  return sum;
}


function arrayOfMultiples (num, length) {
	var result = []
    for (let i = 1; i <= length; i++) {
        result.push(num*i)
        
    }
    return result
}

const arrayOfMultiples = (num, length) => {
	return Array.from({length: length}, (_, i) => num * (i + 1));
}