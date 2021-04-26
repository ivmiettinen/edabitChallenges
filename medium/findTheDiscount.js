// Create a function that takes two arguments: the original
// price and the discount percentage as integers and returns
// the final price after the discount.

const dis = (price, discount) => 
   Number((price - (price * discount) / 100).toFixed(2))


dis(1500, 50);

dis(89, 20);

dis(100, 75);
