function convertToRoman(num) {
  var map = [
    { d:1, r:'I' },
    { d:4, r:'IV' },
    { d:5, r:'V' },
    { d:9, r:'IX' },
    { d:10, r:'X' },
    { d:40, r:'XL' },
    { d:50, r:'L' },
    { d:90, r:'XC' },
    { d:100, r:'C' },
    { d:400, r:'CD' },
    { d:500, r:'D' },
    { d:900, r:'CM' },
    { d:1000, r:'M' }
  ];
  
  let romanStr = '';
  
  while (num > 0) {
    let max = map[0];
    map.forEach(function(romR) {
      if (romR.d <= num) {
        max = romR;
      }
    });
  
    romanStr += max.r;
    num -= max.d;

  }
  
  return romanStr;
}

convertToRoman(36);
