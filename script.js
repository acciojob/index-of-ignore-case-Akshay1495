function indexOfIgnoreCase(s1, s2) {
  if (s1 === '' || s2 === '') {
    return -1;
  }
  
  const lowerStr = s1.toLowerCase();
  const lowerSubStr = s2.toLowerCase();
  
  for (let i = 0; i <= lowerStr.length - lowerSubStr.length; i++) {
    let found = true;
    for (let j = 0; j < lowerSubStr.length; j++) {
      if (lowerStr[i + j] !== lowerSubStr[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      return i;
    }
  }
  return -1;
}



// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
