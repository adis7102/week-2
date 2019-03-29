console.log("Melakukan Looping Menggunakan While");

console.log("LOOPING PERTAMA");
var loop1 = 2;
while (loop1 <= 20) {
  console.log(loop1 + " - I Love Coding");
  loop1 += 2;
}

console.log("LOOPING KEDUA");
var loop2 = 20;
while (loop2 > 0) {
  console.log(loop2 + " - I Love Coding");
  loop2 -= 2;
}

console.log("================================================");
console.log("Melakukan Looping Menggunakan For");
console.log("LOOPING PERTAMA");
for (var loop1 = 1; loop1 <= 20; loop1++) {
  console.log(loop1 + " - I Love Coding");
}

console.log("LOOPING KEDUA");
for (var loop2 = 20; loop2 >= 1; loop2--) {
  console.log(loop2 + " - I Love Coding");
}
console.log("================================================");
console.log("Angka Ganjil dan Genap");
console.log("LOOPIG GANJIL - GENAP PERTAMBAHAN 1");
var loop1 = 1;

while (loop1 <= 100) {
  console.log("counter saat ini = " + loop1 + " ");
  if (loop1 % 2 == 0) {
    console.log("Genap");
  } else {
    console.log("Ganjil");
  }
  loop1++;
}
console.log("---------------------------------");
console.log("LOOPING PERTAMBAHAN 2 KELIPATAN 3");

var loop2 = 1;

while (loop2 <= 100) {
  console.log("conter saat ini = " + loop2);
  if (loop2 % 3 === 0) {
    console.log(loop2 + " Kelipatan 3");
  } else {
    console.log("");
  }
  loop2 += 2;
}
console.log("---------------------------------");
console.log("LOOPING PERTAMBAHAN 5 KELIPATAN 6");

var loop3 = 1;

while (loop3 <= 100) {
  console.log("conter saat ini = " + loop3);
  if (loop3 % 6 === 0) {
    console.log(loop3 + " Kelipatan 6");
  } else {
    console.log("");
  }
  loop3 += 5;
}
console.log("---------------------------------");
console.log("LOOPING PERTAMBAHAN 9 KELIPATAN 10");

var loop4 = 1;

while (loop4 <= 100) {
  console.log("conter saat ini = " + loop4);
  if (loop4 % 10 === 0) {
    console.log(loop4 + " Kelipatan 10");
  } else {
    console.log("");
  }
  loop4 += 9;
}
