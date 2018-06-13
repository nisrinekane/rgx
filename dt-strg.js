//find date in a string
function isDateString(str) {
    regexp = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if(regexp.test(str)) {
      console.log("Found date in the string");
    }
    else {
      conole.log("No date found in the string");
    }
}
