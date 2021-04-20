// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.

// Do not attempt to import lodash; you are simply writing your own version.

const compact = (p) => p.filter(Boolean);

