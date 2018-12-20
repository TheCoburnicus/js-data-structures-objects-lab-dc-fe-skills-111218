// Write your solution in this file!

const driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
 const newDriver = Object.assign({}, driver, {[key]: value});
 
//  newDriver[key] = value;
  
  return newDriver; 
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
const newDriver = Object.assign({}, driver);

 // driver[key] = value;

  delete Object.key  
  return newDriver;
}

function deleteFromDriverByKey() {
  const newDriver = { ...driver };
 
  newDriver[key] = value;
 
  return newDriver;
  
}

function destructivelyDeleteFromDriverByKey() {
  
}