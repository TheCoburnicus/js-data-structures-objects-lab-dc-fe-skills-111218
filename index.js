// Write your solution in this file!

const driver = {};
const newDriver = Object.assign({}, driver);
function updateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  
  newDriver[key] = value;
  
  return driver; 
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