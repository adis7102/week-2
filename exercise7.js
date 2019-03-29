console.log("Menyusun barisan bintang");
for (var x = 1; x <= 5; x++) {
  console.log("*");
}
console.log("Menyusun barisan bintang dengan nested looping");
var rows2 = "";
for (var x = 1; x <= 5; x++) {
  for (var y = 1; y <= 5; y++) {
    rows2 += "*";
  }
  console.log(rows2);
  rows2 = "";
}
console.log("Menyusun barisan tangga bintang dengan nested looping");
for (var x = 1; x <= 5; x++) {
  var rows3 = "";
  for (var y = 1; y <= x; y++) {
    rows3 += "*";
  }
  console.log(rows3);
}
