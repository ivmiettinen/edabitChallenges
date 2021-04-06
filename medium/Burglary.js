//Oikea ratkaisu:) :

function addName (obj, name, value) {
	return {...obj, [name]: value}
};


/////////

function addName(obj, name, value) {
	
  let newObj = {}

  newObj[name] = value

  let combine = Object.assign(obj, newObj)

  return combine


}


///////

function addName(obj, name, value) {
  const existingObj = obj;

  const dynamic = {};

  dynamic[name] = value;

  Object.assign(existingObj, dynamic);

  return existingObj;
}

addName({ piano: 500, stereo: 300 }, 'Caligula', 440);

//https://ui.dev/computed-property-names/

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

///////////Oma kehittely :)

function addName(obj, name, value) {
  //   console.log('obj[name] ', obj[name]);

  //   console.log('(obj[name] = value)', (obj[name] = value));

  //   console.log('obj, name, value', obj, name, value);

  //   console.log('obj', obj);
  //   console.log('name', name);
  //   console.log('value', value);

  let target = obj;

  console.log('target:', target);

  let dynamic = {};

  dynamic[name] = value;

  console.log('addmore', dynamic);

  const combine = Object.assign(target, dynamic);

  console.log('combine', combine);

  // return ({obj: obj, name: name, value: value})
  // return ({[obj]: obj, [name]: name, [value]: value})
  return target;
}

addName({ piano: 500, stereo: 300 }, 'Caligula', 440);
