const readline = require("readline-sync");

let history = [];
let previousResult = 0;

function showMainMenu() {
  console.log("Menu Utama:");
  console.log("1. Kalkulasi");
  console.log("2. Lihat Riwayat");
  console.log("3. Keluar");
  const choice = readline.question("Pilih menu: ");
  switch (choice) {
    case "1":
      showCalculationMenu();
      break;
    case "2":
      showHistory();
      break;
    case "3":
      confirmExit();
      break;
    default:
      console.log("Pilihan tidak valid");
      showMainMenu();
  }
}

function showCalculationMenu() {
  console.log("Menu Kalkulasi:");
  console.log("1. Pertambahan");
  console.log("2. Pengurangan");
  console.log("3. Perkalian");
  console.log("4. Pembagian");
  console.log("5. Modulus");
  console.log("6. Akar");
  console.log("7. Sinus");
  console.log("8. Cosinus");
  console.log("9. Tangen");
  const choice = readline.question("Pilih operasi: ");
  switch (choice) {
    case "1":
      performCalculation("+");
      break;
    case "2":
      performCalculation("-");
      break;
    case "3":
      performCalculation("*");
      break;
    case "4":
      performCalculation("/");
      break;
    case "5":
      performCalculation("%");
      break;
    case "6":
      performCalculation("akar");
      break;
    case "7":
      performCalculation("sin");
      break;
    case "8":
      performCalculation("cos");
      break;
    case "9":
      performCalculation("tan");
      break;
    default:
      console.log("Pilihan tidak valid");
      showCalculationMenu();
  }
}

function performCalculation(operator) {
  const angkaPertama =
    previousResult || parseFloat(readline.question("Masukan angka pertama: "));
  let angkaKedua;
  if (operator !== "akar") {
    angkaKedua = parseFloat(readline.question("Masukan angka kedua: "));
  }
  try {
    let hasil;
    switch (operator) {
      case "+":
        hasil = angkaPertama + angkaKedua;
        break;
      case "-":
        hasil = angkaPertama - angkaKedua;
        break;
      case "*":
        hasil = angkaPertama * angkaKedua;
        break;
      case "/":
        if (angkaKedua === 0) {
          throw new Error("Angka kedua tidak boleh bernilai 0");
        }
        hasil = angkaPertama / angkaKedua;
        break;
      case "%":
        hasil = angkaPertama % angkaKedua;
        break;
      case "akar":
        hasil = Math.sqrt(angkaPertama);
        break;
      case "sin":
        hasil = Math.sin((angkaPertama * Math.PI) / 180);
        break;
      case "cos":
        hasil = Math.cos((angkaPertama * Math.PI) / 180);
        break;
      case "tan":
        hasil = Math.tan((angkaPertama * Math.PI) / 180);
        break;
    }
    console.log(`Hasil nya adalah ${hasil}`);
    history.push(`${angkaPertama} ${operator} ${angkaKedua} = ${hasil}`);
    previousResult = hasil;
  } catch (e) {
    console.log(e.message);
  }
  const choice = readline.question("Lanjutkan perhitungan? (y/n) : ");
  if (choice.toLowerCase() !== "y") {
    showMainMenu();
  } else {
    showCalculationMenu();
  }
}

function showHistory() {
  console.log("Riwayat kalkulasi:");
  history.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
  showMainMenu();
}

function confirmExit() {
  const choice = readline.question("Apakah Anda yakin ingin keluar? (y/n) : ");
  if (choice.toLowerCase() === "y") {
    console.log("Sistem telah selesai");
    process.exit();
  } else {
    showMainMenu();
  }
}

showMainMenu();
