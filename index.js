// Write your solution in this file!

const driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
 const newDriver = Object.assign(driver, {key: value});
 
//  newDriver[key] = value;
  
  return newDriver; 
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {

  driver[key] = value;
  
  return driver;
}

function deleteFromDriverByKey() {
  const newDriver = { ...driver };
 
  newDriver[key] = value;
 
  return newDriver;
  
}

function destructivelyDeleteFromDriverByKey() {
  
}