function addName(obj, name, value) {
  return { ...obj, [name]: value };
}

function addName(obj, name, value) {
  const newObj = {};

  newObj[name] = value;

  const combine = Object.assign(obj, newObj);

  return combine;
}

addName({ piano: 500, stereo: 300 }, "Caligula", 440) 



