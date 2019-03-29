var nama = "Itsuki";
var peran = "Ksatria";

if (nama === "") {
  console.log("Nama Harus di isi!");
} else if (peran === "") {
  console.log("Halo " + nama + " pilih peranmu untuk memulai game!");
} else if (peran === "Ksatria") {
  console.log("Selamat datang di Proxytia " + nama);
  console.log(
    "Hallo Ksatria, " + nama + " kamu dapat menyerang dengan senjatamu!"
  );
} else if (peran === "Tabib") {
  console.log("Selamat datang di Proxytia " + nama);
  console.log("Hallo, " + nama + " kamu akan membantu temanmu yang terluka.");
} else {
  console.log("Selamat datang di Proxytia " + nama);
  console.log(
    "Hallo Penyihir " + nama + "ciptakan keajaiban untuk membantu kemenanganmu!"
  );
}
