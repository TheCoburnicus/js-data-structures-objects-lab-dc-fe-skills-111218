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

  newDriver[key]  
  return newDriver;
}

function deleteFromDriverByKey() {
const newDriver = Object.assign({}, driver);
 
  delete newDriver[key]
  return newDriver;
}

function destructivelyDeleteFromDriverByKey() {
  
}