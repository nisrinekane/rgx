//check if string's first character is uppecase
function upperCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
      console.log("String's first character is uppercase");
    } 
    else {
      console.log("String's first character is not uppercase");
    }
}
