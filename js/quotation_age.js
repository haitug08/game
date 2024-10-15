function customCalculate() {
  var selectedOption = document.querySelector('input[name="course"]:checked').value;
  if (selectedOption === "amount_fixed") {
    document.querySelector(".open1").style.display = "block";
    document.querySelector(".open2").style.display = "none";
    document.querySelector(".open3").style.display = "block";
  } else if (selectedOption === "premium_fixed") {
    document.querySelector(".open1").style.display = "none";
    document.querySelector(".open2").style.display = "block";
    document.querySelector(".open3").style.display = "block";
  }
}


function calculate() {
  var premium = calculatePremium();
  var amount = calculateAmount();
}


function calculatePremium() {
  var a, b, c, d;
  a = document.querySelector('select[name="contractor_age"]').value;
  b = document.querySelector('input[name="gender"]:checked').value;
  c = document.querySelector('input[name="select_amount"]:checked').value;
  d = document.querySelector('input[name="times"]:checked').value;

  if (a == 50 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "580";
    document.getElementById("product").innerText = "580円/月";
  } else if (a == 51 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "620";
    document.getElementById("product").innerText = "620円/月";
  } else if (a == 52 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "670";
    document.getElementById("product").innerText = "670円/月";
  } else if (a == 53 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "710";
    document.getElementById("product").innerText = "710円/月";
  } else if (a == 54 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "770";
    document.getElementById("product").innerText = "770円/月";
  } else if (a == 55 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "830";
    document.getElementById("product").innerText = "830円/月";
  } else if (a == 56 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "890";
    document.getElementById("product").innerText = "890円/月";
  } else if (a == 57 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "950";
    document.getElementById("product").innerText = "950円/月";
  } else if (a == 58 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "1020";
    document.getElementById("product").innerText = "1,020円/月";
  } else if (a == 59 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "1090";
    document.getElementById("product").innerText = "1,090円/月";
  } else if (a == 60 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "1180";
    document.getElementById("product").innerText = "1,180円/月";
  } else if (a == 61 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "1300";
    document.getElementById("product").innerText = "1,300円/月";
  } else if (a == 62 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "1430";
    document.getElementById("product").innerText = "1,430円/月";
  } else if (a == 63 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "1560";
    document.getElementById("product").innerText = "1,560円/月";
  } else if (a == 64 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "1690";
    document.getElementById("product").innerText = "1,690円/月";
  } else if (a == 65 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "1850";
    document.getElementById("product").innerText = "1,850円/月";
  } else if (a == 66 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "2020";
    document.getElementById("product").innerText = "2,020円/月";
  } else if (a == 67 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "2190";
    document.getElementById("product").innerText = "2,190円/月";
  } else if (a == 68 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "2370";
    document.getElementById("product").innerText = "2,370円/月";
  } else if (a == 69 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "2570";
    document.getElementById("product").innerText = "2,570円/月";
  } else if (a == 70 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "2800";
    document.getElementById("product").innerText = "2,800円/月";
  } else if (a == 71 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "3060";
    document.getElementById("product").innerText = "3,060円/月";
  } else if (a == 72 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "3330";
    document.getElementById("product").innerText = "3,330円/月";
  } else if (a == 73 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "3610";
    document.getElementById("product").innerText = "3,610円/月";
  } else if (a == 74 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "3910";
    document.getElementById("product").innerText = "3,910円/月";
  } else if (a == 75 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "4300";
    document.getElementById("product").innerText = "4,300円/月";
  } else if (a == 76 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "4770";
    document.getElementById("product").innerText = "4,770円/月";
  } else if (a == 77 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "5340";
    document.getElementById("product").innerText = "5,340円/月";
  } else if (a == 78 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "6020";
    document.getElementById("product").innerText = "6,020円/月";
  } else if (a == 79 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "6800";
    document.getElementById("product").innerText = "6,800円/月";
  } else if (a == 80 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "7590";
    document.getElementById("product").innerText = "7,590円/月";
  } else if (a == 81 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "8510";
    document.getElementById("product").innerText = "8,510円/月";
  } else if (a == 82 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "9530";
    document.getElementById("product").innerText = "9,530円/月";
  } else if (a == 83 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "10690";
    document.getElementById("product").innerText = "10,690円/月";
  } else if (a == 84 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "12000";
    document.getElementById("product").innerText = "12,000円/月";
  } else if (a == 85 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "13440";
    document.getElementById("product").innerText = "13,440円/月";
  } else if (a == 86 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "14970";
    document.getElementById("product").innerText = "14,970円/月";
  } else if (a == 87 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "16650";
    document.getElementById("product").innerText = "16,650円/月";
  } else if (a == 88 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "18500";
    document.getElementById("product").innerText = "18,500円/月";
  } else if (a == 89 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "20580";
    document.getElementById("product").innerText = "20,580円/月";
  } else if (a == 90 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "22930";
    document.getElementById("product").innerText = "22,930円/月";
  } else if (a == 91 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "25530";
    document.getElementById("product").innerText = "25,530円/月";
  } else if (a == 92 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "28520";
    document.getElementById("product").innerText = "28,520円/月";
  } else if (a == 93 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "31830";
    document.getElementById("product").innerText = "31,830円/月";
  } else if (a == 94 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "35150";
    document.getElementById("product").innerText = "35,150円/月";
  } else if (a == 95 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "38100";
    document.getElementById("product").innerText = "38,100円/月";
  } else if (a == 96 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "41410";
    document.getElementById("product").innerText = "41,410円/月";
  } else if (a == 97 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "44920";
    document.getElementById("product").innerText = "44,920円/月";
  } else if (a == 98 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "48670";
    document.getElementById("product").innerText = "48,670円/月";
  } else if (a == 99 && b == 1 && c == 1 && d == 1) {
    document.getElementById("premium").value = "52690";
    document.getElementById("product").innerText = "52,690円/月";
  } else if (a == 50 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "400";
    document.getElementById("product").innerText = "400円/月";
  } else if (a == 51 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "420";
    document.getElementById("product").innerText = "420円/月";
  } else if (a == 52 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "450";
    document.getElementById("product").innerText = "450円/月";
  } else if (a == 53 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "480";
    document.getElementById("product").innerText = "480円/月";
  } else if (a == 54 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "500";
    document.getElementById("product").innerText = "500円/月";
  } else if (a == 55 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "520";
    document.getElementById("product").innerText = "520円/月";
  } else if (a == 56 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "540";
    document.getElementById("product").innerText = "540円/月";
  } else if (a == 57 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "560";
    document.getElementById("product").innerText = "560円/月";
  } else if (a == 58 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "580";
    document.getElementById("product").innerText = "580円/月";
  } else if (a == 59 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "620";
    document.getElementById("product").innerText = "620円/月";
  } else if (a == 60 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "650";
    document.getElementById("product").innerText = "650円/月";
  } else if (a == 61 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "700";
    document.getElementById("product").innerText = "700円/月";
  } else if (a == 62 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "740";
    document.getElementById("product").innerText = "740円/月";
  } else if (a == 63 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "790";
    document.getElementById("product").innerText = "790円/月";
  } else if (a == 64 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "840";
    document.getElementById("product").innerText = "840円/月";
  } else if (a == 65 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "900";
    document.getElementById("product").innerText = "900円/月";
  } else if (a == 66 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "960";
    document.getElementById("product").innerText = "960円/月";
  } else if (a == 67 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "1030";
    document.getElementById("product").innerText = "1,030円/月";
  } else if (a == 68 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "1110";
    document.getElementById("product").innerText = "1,110円/月";
  } else if (a == 69 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "1200";
    document.getElementById("product").innerText = "1,200円/月";
  } else if (a == 70 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "1310";
    document.getElementById("product").innerText = "1,310円/月";
  } else if (a == 71 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "1430";
    document.getElementById("product").innerText = "1,430円/月";
  } else if (a == 72 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "1570";
    document.getElementById("product").innerText = "1,570円/月";
  } else if (a == 73 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "1710";
    document.getElementById("product").innerText = "1,710円/月";
  } else if (a == 74 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "1870";
    document.getElementById("product").innerText = "1,870円/月";
  } else if (a == 75 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "2060";
    document.getElementById("product").innerText = "2,060円/月";
  } else if (a == 76 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "2310";
    document.getElementById("product").innerText = "2,310円/月";
  } else if (a == 77 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "2620";
    document.getElementById("product").innerText = "2,620円/月";
  } else if (a == 78 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "2980";
    document.getElementById("product").innerText = "2,980円/月";
  } else if (a == 79 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "3390";
    document.getElementById("product").innerText = "3,390円/月";
  } else if (a == 80 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "3820";
    document.getElementById("product").innerText = "3,820円/月";
  } else if (a == 81 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "4320";
    document.getElementById("product").innerText = "4,320円/月";
  } else if (a == 82 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "4900";
    document.getElementById("product").innerText = "4,900円/月";
  } else if (a == 83 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "5590";
    document.getElementById("product").innerText = "5,590円/月";
  } else if (a == 84 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "6360";
    document.getElementById("product").innerText = "6,360円/月";
  } else if (a == 85 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "7220";
    document.getElementById("product").innerText = "7,220円/月";
  } else if (a == 86 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "8210";
    document.getElementById("product").innerText = "8,210円/月";
  } else if (a == 87 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "9350";
    document.getElementById("product").innerText = "9,350円/月";
  } else if (a == 88 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "10700";
    document.getElementById("product").innerText = "10,700円/月";
  } else if (a == 89 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "12210";
    document.getElementById("product").innerText = "12,210円/月";
  } else if (a == 90 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "13920";
    document.getElementById("product").innerText = "13,920円/月";
  } else if (a == 91 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "15870";
    document.getElementById("product").innerText = "15,870円/月";
  } else if (a == 92 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "18190";
    document.getElementById("product").innerText = "18,190円/月";
  } else if (a == 93 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "20820";
    document.getElementById("product").innerText = "20,820円/月";
  } else if (a == 94 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "23690";
    document.getElementById("product").innerText = "23,690円/月";
  } else if (a == 95 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "26870";
    document.getElementById("product").innerText = "26,870円/月";
  } else if (a == 96 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "29870";
    document.getElementById("product").innerText = "29,870円/月";
  } else if (a == 97 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "33000";
    document.getElementById("product").innerText = "33,000円/月";
  } else if (a == 98 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "36280";
    document.getElementById("product").innerText = "36,280円/月";
  } else if (a == 99 && b == 2 && c == 1 && d == 1) {
    document.getElementById("premium").value = "39710";
    document.getElementById("product").innerText = "39,710円/月";
  } else if (a == 50 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1160";
    document.getElementById("product").innerText = "1,160円/月";
  } else if (a == 51 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1240";
    document.getElementById("product").innerText = "1,240円/月";
  } else if (a == 52 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1340";
    document.getElementById("product").innerText = "1,340円/月";
  } else if (a == 53 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1420";
    document.getElementById("product").innerText = "1,420円/月";
  } else if (a == 54 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1540";
    document.getElementById("product").innerText = "1,540円/月";
  } else if (a == 55 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1660";
    document.getElementById("product").innerText = "1,660円/月";
  } else if (a == 56 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1780";
    document.getElementById("product").innerText = "1,780円/月";
  } else if (a == 57 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1900";
    document.getElementById("product").innerText = "1,900円/月";
  } else if (a == 58 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "2040";
    document.getElementById("product").innerText = "2,040円/月";
  } else if (a == 59 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "2180";
    document.getElementById("product").innerText = "2,180円/月";
  } else if (a == 60 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "2360";
    document.getElementById("product").innerText = "2,360円/月";
  } else if (a == 61 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "2600";
    document.getElementById("product").innerText = "2,600円/月";
  } else if (a == 62 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "2860";
    document.getElementById("product").innerText = "2,860円/月";
  } else if (a == 63 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "3120";
    document.getElementById("product").innerText = "3,120円/月";
  } else if (a == 64 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "3380";
    document.getElementById("product").innerText = "3,380円/月";
  } else if (a == 65 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "3700";
    document.getElementById("product").innerText = "3,700円/月";
  } else if (a == 66 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "4040";
    document.getElementById("product").innerText = "4,040円/月";
  } else if (a == 67 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "4380";
    document.getElementById("product").innerText = "4,380円/月";
  } else if (a == 68 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "4740";
    document.getElementById("product").innerText = "4,740円/月";
  } else if (a == 69 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "5140";
    document.getElementById("product").innerText = "5,140円/月";
  } else if (a == 70 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "5600";
    document.getElementById("product").innerText = "5,600円/月";
  } else if (a == 71 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "6120";
    document.getElementById("product").innerText = "6,120円/月";
  } else if (a == 72 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "6660";
    document.getElementById("product").innerText = "6,660円/月";
  } else if (a == 73 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "7220";
    document.getElementById("product").innerText = "7,220円/月";
  } else if (a == 74 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "7820";
    document.getElementById("product").innerText = "7,820円/月";
  } else if (a == 75 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "8600";
    document.getElementById("product").innerText = "8,600円/月";
  } else if (a == 76 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "9540";
    document.getElementById("product").innerText = "9,540円/月";
  } else if (a == 77 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "10680";
    document.getElementById("product").innerText = "10,680円/月";
  } else if (a == 78 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "12040";
    document.getElementById("product").innerText = "12,040円/月";
  } else if (a == 79 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "13600";
    document.getElementById("product").innerText = "13,600円/月";
  } else if (a == 80 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "15180";
    document.getElementById("product").innerText = "15,180円/月";
  } else if (a == 81 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "17020";
    document.getElementById("product").innerText = "17,020円/月";
  } else if (a == 82 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "19060";
    document.getElementById("product").innerText = "19,060円/月";
  } else if (a == 83 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "21380";
    document.getElementById("product").innerText = "21,380円/月";
  } else if (a == 84 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "24000";
    document.getElementById("product").innerText = "24,000円/月";
  } else if (a == 85 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "26880";
    document.getElementById("product").innerText = "26,880円/月";
  } else if (a == 86 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "29940";
    document.getElementById("product").innerText = "29,940円/月";
  } else if (a == 87 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "33300";
    document.getElementById("product").innerText = "33,300円/月";
  } else if (a == 88 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "37000";
    document.getElementById("product").innerText = "37,000円/月";
  } else if (a == 89 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "41160";
    document.getElementById("product").innerText = "41,160円/月";
  } else if (a == 90 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "45860";
    document.getElementById("product").innerText = "45,860円/月";
  } else if (a == 91 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "51060";
    document.getElementById("product").innerText = "51,060円/月";
  } else if (a == 92 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "57040";
    document.getElementById("product").innerText = "57,040円/月";
  } else if (a == 93 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "63660";
    document.getElementById("product").innerText = "63,660円/月";
  } else if (a == 94 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "70300";
    document.getElementById("product").innerText = "70,300円/月";
  } else if (a == 95 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "76200";
    document.getElementById("product").innerText = "76,200円/月";
  } else if (a == 96 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "82820";
    document.getElementById("product").innerText = "82,820円/月";
  } else if (a == 97 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "89840";
    document.getElementById("product").innerText = "89,840円/月";
  } else if (a == 98 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "97340";
    document.getElementById("product").innerText = "97,340円/月";
  } else if (a == 99 && b == 1 && c == 2 && d == 1) {
    document.getElementById("premium").value = "105380";
    document.getElementById("product").innerText = "105,380円/月";
  } else if (a == 50 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "800";
    document.getElementById("product").innerText = "800円/月";
  } else if (a == 51 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "840";
    document.getElementById("product").innerText = "840円/月";
  } else if (a == 52 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "900";
    document.getElementById("product").innerText = "900円/月";
  } else if (a == 53 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "960";
    document.getElementById("product").innerText = "960円/月";
  } else if (a == 54 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1000";
    document.getElementById("product").innerText = "1,000円/月";
  } else if (a == 55 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1040";
    document.getElementById("product").innerText = "1,040円/月";
  } else if (a == 56 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1080";
    document.getElementById("product").innerText = "1,080円/月";
  } else if (a == 57 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1120";
    document.getElementById("product").innerText = "1,120円/月";
  } else if (a == 58 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1160";
    document.getElementById("product").innerText = "1,160円/月";
  } else if (a == 59 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1240";
    document.getElementById("product").innerText = "1,240円/月";
  } else if (a == 60 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1300";
    document.getElementById("product").innerText = "1,300円/月";
  } else if (a == 61 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1400";
    document.getElementById("product").innerText = "1,400円/月";
  } else if (a == 62 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1480";
    document.getElementById("product").innerText = "1,480円/月";
  } else if (a == 63 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1580";
    document.getElementById("product").innerText = "1,580円/月";
  } else if (a == 64 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1680";
    document.getElementById("product").innerText = "1,680円/月";
  } else if (a == 65 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1800";
    document.getElementById("product").innerText = "1,800円/月";
  } else if (a == 66 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "1920";
    document.getElementById("product").innerText = "1,920円/月";
  } else if (a == 67 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "2060";
    document.getElementById("product").innerText = "2,060円/月";
  } else if (a == 68 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "2220";
    document.getElementById("product").innerText = "2,220円/月";
  } else if (a == 69 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "2400";
    document.getElementById("product").innerText = "2,400円/月";
  } else if (a == 70 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "2620";
    document.getElementById("product").innerText = "2,620円/月";
  } else if (a == 71 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "2860";
    document.getElementById("product").innerText = "2,860円/月";
  } else if (a == 72 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "3140";
    document.getElementById("product").innerText = "3,140円/月";
  } else if (a == 73 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "3420";
    document.getElementById("product").innerText = "3,420円/月";
  } else if (a == 74 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "3740";
    document.getElementById("product").innerText = "3,740円/月";
  } else if (a == 75 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "4120";
    document.getElementById("product").innerText = "4,120円/月";
  } else if (a == 76 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "4620";
    document.getElementById("product").innerText = "4,620円/月";
  } else if (a == 77 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "5240";
    document.getElementById("product").innerText = "5,240円/月";
  } else if (a == 78 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "5960";
    document.getElementById("product").innerText = "5,960円/月";
  } else if (a == 79 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "6780";
    document.getElementById("product").innerText = "6,780円/月";
  } else if (a == 80 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "7640";
    document.getElementById("product").innerText = "7,640円/月";
  } else if (a == 81 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "8640";
    document.getElementById("product").innerText = "8,640円/月";
  } else if (a == 82 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "9800";
    document.getElementById("product").innerText = "9,800円/月";
  } else if (a == 83 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "11180";
    document.getElementById("product").innerText = "11,180円/月";
  } else if (a == 84 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "12720";
    document.getElementById("product").innerText = "12,720円/月";
  } else if (a == 85 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "14440";
    document.getElementById("product").innerText = "14,440円/月";
  } else if (a == 86 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "16420";
    document.getElementById("product").innerText = "16,420円/月";
  } else if (a == 87 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "18700";
    document.getElementById("product").innerText = "18,700円/月";
  } else if (a == 88 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "21400";
    document.getElementById("product").innerText = "21,400円/月";
  } else if (a == 89 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "24420";
    document.getElementById("product").innerText = "24,420円/月";
  } else if (a == 90 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "27840";
    document.getElementById("product").innerText = "27,840円/月";
  } else if (a == 91 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "31740";
    document.getElementById("product").innerText = "31,740円/月";
  } else if (a == 92 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "36380";
    document.getElementById("product").innerText = "36,380円/月";
  } else if (a == 93 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "41640";
    document.getElementById("product").innerText = "41,640円/月";
  } else if (a == 94 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "47380";
    document.getElementById("product").innerText = "47,380円/月";
  } else if (a == 95 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "53740";
    document.getElementById("product").innerText = "53,740円/月";
  } else if (a == 96 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "59740";
    document.getElementById("product").innerText = "59,740円/月";
  } else if (a == 97 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "66000";
    document.getElementById("product").innerText = "66,000円/月";
  } else if (a == 98 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "72560";
    document.getElementById("product").innerText = "72,560円/月";
  } else if (a == 99 && b == 2 && c == 2 && d == 1) {
    document.getElementById("premium").value = "79420";
    document.getElementById("product").innerText = "79,420円/月";
  } else if (a == 50 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "1740";
    document.getElementById("product").innerText = "1,740円/月";
  } else if (a == 51 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "1860";
    document.getElementById("product").innerText = "1,860円/月";
  } else if (a == 52 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "2010";
    document.getElementById("product").innerText = "2,010円/月";
  } else if (a == 53 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "2130";
    document.getElementById("product").innerText = "2,130円/月";
  } else if (a == 54 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "2310";
    document.getElementById("product").innerText = "2,310円/月";
  } else if (a == 55 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "2490";
    document.getElementById("product").innerText = "2,490円/月";
  } else if (a == 56 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "2670";
    document.getElementById("product").innerText = "2,670円/月";
  } else if (a == 57 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "2850";
    document.getElementById("product").innerText = "2,850円/月";
  } else if (a == 58 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "3060";
    document.getElementById("product").innerText = "3,060円/月";
  } else if (a == 59 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "3270";
    document.getElementById("product").innerText = "3,270円/月";
  } else if (a == 60 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "3540";
    document.getElementById("product").innerText = "3,540円/月";
  } else if (a == 61 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "3900";
    document.getElementById("product").innerText = "3,900円/月";
  } else if (a == 62 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "4290";
    document.getElementById("product").innerText = "4,290円/月";
  } else if (a == 63 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "4680";
    document.getElementById("product").innerText = "4,680円/月";
  } else if (a == 64 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "5070";
    document.getElementById("product").innerText = "5,070円/月";
  } else if (a == 65 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "5550";
    document.getElementById("product").innerText = "5,550円/月";
  } else if (a == 66 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "6060";
    document.getElementById("product").innerText = "6,060円/月";
  } else if (a == 67 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "6570";
    document.getElementById("product").innerText = "6,570円/月";
  } else if (a == 68 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "7110";
    document.getElementById("product").innerText = "7,110円/月";
  } else if (a == 69 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "7710";
    document.getElementById("product").innerText = "7,710円/月";
  } else if (a == 70 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "8400";
    document.getElementById("product").innerText = "8,400円/月";
  } else if (a == 71 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "9180";
    document.getElementById("product").innerText = "9,180円/月";
  } else if (a == 72 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "9990";
    document.getElementById("product").innerText = "9,990円/月";
  } else if (a == 73 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "10830";
    document.getElementById("product").innerText = "10,830円/月";
  } else if (a == 74 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "11730";
    document.getElementById("product").innerText = "11,730円/月";
  } else if (a == 75 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "12900";
    document.getElementById("product").innerText = "12,900円/月";
  } else if (a == 76 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "14310";
    document.getElementById("product").innerText = "14,310円/月";
  } else if (a == 77 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "16020";
    document.getElementById("product").innerText = "16,020円/月";
  } else if (a == 78 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "18060";
    document.getElementById("product").innerText = "18,060円/月";
  } else if (a == 79 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "20400";
    document.getElementById("product").innerText = "20,400円/月";
  } else if (a == 80 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "22770";
    document.getElementById("product").innerText = "22,770円/月";
  } else if (a == 81 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "25530";
    document.getElementById("product").innerText = "25,530円/月";
  } else if (a == 82 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "28590";
    document.getElementById("product").innerText = "28,590円/月";
  } else if (a == 83 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "32070";
    document.getElementById("product").innerText = "32,070円/月";
  } else if (a == 84 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "36000";
    document.getElementById("product").innerText = "36,000円/月";
  } else if (a == 85 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "40320";
    document.getElementById("product").innerText = "40,320円/月";
  } else if (a == 86 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "44910";
    document.getElementById("product").innerText = "44,910円/月";
  } else if (a == 87 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "49950";
    document.getElementById("product").innerText = "49,950円/月";
  } else if (a == 88 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "55500";
    document.getElementById("product").innerText = "55,500円/月";
  } else if (a == 89 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "61740";
    document.getElementById("product").innerText = "61,740円/月";
  } else if (a == 90 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "68790";
    document.getElementById("product").innerText = "68,790円/月";
  } else if (a == 91 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "76590";
    document.getElementById("product").innerText = "76,590円/月";
  } else if (a == 92 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "85560";
    document.getElementById("product").innerText = "85,560円/月";
  } else if (a == 93 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "95490";
    document.getElementById("product").innerText = "95,490円/月";
  } else if (a == 94 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "105450";
    document.getElementById("product").innerText = "105,450円/月";
  } else if (a == 95 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "114300";
    document.getElementById("product").innerText = "114,300円/月";
  } else if (a == 96 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "124230";
    document.getElementById("product").innerText = "124,230円/月";
  } else if (a == 97 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "134760";
    document.getElementById("product").innerText = "134,760円/月";
  } else if (a == 98 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "146010";
    document.getElementById("product").innerText = "146,010円/月";
  } else if (a == 99 && b == 1 && c == 3 && d == 1) {
    document.getElementById("premium").value = "158070";
    document.getElementById("product").innerText = "158,070円/月";
  } else if (a == 50 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "1200";
    document.getElementById("product").innerText = "1,200円/月";
  } else if (a == 51 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "1260";
    document.getElementById("product").innerText = "1,260円/月";
  } else if (a == 52 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "1350";
    document.getElementById("product").innerText = "1,350円/月";
  } else if (a == 53 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "1440";
    document.getElementById("product").innerText = "1,440円/月";
  } else if (a == 54 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "1500";
    document.getElementById("product").innerText = "1,500円/月";
  } else if (a == 55 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "1560";
    document.getElementById("product").innerText = "1,560円/月";
  } else if (a == 56 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "1620";
    document.getElementById("product").innerText = "1,620円/月";
  } else if (a == 57 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "1680";
    document.getElementById("product").innerText = "1,680円/月";
  } else if (a == 58 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "1740";
    document.getElementById("product").innerText = "1,740円/月";
  } else if (a == 59 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "1860";
    document.getElementById("product").innerText = "1,860円/月";
  } else if (a == 60 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "1950";
    document.getElementById("product").innerText = "1,950円/月";
  } else if (a == 61 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "2100";
    document.getElementById("product").innerText = "2,100円/月";
  } else if (a == 62 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "2220";
    document.getElementById("product").innerText = "2,220円/月";
  } else if (a == 63 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "2370";
    document.getElementById("product").innerText = "2,370円/月";
  } else if (a == 64 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "2520";
    document.getElementById("product").innerText = "2,520円/月";
  } else if (a == 65 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "2700";
    document.getElementById("product").innerText = "2,700円/月";
  } else if (a == 66 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "2880";
    document.getElementById("product").innerText = "2,880円/月";
  } else if (a == 67 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "3090";
    document.getElementById("product").innerText = "3,090円/月";
  } else if (a == 68 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "3330";
    document.getElementById("product").innerText = "3,330円/月";
  } else if (a == 69 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "3600";
    document.getElementById("product").innerText = "3,600円/月";
  } else if (a == 70 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "3930";
    document.getElementById("product").innerText = "3,930円/月";
  } else if (a == 71 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "4290";
    document.getElementById("product").innerText = "4,290円/月";
  } else if (a == 72 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "4710";
    document.getElementById("product").innerText = "4,710円/月";
  } else if (a == 73 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "5130";
    document.getElementById("product").innerText = "5,130円/月";
  } else if (a == 74 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "5610";
    document.getElementById("product").innerText = "5,610円/月";
  } else if (a == 75 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "6180";
    document.getElementById("product").innerText = "6,180円/月";
  } else if (a == 76 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "6930";
    document.getElementById("product").innerText = "6,930円/月";
  } else if (a == 77 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "7860";
    document.getElementById("product").innerText = "7,860円/月";
  } else if (a == 78 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "8940";
    document.getElementById("product").innerText = "8,940円/月";
  } else if (a == 79 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "10170";
    document.getElementById("product").innerText = "10,170円/月";
  } else if (a == 80 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "11460";
    document.getElementById("product").innerText = "11,460円/月";
  } else if (a == 81 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "12960";
    document.getElementById("product").innerText = "12,960円/月";
  } else if (a == 82 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "14700";
    document.getElementById("product").innerText = "14,700円/月";
  } else if (a == 83 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "16770";
    document.getElementById("product").innerText = "16,770円/月";
  } else if (a == 84 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "19080";
    document.getElementById("product").innerText = "19,080円/月";
  } else if (a == 85 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "21660";
    document.getElementById("product").innerText = "21,660円/月";
  } else if (a == 86 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "24630";
    document.getElementById("product").innerText = "24,630円/月";
  } else if (a == 87 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "28050";
    document.getElementById("product").innerText = "28,050円/月";
  } else if (a == 88 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "32100";
    document.getElementById("product").innerText = "32,100円/月";
  } else if (a == 89 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "36630";
    document.getElementById("product").innerText = "36,630円/月";
  } else if (a == 90 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "41760";
    document.getElementById("product").innerText = "41,760円/月";
  } else if (a == 91 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "47610";
    document.getElementById("product").innerText = "47,610円/月";
  } else if (a == 92 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "54570";
    document.getElementById("product").innerText = "54,570円/月";
  } else if (a == 93 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "62460";
    document.getElementById("product").innerText = "62,460円/月";
  } else if (a == 94 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "71070";
    document.getElementById("product").innerText = "71,070円/月";
  } else if (a == 95 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "80610";
    document.getElementById("product").innerText = "80,610円/月";
  } else if (a == 96 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "89610";
    document.getElementById("product").innerText = "89,610円/月";
  } else if (a == 97 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "99000";
    document.getElementById("product").innerText = "99,000円/月";
  } else if (a == 98 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "108840";
    document.getElementById("product").innerText = "108,840円/月";
  } else if (a == 99 && b == 2 && c == 3 && d == 1) {
    document.getElementById("premium").value = "119130";
    document.getElementById("product").innerText = "119,130円/月";
  } else if (a == 50 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "6810";
    document.getElementById("product").innerText = "6,810円/年";
  } else if (a == 51 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "7270";
    document.getElementById("product").innerText = "7,270円/年";
  } else if (a == 52 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "7800";
    document.getElementById("product").innerText = "7,800円/年";
  } else if (a == 53 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "8340";
    document.getElementById("product").innerText = "8,340円/年";
  } else if (a == 54 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "8970";
    document.getElementById("product").innerText = "8,970円/年";
  } else if (a == 55 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "9680";
    document.getElementById("product").innerText = "9,680円/年";
  } else if (a == 56 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "10420";
    document.getElementById("product").innerText = "10,420円/年";
  } else if (a == 57 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "11150";
    document.getElementById("product").innerText = "11,150円/年";
  } else if (a == 58 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "11890";
    document.getElementById("product").innerText = "11,890円/年";
  } else if (a == 59 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "12750";
    document.getElementById("product").innerText = "12,750円/年";
  } else if (a == 60 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "13780";
    document.getElementById("product").innerText = "13,780円/年";
  } else if (a == 61 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "15140";
    document.getElementById("product").innerText = "15,140円/年";
  } else if (a == 62 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "16650";
    document.getElementById("product").innerText = "16,650円/年";
  } else if (a == 63 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "18190";
    document.getElementById("product").innerText = "18,190円/年";
  } else if (a == 64 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "19720";
    document.getElementById("product").innerText = "19,720円/年";
  } else if (a == 65 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "21540";
    document.getElementById("product").innerText = "21,540円/年";
  } else if (a == 66 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "23480";
    document.getElementById("product").innerText = "23,480円/年";
  } else if (a == 67 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "25460";
    document.getElementById("product").innerText = "25,460円/年";
  } else if (a == 68 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "27630";
    document.getElementById("product").innerText = "27,630円/年";
  } else if (a == 69 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "29930";
    document.getElementById("product").innerText = "29,930円/年";
  } else if (a == 70 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "32530";
    document.getElementById("product").innerText = "32,530円/年";
  } else if (a == 71 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "35490";
    document.getElementById("product").innerText = "35,490円/年";
  } else if (a == 72 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "38670";
    document.getElementById("product").innerText = "38,670円/年";
  } else if (a == 73 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "41790";
    document.getElementById("product").innerText = "41,790円/年";
  } else if (a == 74 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "45290";
    document.getElementById("product").innerText = "45,290円/年";
  } else if (a == 75 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "49650";
    document.getElementById("product").innerText = "49,650円/年";
  } else if (a == 76 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "55000";
    document.getElementById("product").innerText = "55,000円/年";
  } else if (a == 77 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "61480";
    document.getElementById("product").innerText = "61,480円/年";
  } else if (a == 78 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "69170";
    document.getElementById("product").innerText = "69,170円/年";
  } else if (a == 79 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "77900";
    document.getElementById("product").innerText = "77,900円/年";
  } else if (a == 80 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "86720";
    document.getElementById("product").innerText = "86,720円/年";
  } else if (a == 81 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "96800";
    document.getElementById("product").innerText = "96,800円/年";
  } else if (a == 82 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "108070";
    document.getElementById("product").innerText = "108,070円/年";
  } else if (a == 83 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "120650";
    document.getElementById("product").innerText = "120,650円/年";
  } else if (a == 84 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "134720";
    document.getElementById("product").innerText = "134,720円/年";
  } else if (a == 85 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "150060";
    document.getElementById("product").innerText = "150,060円/年";
  } else if (a == 86 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "166120";
    document.getElementById("product").innerText = "166,120円/年";
  } else if (a == 87 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "183430";
    document.getElementById("product").innerText = "183,430円/年";
  } else if (a == 88 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "202370";
    document.getElementById("product").innerText = "202,370円/年";
  } else if (a == 89 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "223170";
    document.getElementById("product").innerText = "223,170円/年";
  } else if (a == 90 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "246320";
    document.getElementById("product").innerText = "246,320円/年";
  } else if (a == 91 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "271420";
    document.getElementById("product").innerText = "271,420円/年";
  } else if (a == 92 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "299580";
    document.getElementById("product").innerText = "299,580円/年";
  } else if (a == 93 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "329970";
    document.getElementById("product").innerText = "329,970円/年";
  } else if (a == 94 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "359510";
    document.getElementById("product").innerText = "359,510円/年";
  } else if (a == 95 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "385050";
    document.getElementById("product").innerText = "385,050円/年";
  } else if (a == 96 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "412890";
    document.getElementById("product").innerText = "412,890円/年";
  } else if (a == 97 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "441580";
    document.getElementById("product").innerText = "441,580円/年";
  } else if (a == 98 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "471240";
    document.getElementById("product").innerText = "471,240円/年";
  } else if (a == 99 && b == 1 && c == 1 && d == 2) {
    document.getElementById("premium").value = "501950";
    document.getElementById("product").innerText = "501,950円/年";
  } else if (a == 50 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "4690";
    document.getElementById("product").innerText = "4,690円/年";
  } else if (a == 51 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "4980";
    document.getElementById("product").innerText = "4,980円/年";
  } else if (a == 52 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "5280";
    document.getElementById("product").innerText = "5,280円/年";
  } else if (a == 53 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "5580";
    document.getElementById("product").innerText = "5,580円/年";
  } else if (a == 54 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "5860";
    document.getElementById("product").innerText = "5,860円/年";
  } else if (a == 55 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "6120";
    document.getElementById("product").innerText = "6,120円/年";
  } else if (a == 56 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "6340";
    document.getElementById("product").innerText = "6,340円/年";
  } else if (a == 57 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "6570";
    document.getElementById("product").innerText = "6,570円/年";
  } else if (a == 58 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "6820";
    document.getElementById("product").innerText = "6,820円/年";
  } else if (a == 59 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "7200";
    document.getElementById("product").innerText = "7,200円/年";
  } else if (a == 60 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "7650";
    document.getElementById("product").innerText = "7,650円/年";
  } else if (a == 61 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "8180";
    document.getElementById("product").innerText = "8,180円/年";
  } else if (a == 62 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "8700";
    document.getElementById("product").innerText = "8,700円/年";
  } else if (a == 63 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "9230";
    document.getElementById("product").innerText = "9,230円/年";
  } else if (a == 64 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "9800";
    document.getElementById("product").innerText = "9,800円/年";
  } else if (a == 65 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "10490";
    document.getElementById("product").innerText = "10,490円/年";
  } else if (a == 66 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "11270";
    document.getElementById("product").innerText = "11,270円/年";
  } else if (a == 67 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "12080";
    document.getElementById("product").innerText = "12,080円/年";
  } else if (a == 68 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "13000";
    document.getElementById("product").innerText = "13,000円/年";
  } else if (a == 69 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "14050";
    document.getElementById("product").innerText = "14,050円/年";
  } else if (a == 70 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "15290";
    document.getElementById("product").innerText = "15,290円/年";
  } else if (a == 71 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "16710";
    document.getElementById("product").innerText = "16,710円/年";
  } else if (a == 72 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "18310";
    document.getElementById("product").innerText = "18,310円/年";
  } else if (a == 73 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "19930";
    document.getElementById("product").innerText = "19,930円/年";
  } else if (a == 74 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "21760";
    document.getElementById("product").innerText = "21,760円/年";
  } else if (a == 75 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "24050";
    document.getElementById("product").innerText = "24,050円/年";
  } else if (a == 76 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "26940";
    document.getElementById("product").innerText = "26,940円/年";
  } else if (a == 77 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "30450";
    document.getElementById("product").innerText = "30,450円/年";
  } else if (a == 78 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "34560";
    document.getElementById("product").innerText = "34,560円/年";
  } else if (a == 79 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "39320";
    document.getElementById("product").innerText = "39,320円/年";
  } else if (a == 80 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "44220";
    document.getElementById("product").innerText = "44,220円/年";
  } else if (a == 81 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "49860";
    document.getElementById("product").innerText = "49,860円/年";
  } else if (a == 82 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "56530";
    document.getElementById("product").innerText = "56,530円/年";
  } else if (a == 83 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "64240";
    document.getElementById("product").innerText = "64,240円/年";
  } else if (a == 84 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "72870";
    document.getElementById("product").innerText = "72,870円/年";
  } else if (a == 85 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "82480";
    document.getElementById("product").innerText = "82,480円/年";
  } else if (a == 86 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "93400";
    document.getElementById("product").innerText = "93,400円/年";
  } else if (a == 87 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "105930";
    document.getElementById("product").innerText = "105,930円/年";
  } else if (a == 88 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "120450";
    document.getElementById("product").innerText = "120,450円/年";
  } else if (a == 89 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "136650";
    document.getElementById("product").innerText = "136,650円/年";
  } else if (a == 90 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "154710";
    document.getElementById("product").innerText = "154,710円/年";
  } else if (a == 91 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "174960";
    document.getElementById("product").innerText = "174,960円/年";
  } else if (a == 92 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "198620";
    document.getElementById("product").innerText = "198,620円/年";
  } else if (a == 93 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "224930";
    document.getElementById("product").innerText = "224,930円/年";
  } else if (a == 94 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "252940";
    document.getElementById("product").innerText = "252,940円/年";
  } else if (a == 95 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "283170";
    document.getElementById("product").innerText = "283,170円/年";
  } else if (a == 96 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "310860";
    document.getElementById("product").innerText = "310,860円/年";
  } else if (a == 97 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "339010";
    document.getElementById("product").innerText = "339,010円/年";
  } else if (a == 98 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "367620";
    document.getElementById("product").innerText = "367,620円/年";
  } else if (a == 99 && b == 2 && c == 1 && d == 2) {
    document.getElementById("premium").value = "396750";
    document.getElementById("product").innerText = "396,750円/年";
  } else if (a == 50 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "13620";
    document.getElementById("product").innerText = "13,620円/年";
  } else if (a == 51 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "14540";
    document.getElementById("product").innerText = "14,540円/年";
  } else if (a == 52 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "15600";
    document.getElementById("product").innerText = "15,600円/年";
  } else if (a == 53 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "16680";
    document.getElementById("product").innerText = "16,680円/年";
  } else if (a == 54 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "17940";
    document.getElementById("product").innerText = "17,940円/年";
  } else if (a == 55 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "19360";
    document.getElementById("product").innerText = "19,360円/年";
  } else if (a == 56 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "20840";
    document.getElementById("product").innerText = "20,840円/年";
  } else if (a == 57 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "22300";
    document.getElementById("product").innerText = "22,300円/年";
  } else if (a == 58 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "23780";
    document.getElementById("product").innerText = "23,780円/年";
  } else if (a == 59 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "25500";
    document.getElementById("product").innerText = "25,500円/年";
  } else if (a == 60 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "27560";
    document.getElementById("product").innerText = "27,560円/年";
  } else if (a == 61 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "30280";
    document.getElementById("product").innerText = "30,280円/年";
  } else if (a == 62 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "33300";
    document.getElementById("product").innerText = "33,300円/年";
  } else if (a == 63 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "36380";
    document.getElementById("product").innerText = "36,380円/年";
  } else if (a == 64 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "39440";
    document.getElementById("product").innerText = "39,440円/年";
  } else if (a == 65 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "43080";
    document.getElementById("product").innerText = "43,080円/年";
  } else if (a == 66 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "46960";
    document.getElementById("product").innerText = "46,960円/年";
  } else if (a == 67 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "50920";
    document.getElementById("product").innerText = "50,920円/年";
  } else if (a == 68 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "55260";
    document.getElementById("product").innerText = "55,260円/年";
  } else if (a == 69 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "59860";
    document.getElementById("product").innerText = "59,860円/年";
  } else if (a == 70 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "65060";
    document.getElementById("product").innerText = "65,060円/年";
  } else if (a == 71 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "70980";
    document.getElementById("product").innerText = "70,980円/年";
  } else if (a == 72 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "77340";
    document.getElementById("product").innerText = "77,340円/年";
  } else if (a == 73 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "83580";
    document.getElementById("product").innerText = "83,580円/年";
  } else if (a == 74 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "90580";
    document.getElementById("product").innerText = "90,580円/年";
  } else if (a == 75 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "99300";
    document.getElementById("product").innerText = "99,300円/年";
  } else if (a == 76 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "110000";
    document.getElementById("product").innerText = "110,000円/年";
  } else if (a == 77 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "122960";
    document.getElementById("product").innerText = "122,960円/年";
  } else if (a == 78 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "138340";
    document.getElementById("product").innerText = "138,340円/年";
  } else if (a == 79 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "155800";
    document.getElementById("product").innerText = "155,800円/年";
  } else if (a == 80 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "173440";
    document.getElementById("product").innerText = "173,440円/年";
  } else if (a == 81 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "193600";
    document.getElementById("product").innerText = "193,600円/年";
  } else if (a == 82 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "216140";
    document.getElementById("product").innerText = "216,140円/年";
  } else if (a == 83 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "241300";
    document.getElementById("product").innerText = "241,300円/年";
  } else if (a == 84 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "269440";
    document.getElementById("product").innerText = "269,440円/年";
  } else if (a == 85 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "300120";
    document.getElementById("product").innerText = "300,120円/年";
  } else if (a == 86 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "332240";
    document.getElementById("product").innerText = "332,240円/年";
  } else if (a == 87 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "366860";
    document.getElementById("product").innerText = "366,860円/年";
  } else if (a == 88 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "404740";
    document.getElementById("product").innerText = "404,740円/年";
  } else if (a == 89 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "446340";
    document.getElementById("product").innerText = "446,340円/年";
  } else if (a == 90 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "492640";
    document.getElementById("product").innerText = "492,640円/年";
  } else if (a == 91 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "542840";
    document.getElementById("product").innerText = "542,840円/年";
  } else if (a == 92 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "599160";
    document.getElementById("product").innerText = "599,160円/年";
  } else if (a == 93 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "659940";
    document.getElementById("product").innerText = "659,940円/年";
  } else if (a == 94 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "719020";
    document.getElementById("product").innerText = "719,020円/年";
  } else if (a == 95 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "770100";
    document.getElementById("product").innerText = "770,100円/年";
  } else if (a == 96 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "825780";
    document.getElementById("product").innerText = "825,780円/年";
  } else if (a == 97 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "883160";
    document.getElementById("product").innerText = "883,160円/年";
  } else if (a == 98 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "942480";
    document.getElementById("product").innerText = "942,480円/年";
  } else if (a == 99 && b == 1 && c == 2 && d == 2) {
    document.getElementById("premium").value = "1003900";
    document.getElementById("product").innerText = "1,003,900円/年";
  } else if (a == 50 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "9380";
    document.getElementById("product").innerText = "9,380円/年";
  } else if (a == 51 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "9960";
    document.getElementById("product").innerText = "9,960円/年";
  } else if (a == 52 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "10560";
    document.getElementById("product").innerText = "10,560円/年";
  } else if (a == 53 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "11160";
    document.getElementById("product").innerText = "11,160円/年";
  } else if (a == 54 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "11720";
    document.getElementById("product").innerText = "11,720円/年";
  } else if (a == 55 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "12240";
    document.getElementById("product").innerText = "12,240円/年";
  } else if (a == 56 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "12680";
    document.getElementById("product").innerText = "12,680円/年";
  } else if (a == 57 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "13140";
    document.getElementById("product").innerText = "13,140円/年";
  } else if (a == 58 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "13640";
    document.getElementById("product").innerText = "13,640円/年";
  } else if (a == 59 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "14400";
    document.getElementById("product").innerText = "14,400円/年";
  } else if (a == 60 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "15300";
    document.getElementById("product").innerText = "15,300円/年";
  } else if (a == 61 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "16360";
    document.getElementById("product").innerText = "16,360円/年";
  } else if (a == 62 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "17400";
    document.getElementById("product").innerText = "17,400円/年";
  } else if (a == 63 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "18460";
    document.getElementById("product").innerText = "18,460円/年";
  } else if (a == 64 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "19600";
    document.getElementById("product").innerText = "19,600円/年";
  } else if (a == 65 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "20980";
    document.getElementById("product").innerText = "20,980円/年";
  } else if (a == 66 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "22540";
    document.getElementById("product").innerText = "22,540円/年";
  } else if (a == 67 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "24160";
    document.getElementById("product").innerText = "24,160円/年";
  } else if (a == 68 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "26000";
    document.getElementById("product").innerText = "26,000円/年";
  } else if (a == 69 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "28100";
    document.getElementById("product").innerText = "28,100円/年";
  } else if (a == 70 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "30580";
    document.getElementById("product").innerText = "30,580円/年";
  } else if (a == 71 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "33420";
    document.getElementById("product").innerText = "33,420円/年";
  } else if (a == 72 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "36620";
    document.getElementById("product").innerText = "36,620円/年";
  } else if (a == 73 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "39860";
    document.getElementById("product").innerText = "39,860円/年";
  } else if (a == 74 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "43520";
    document.getElementById("product").innerText = "43,520円/年";
  } else if (a == 75 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "48100";
    document.getElementById("product").innerText = "48,100円/年";
  } else if (a == 76 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "53880";
    document.getElementById("product").innerText = "53,880円/年";
  } else if (a == 77 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "60900";
    document.getElementById("product").innerText = "60,900円/年";
  } else if (a == 78 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "69120";
    document.getElementById("product").innerText = "69,120円/年";
  } else if (a == 79 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "78640";
    document.getElementById("product").innerText = "78,640円/年";
  } else if (a == 80 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "88440";
    document.getElementById("product").innerText = "88,440円/年";
  } else if (a == 81 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "99720";
    document.getElementById("product").innerText = "99,720円/年";
  } else if (a == 82 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "113060";
    document.getElementById("product").innerText = "113,060円/年";
  } else if (a == 83 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "128480";
    document.getElementById("product").innerText = "128,480円/年";
  } else if (a == 84 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "145740";
    document.getElementById("product").innerText = "145,740円/年";
  } else if (a == 85 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "164960";
    document.getElementById("product").innerText = "164,960円/年";
  } else if (a == 86 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "186800";
    document.getElementById("product").innerText = "186,800円/年";
  } else if (a == 87 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "211860";
    document.getElementById("product").innerText = "211,860円/年";
  } else if (a == 88 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "240900";
    document.getElementById("product").innerText = "240,900円/年";
  } else if (a == 89 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "273300";
    document.getElementById("product").innerText = "273,300円/年";
  } else if (a == 90 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "309420";
    document.getElementById("product").innerText = "309,420円/年";
  } else if (a == 91 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "349920";
    document.getElementById("product").innerText = "349,920円/年";
  } else if (a == 92 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "397240";
    document.getElementById("product").innerText = "397,240円/年";
  } else if (a == 93 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "449860";
    document.getElementById("product").innerText = "449,860円/年";
  } else if (a == 94 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "505880";
    document.getElementById("product").innerText = "505,880円/年";
  } else if (a == 95 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "566340";
    document.getElementById("product").innerText = "566,340円/年";
  } else if (a == 96 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "621720";
    document.getElementById("product").innerText = "621,720円/年";
  } else if (a == 97 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "678020";
    document.getElementById("product").innerText = "678,020円/年";
  } else if (a == 98 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "735240";
    document.getElementById("product").innerText = "735,240円/年";
  } else if (a == 99 && b == 2 && c == 2 && d == 2) {
    document.getElementById("premium").value = "793500";
    document.getElementById("product").innerText = "793,500円/年";
  } else if (a == 50 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "20430";
    document.getElementById("product").innerText = "20,430円/年";
  } else if (a == 51 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "21810";
    document.getElementById("product").innerText = "21,810円/年";
  } else if (a == 52 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "23400";
    document.getElementById("product").innerText = "23,400円/年";
  } else if (a == 53 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "25020";
    document.getElementById("product").innerText = "25,020円/年";
  } else if (a == 54 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "26910";
    document.getElementById("product").innerText = "26,910円/年";
  } else if (a == 55 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "29040";
    document.getElementById("product").innerText = "29,040円/年";
  } else if (a == 56 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "31260";
    document.getElementById("product").innerText = "31,260円/年";
  } else if (a == 57 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "33450";
    document.getElementById("product").innerText = "33,450円/年";
  } else if (a == 58 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "35670";
    document.getElementById("product").innerText = "35,670円/年";
  } else if (a == 59 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "38250";
    document.getElementById("product").innerText = "38,250円/年";
  } else if (a == 60 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "41340";
    document.getElementById("product").innerText = "41,340円/年";
  } else if (a == 61 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "45420";
    document.getElementById("product").innerText = "45,420円/年";
  } else if (a == 62 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "49950";
    document.getElementById("product").innerText = "49,950円/年";
  } else if (a == 63 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "54570";
    document.getElementById("product").innerText = "54,570円/年";
  } else if (a == 64 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "59160";
    document.getElementById("product").innerText = "59,160円/年";
  } else if (a == 65 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "64620";
    document.getElementById("product").innerText = "64,620円/年";
  } else if (a == 66 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "70440";
    document.getElementById("product").innerText = "70,440円/年";
  } else if (a == 67 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "76380";
    document.getElementById("product").innerText = "76,380円/年";
  } else if (a == 68 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "82890";
    document.getElementById("product").innerText = "82,890円/年";
  } else if (a == 69 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "89790";
    document.getElementById("product").innerText = "89,790円/年";
  } else if (a == 70 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "97590";
    document.getElementById("product").innerText = "97,590円/年";
  } else if (a == 71 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "106470";
    document.getElementById("product").innerText = "106,470円/年";
  } else if (a == 72 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "116010";
    document.getElementById("product").innerText = "116,010円/年";
  } else if (a == 73 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "125370";
    document.getElementById("product").innerText = "125,370円/年";
  } else if (a == 74 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "135870";
    document.getElementById("product").innerText = "135,870円/年";
  } else if (a == 75 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "148950";
    document.getElementById("product").innerText = "148,950円/年";
  } else if (a == 76 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "165000";
    document.getElementById("product").innerText = "165,000円/年";
  } else if (a == 77 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "184440";
    document.getElementById("product").innerText = "184,440円/年";
  } else if (a == 78 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "207510";
    document.getElementById("product").innerText = "207,510円/年";
  } else if (a == 79 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "233700";
    document.getElementById("product").innerText = "233,700円/年";
  } else if (a == 80 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "260160";
    document.getElementById("product").innerText = "260,160円/年";
  } else if (a == 81 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "290400";
    document.getElementById("product").innerText = "290,400円/年";
  } else if (a == 82 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "324210";
    document.getElementById("product").innerText = "324,210円/年";
  } else if (a == 83 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "361950";
    document.getElementById("product").innerText = "361,950円/年";
  } else if (a == 84 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "404160";
    document.getElementById("product").innerText = "404,160円/年";
  } else if (a == 85 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "450180";
    document.getElementById("product").innerText = "450,180円/年";
  } else if (a == 86 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "498360";
    document.getElementById("product").innerText = "498,360円/年";
  } else if (a == 87 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "550290";
    document.getElementById("product").innerText = "550,290円/年";
  } else if (a == 88 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "607110";
    document.getElementById("product").innerText = "607,110円/年";
  } else if (a == 89 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "669510";
    document.getElementById("product").innerText = "669,510円/年";
  } else if (a == 90 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "738960";
    document.getElementById("product").innerText = "738,960円/年";
  } else if (a == 91 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "814260";
    document.getElementById("product").innerText = "814,260円/年";
  } else if (a == 92 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "898740";
    document.getElementById("product").innerText = "898,740円/年";
  } else if (a == 93 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "989910";
    document.getElementById("product").innerText = "989,910円/年";
  } else if (a == 94 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "1078530";
    document.getElementById("product").innerText = "1,078,530円/年";
  } else if (a == 95 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "1155150";
    document.getElementById("product").innerText = "1,155,150円/年";
  } else if (a == 96 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "1238670";
    document.getElementById("product").innerText = "1,238,670円/年";
  } else if (a == 97 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "1324740";
    document.getElementById("product").innerText = "1,324,740円/年";
  } else if (a == 98 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "1413720";
    document.getElementById("product").innerText = "1,413,720円/年";
  } else if (a == 99 && b == 1 && c == 3 && d == 2) {
    document.getElementById("premium").value = "1505850";
    document.getElementById("product").innerText = "1,505,850円/年";
  } else if (a == 50 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "14070";
    document.getElementById("product").innerText = "14,070円/年";
  } else if (a == 51 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "14940";
    document.getElementById("product").innerText = "14,940円/年";
  } else if (a == 52 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "15840";
    document.getElementById("product").innerText = "15,840円/年";
  } else if (a == 53 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "16740";
    document.getElementById("product").innerText = "16,740円/年";
  } else if (a == 54 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "17580";
    document.getElementById("product").innerText = "17,580円/年";
  } else if (a == 55 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "18360";
    document.getElementById("product").innerText = "18,360円/年";
  } else if (a == 56 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "19020";
    document.getElementById("product").innerText = "19,020円/年";
  } else if (a == 57 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "19710";
    document.getElementById("product").innerText = "19,710円/年";
  } else if (a == 58 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "20460";
    document.getElementById("product").innerText = "20,460円/年";
  } else if (a == 59 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "21600";
    document.getElementById("product").innerText = "21,600円/年";
  } else if (a == 60 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "22950";
    document.getElementById("product").innerText = "22,950円/年";
  } else if (a == 61 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "24540";
    document.getElementById("product").innerText = "24,540円/年";
  } else if (a == 62 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "26100";
    document.getElementById("product").innerText = "26,100円/年";
  } else if (a == 63 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "27690";
    document.getElementById("product").innerText = "27,690円/年";
  } else if (a == 64 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "29400";
    document.getElementById("product").innerText = "29,400円/年";
  } else if (a == 65 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "31470";
    document.getElementById("product").innerText = "31,470円/年";
  } else if (a == 66 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "33810";
    document.getElementById("product").innerText = "33,810円/年";
  } else if (a == 67 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "36240";
    document.getElementById("product").innerText = "36,240円/年";
  } else if (a == 68 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "39000";
    document.getElementById("product").innerText = "39,000円/年";
  } else if (a == 69 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "42150";
    document.getElementById("product").innerText = "42,150円/年";
  } else if (a == 70 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "45870";
    document.getElementById("product").innerText = "45,870円/年";
  } else if (a == 71 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "50130";
    document.getElementById("product").innerText = "50,130円/年";
  } else if (a == 72 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "54930";
    document.getElementById("product").innerText = "54,930円/年";
  } else if (a == 73 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "59790";
    document.getElementById("product").innerText = "59,790円/年";
  } else if (a == 74 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "65280";
    document.getElementById("product").innerText = "65,280円/年";
  } else if (a == 75 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "72150";
    document.getElementById("product").innerText = "72,150円/年";
  } else if (a == 76 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "80820";
    document.getElementById("product").innerText = "80,820円/年";
  } else if (a == 77 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "91350";
    document.getElementById("product").innerText = "91,350円/年";
  } else if (a == 78 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "103680";
    document.getElementById("product").innerText = "103,680円/年";
  } else if (a == 79 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "117960";
    document.getElementById("product").innerText = "117,960円/年";
  } else if (a == 80 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "132660";
    document.getElementById("product").innerText = "132,660円/年";
  } else if (a == 81 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "149580";
    document.getElementById("product").innerText = "149,580円/年";
  } else if (a == 82 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "169590";
    document.getElementById("product").innerText = "169,590円/年";
  } else if (a == 83 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "192720";
    document.getElementById("product").innerText = "192,720円/年";
  } else if (a == 84 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "218610";
    document.getElementById("product").innerText = "218,610円/年";
  } else if (a == 85 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "247440";
    document.getElementById("product").innerText = "247,440円/年";
  } else if (a == 86 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "280200";
    document.getElementById("product").innerText = "280,200円/年";
  } else if (a == 87 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "317790";
    document.getElementById("product").innerText = "317,790円/年";
  } else if (a == 88 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "361350";
    document.getElementById("product").innerText = "361,350円/年";
  } else if (a == 89 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "409950";
    document.getElementById("product").innerText = "409,950円/年";
  } else if (a == 90 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "464130";
    document.getElementById("product").innerText = "464,130円/年";
  } else if (a == 91 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "524880";
    document.getElementById("product").innerText = "524,880円/年";
  } else if (a == 92 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "595860";
    document.getElementById("product").innerText = "595,860円/年";
  } else if (a == 93 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "674790";
    document.getElementById("product").innerText = "674,790円/年";
  } else if (a == 94 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "758820";
    document.getElementById("product").innerText = "758,820円/年";
  } else if (a == 95 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "849510";
    document.getElementById("product").innerText = "849,510円/年";
  } else if (a == 96 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "932580";
    document.getElementById("product").innerText = "932,580円/年";
  } else if (a == 97 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "1017030";
    document.getElementById("product").innerText = "1,017,030円/年";
  } else if (a == 98 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "1102860";
    document.getElementById("product").innerText = "1,102,860円/年";
  } else if (a == 99 && b == 2 && c == 3 && d == 2) {
    document.getElementById("premium").value = "1190250";
    document.getElementById("product").innerText = "1,190,250円/年";
  } else if (a == 50 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "290";
    document.getElementById("product").innerText = "290円/月";
  } else if (a == 51 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "310";
    document.getElementById("product").innerText = "310円/月";
  } else if (a == 52 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "335";
    document.getElementById("product").innerText = "335円/月";
  } else if (a == 53 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "355";
    document.getElementById("product").innerText = "355円/月";
  } else if (a == 54 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "385";
    document.getElementById("product").innerText = "385円/月";
  } else if (a == 55 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "415";
    document.getElementById("product").innerText = "415円/月";
  } else if (a == 56 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "445";
    document.getElementById("product").innerText = "445円/月";
  } else if (a == 57 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "475";
    document.getElementById("product").innerText = "475円/月";
  } else if (a == 58 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "510";
    document.getElementById("product").innerText = "510円/月";
  } else if (a == 59 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "545";
    document.getElementById("product").innerText = "545円/月";
  } else if (a == 60 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "590";
    document.getElementById("product").innerText = "590円/月";
  } else if (a == 61 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "650";
    document.getElementById("product").innerText = "650円/月";
  } else if (a == 62 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "715";
    document.getElementById("product").innerText = "715円/月";
  } else if (a == 63 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "780";
    document.getElementById("product").innerText = "780円/月";
  } else if (a == 64 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "845";
    document.getElementById("product").innerText = "845円/月";
  } else if (a == 65 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "925";
    document.getElementById("product").innerText = "925円/月";
  } else if (a == 66 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "1010";
    document.getElementById("product").innerText = "1,010円/月";
  } else if (a == 67 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "1095";
    document.getElementById("product").innerText = "1,095円/月";
  } else if (a == 68 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "1185";
    document.getElementById("product").innerText = "1,185円/月";
  } else if (a == 69 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "1285";
    document.getElementById("product").innerText = "1,285円/月";
  } else if (a == 70 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "1400";
    document.getElementById("product").innerText = "1,400円/月";
  } else if (a == 71 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "1530";
    document.getElementById("product").innerText = "1,530円/月";
  } else if (a == 72 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "1665";
    document.getElementById("product").innerText = "1,665円/月";
  } else if (a == 73 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "1805";
    document.getElementById("product").innerText = "1,805円/月";
  } else if (a == 74 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "1955";
    document.getElementById("product").innerText = "1,955円/月";
  } else if (a == 75 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "2150";
    document.getElementById("product").innerText = "2,150円/月";
  } else if (a == 76 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "2385";
    document.getElementById("product").innerText = "2,385円/月";
  } else if (a == 77 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "2670";
    document.getElementById("product").innerText = "2,670円/月";
  } else if (a == 78 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "3010";
    document.getElementById("product").innerText = "3,010円/月";
  } else if (a == 79 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "3400";
    document.getElementById("product").innerText = "3,400円/月";
  } else if (a == 80 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "3795";
    document.getElementById("product").innerText = "3,795円/月";
  } else if (a == 81 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "4255";
    document.getElementById("product").innerText = "4,255円/月";
  } else if (a == 82 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "4765";
    document.getElementById("product").innerText = "4,765円/月";
  } else if (a == 83 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "5345";
    document.getElementById("product").innerText = "5,345円/月";
  } else if (a == 84 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "6000";
    document.getElementById("product").innerText = "6,000円/月";
  } else if (a == 85 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "6720";
    document.getElementById("product").innerText = "6,720円/月";
  } else if (a == 86 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "7485";
    document.getElementById("product").innerText = "7,485円/月";
  } else if (a == 87 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "8325";
    document.getElementById("product").innerText = "8,325円/月";
  } else if (a == 88 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "9250";
    document.getElementById("product").innerText = "9,250円/月";
  } else if (a == 89 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "10290";
    document.getElementById("product").innerText = "10,290円/月";
  } else if (a == 90 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "11465";
    document.getElementById("product").innerText = "11,465円/月";
  } else if (a == 91 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "12765";
    document.getElementById("product").innerText = "12,765円/月";
  } else if (a == 92 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "14260";
    document.getElementById("product").innerText = "14,260円/月";
  } else if (a == 93 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "15915";
    document.getElementById("product").innerText = "15,915円/月";
  } else if (a == 94 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "17575";
    document.getElementById("product").innerText = "17,575円/月";
  } else if (a == 95 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "19050";
    document.getElementById("product").innerText = "19,050円/月";
  } else if (a == 96 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "20705";
    document.getElementById("product").innerText = "20,705円/月";
  } else if (a == 97 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "22460";
    document.getElementById("product").innerText = "22,460円/月";
  } else if (a == 98 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "24335";
    document.getElementById("product").innerText = "24,335円/月";
  } else if (a == 99 && b == 1 && c == 0 && d == 1) {
    document.getElementById("premium").value = "26345";
    document.getElementById("product").innerText = "26,345円/月";
  } else if (a == 50 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "3405";
    document.getElementById("product").innerText = "3,405円/年";
  } else if (a == 51 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "3635";
    document.getElementById("product").innerText = "3,635円/年";
  } else if (a == 52 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "3900";
    document.getElementById("product").innerText = "3,900円/年";
  } else if (a == 53 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "4170";
    document.getElementById("product").innerText = "4,170円/年";
  } else if (a == 54 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "4485";
    document.getElementById("product").innerText = "4,485円/年";
  } else if (a == 55 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "4840";
    document.getElementById("product").innerText = "4,840円/年";
  } else if (a == 56 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "5210";
    document.getElementById("product").innerText = "5,210円/年";
  } else if (a == 57 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "5575";
    document.getElementById("product").innerText = "5,575円/年";
  } else if (a == 58 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "5945";
    document.getElementById("product").innerText = "5,945円/年";
  } else if (a == 59 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "6375";
    document.getElementById("product").innerText = "6,375円/年";
  } else if (a == 60 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "6890";
    document.getElementById("product").innerText = "6,890円/年";
  } else if (a == 61 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "7570";
    document.getElementById("product").innerText = "7,570円/年";
  } else if (a == 62 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "8325";
    document.getElementById("product").innerText = "8,325円/年";
  } else if (a == 63 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "9095";
    document.getElementById("product").innerText = "9,095円/年";
  } else if (a == 64 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "9860";
    document.getElementById("product").innerText = "9,860円/年";
  } else if (a == 65 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "10770";
    document.getElementById("product").innerText = "10,770円/年";
  } else if (a == 66 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "11740";
    document.getElementById("product").innerText = "11,740円/年";
  } else if (a == 67 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "12730";
    document.getElementById("product").innerText = "12,730円/年";
  } else if (a == 68 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "13815";
    document.getElementById("product").innerText = "13,815円/年";
  } else if (a == 69 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "14965";
    document.getElementById("product").innerText = "14,965円/年";
  } else if (a == 70 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "16265";
    document.getElementById("product").innerText = "16,265円/年";
  } else if (a == 71 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "17745";
    document.getElementById("product").innerText = "17,745円/年";
  } else if (a == 72 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "19335";
    document.getElementById("product").innerText = "19,335円/年";
  } else if (a == 73 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "20895";
    document.getElementById("product").innerText = "20,895円/年";
  } else if (a == 74 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "22645";
    document.getElementById("product").innerText = "22,645円/年";
  } else if (a == 75 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "24825";
    document.getElementById("product").innerText = "24,825円/年";
  } else if (a == 76 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "27500";
    document.getElementById("product").innerText = "27,500円/年";
  } else if (a == 77 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "30740";
    document.getElementById("product").innerText = "30,740円/年";
  } else if (a == 78 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "34585";
    document.getElementById("product").innerText = "34,585円/年";
  } else if (a == 79 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "38950";
    document.getElementById("product").innerText = "38,950円/年";
  } else if (a == 80 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "43360";
    document.getElementById("product").innerText = "43,360円/年";
  } else if (a == 81 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "48400";
    document.getElementById("product").innerText = "48,400円/年";
  } else if (a == 82 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "54035";
    document.getElementById("product").innerText = "54,035円/年";
  } else if (a == 83 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "60325";
    document.getElementById("product").innerText = "60,325円/年";
  } else if (a == 84 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "67360";
    document.getElementById("product").innerText = "67,360円/年";
  } else if (a == 85 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "75030";
    document.getElementById("product").innerText = "75,030円/年";
  } else if (a == 86 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "83060";
    document.getElementById("product").innerText = "83,060円/年";
  } else if (a == 87 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "91715";
    document.getElementById("product").innerText = "91,715円/年";
  } else if (a == 88 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "101185";
    document.getElementById("product").innerText = "101,185円/年";
  } else if (a == 89 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "111585";
    document.getElementById("product").innerText = "111,585円/年";
  } else if (a == 90 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "123160";
    document.getElementById("product").innerText = "123,160円/年";
  } else if (a == 91 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "135710";
    document.getElementById("product").innerText = "135,710円/年";
  } else if (a == 92 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "149790";
    document.getElementById("product").innerText = "149,790円/年";
  } else if (a == 93 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "164985";
    document.getElementById("product").innerText = "164,985円/年";
  } else if (a == 94 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "179755";
    document.getElementById("product").innerText = "179,755円/年";
  } else if (a == 95 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "192525";
    document.getElementById("product").innerText = "192,525円/年";
  } else if (a == 96 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "206445";
    document.getElementById("product").innerText = "206,445円/年";
  } else if (a == 97 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "220790";
    document.getElementById("product").innerText = "220,790円/年";
  } else if (a == 98 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "235620";
    document.getElementById("product").innerText = "235,620円/年";
  } else if (a == 99 && b == 1 && c == 0 && d == 2) {
    document.getElementById("premium").value = "250975";
    document.getElementById("product").innerText = "250,975円/年";
  } else if (a == 50 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "200";
    document.getElementById("product").innerText = "200円/月";
  } else if (a == 51 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "210";
    document.getElementById("product").innerText = "210円/月";
  } else if (a == 52 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "225";
    document.getElementById("product").innerText = "225円/月";
  } else if (a == 53 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "240";
    document.getElementById("product").innerText = "240円/月";
  } else if (a == 54 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "250";
    document.getElementById("product").innerText = "250円/月";
  } else if (a == 55 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "260";
    document.getElementById("product").innerText = "260円/月";
  } else if (a == 56 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "270";
    document.getElementById("product").innerText = "270円/月";
  } else if (a == 57 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "280";
    document.getElementById("product").innerText = "280円/月";
  } else if (a == 58 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "290";
    document.getElementById("product").innerText = "290円/月";
  } else if (a == 59 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "310";
    document.getElementById("product").innerText = "310円/月";
  } else if (a == 60 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "325";
    document.getElementById("product").innerText = "325円/月";
  } else if (a == 61 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "350";
    document.getElementById("product").innerText = "350円/月";
  } else if (a == 62 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "370";
    document.getElementById("product").innerText = "370円/月";
  } else if (a == 63 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "395";
    document.getElementById("product").innerText = "395円/月";
  } else if (a == 64 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "420";
    document.getElementById("product").innerText = "420円/月";
  } else if (a == 65 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "450";
    document.getElementById("product").innerText = "450円/月";
  } else if (a == 66 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "480";
    document.getElementById("product").innerText = "480円/月";
  } else if (a == 67 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "515";
    document.getElementById("product").innerText = "515円/月";
  } else if (a == 68 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "555";
    document.getElementById("product").innerText = "555円/月";
  } else if (a == 69 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "600";
    document.getElementById("product").innerText = "600円/月";
  } else if (a == 70 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "655";
    document.getElementById("product").innerText = "655円/月";
  } else if (a == 71 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "715";
    document.getElementById("product").innerText = "715円/月";
  } else if (a == 72 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "785";
    document.getElementById("product").innerText = "785円/月";
  } else if (a == 73 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "855";
    document.getElementById("product").innerText = "855円/月";
  } else if (a == 74 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "935";
    document.getElementById("product").innerText = "935円/月";
  } else if (a == 75 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "1030";
    document.getElementById("product").innerText = "1,030円/月";
  } else if (a == 76 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "1155";
    document.getElementById("product").innerText = "1,155円/月";
  } else if (a == 77 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "1310";
    document.getElementById("product").innerText = "1,310円/月";
  } else if (a == 78 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "1490";
    document.getElementById("product").innerText = "1,490円/月";
  } else if (a == 79 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "1695";
    document.getElementById("product").innerText = "1,695円/月";
  } else if (a == 80 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "1910";
    document.getElementById("product").innerText = "1,910円/月";
  } else if (a == 81 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "2160";
    document.getElementById("product").innerText = "2,160円/月";
  } else if (a == 82 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "2450";
    document.getElementById("product").innerText = "2,450円/月";
  } else if (a == 83 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "2795";
    document.getElementById("product").innerText = "2,795円/月";
  } else if (a == 84 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "3180";
    document.getElementById("product").innerText = "3,180円/月";
  } else if (a == 85 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "3610";
    document.getElementById("product").innerText = "3,610円/月";
  } else if (a == 86 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "4105";
    document.getElementById("product").innerText = "4,105円/月";
  } else if (a == 87 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "4675";
    document.getElementById("product").innerText = "4,675円/月";
  } else if (a == 88 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "5350";
    document.getElementById("product").innerText = "5,350円/月";
  } else if (a == 89 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "6105";
    document.getElementById("product").innerText = "6,105円/月";
  } else if (a == 90 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "6960";
    document.getElementById("product").innerText = "6,960円/月";
  } else if (a == 91 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "7935";
    document.getElementById("product").innerText = "7,935円/月";
  } else if (a == 92 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "9095";
    document.getElementById("product").innerText = "9,095円/月";
  } else if (a == 93 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "10410";
    document.getElementById("product").innerText = "10,410円/月";
  } else if (a == 94 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "11845";
    document.getElementById("product").innerText = "11,845円/月";
  } else if (a == 95 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "13435";
    document.getElementById("product").innerText = "13,435円/月";
  } else if (a == 96 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "14935";
    document.getElementById("product").innerText = "14,935円/月";
  } else if (a == 97 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "16500";
    document.getElementById("product").innerText = "16,500円/月";
  } else if (a == 98 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "18140";
    document.getElementById("product").innerText = "18,140円/月";
  } else if (a == 99 && b == 2 && c == 0 && d == 1) {
    document.getElementById("premium").value = "19855";
    document.getElementById("product").innerText = "19,855円/月";
  } else if (a == 50 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "2345";
    document.getElementById("product").innerText = "2,345円/年";
  } else if (a == 51 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "2490";
    document.getElementById("product").innerText = "2,490円/年";
  } else if (a == 52 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "2640";
    document.getElementById("product").innerText = "2,640円/年";
  } else if (a == 53 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "2790";
    document.getElementById("product").innerText = "2,790円/年";
  } else if (a == 54 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "2930";
    document.getElementById("product").innerText = "2,930円/年";
  } else if (a == 55 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "3060";
    document.getElementById("product").innerText = "3,060円/年";
  } else if (a == 56 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "3170";
    document.getElementById("product").innerText = "3,170円/年";
  } else if (a == 57 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "3285";
    document.getElementById("product").innerText = "3,285円/年";
  } else if (a == 58 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "3410";
    document.getElementById("product").innerText = "3,410円/年";
  } else if (a == 59 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "3600";
    document.getElementById("product").innerText = "3,600円/年";
  } else if (a == 60 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "3825";
    document.getElementById("product").innerText = "3,825円/年";
  } else if (a == 61 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "4090";
    document.getElementById("product").innerText = "4,090円/年";
  } else if (a == 62 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "4350";
    document.getElementById("product").innerText = "4,350円/年";
  } else if (a == 63 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "4615";
    document.getElementById("product").innerText = "4,615円/年";
  } else if (a == 64 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "4900";
    document.getElementById("product").innerText = "4,900円/年";
  } else if (a == 65 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "5245";
    document.getElementById("product").innerText = "5,245円/年";
  } else if (a == 66 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "5635";
    document.getElementById("product").innerText = "5,635円/年";
  } else if (a == 67 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "6040";
    document.getElementById("product").innerText = "6,040円/年";
  } else if (a == 68 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "6500";
    document.getElementById("product").innerText = "6,500円/年";
  } else if (a == 69 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "7025";
    document.getElementById("product").innerText = "7,025円/年";
  } else if (a == 70 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "7645";
    document.getElementById("product").innerText = "7,645円/年";
  } else if (a == 71 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "8355";
    document.getElementById("product").innerText = "8,355円/年";
  } else if (a == 72 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "9155";
    document.getElementById("product").innerText = "9,155円/年";
  } else if (a == 73 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "9965";
    document.getElementById("product").innerText = "9,965円/年";
  } else if (a == 74 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "10880";
    document.getElementById("product").innerText = "10,880円/年";
  } else if (a == 75 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "12025";
    document.getElementById("product").innerText = "12,025円/年";
  } else if (a == 76 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "13470";
    document.getElementById("product").innerText = "13,470円/年";
  } else if (a == 77 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "15225";
    document.getElementById("product").innerText = "15,225円/年";
  } else if (a == 78 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "17280";
    document.getElementById("product").innerText = "17,280円/年";
  } else if (a == 79 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "19660";
    document.getElementById("product").innerText = "19,660円/年";
  } else if (a == 80 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "22110";
    document.getElementById("product").innerText = "22,110円/年";
  } else if (a == 81 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "24930";
    document.getElementById("product").innerText = "24,930円/年";
  } else if (a == 82 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "28265";
    document.getElementById("product").innerText = "28,265円/年";
  } else if (a == 83 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "32120";
    document.getElementById("product").innerText = "32,120円/年";
  } else if (a == 84 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "36435";
    document.getElementById("product").innerText = "36,435円/年";
  } else if (a == 85 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "41240";
    document.getElementById("product").innerText = "41,240円/年";
  } else if (a == 86 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "46700";
    document.getElementById("product").innerText = "46,700円/年";
  } else if (a == 87 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "52965";
    document.getElementById("product").innerText = "52,965円/年";
  } else if (a == 88 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "60225";
    document.getElementById("product").innerText = "60,225円/年";
  } else if (a == 89 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "68325";
    document.getElementById("product").innerText = "68,325円/年";
  } else if (a == 90 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "77355";
    document.getElementById("product").innerText = "77,355円/年";
  } else if (a == 91 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "87480";
    document.getElementById("product").innerText = "87,480円/年";
  } else if (a == 92 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "99310";
    document.getElementById("product").innerText = "99,310円/年";
  } else if (a == 93 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "112465";
    document.getElementById("product").innerText = "112,465円/年";
  } else if (a == 94 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "126470";
    document.getElementById("product").innerText = "126,470円/年";
  } else if (a == 95 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "141585";
    document.getElementById("product").innerText = "141,585円/年";
  } else if (a == 96 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "155430";
    document.getElementById("product").innerText = "155,430円/年";
  } else if (a == 97 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "169505";
    document.getElementById("product").innerText = "169,505円/年";
  } else if (a == 98 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "183810";
    document.getElementById("product").innerText = "183,810円/年";
  } else if (a == 99 && b == 2 && c == 0 && d == 2) {
    document.getElementById("premium").value = "198375";
    document.getElementById("product").innerText = "198,375円/年";

  } else {
    document.getElementById("premium").value = "引受不可";
    document.getElementById("product").innerText = "引受不可";
  }
}

function calculateAmount() {
  var a, b, c;
  a = document.querySelector('select[name="contractor_age"]').value;
  b = document.querySelector('input[name="gender"]:checked').value;
  e = document.querySelector('input[name="select_premium"]:checked').value;

  if (a == 50 && b == 1 && e == 1) {
    document.getElementById("amount").value = "1724140";
    document.getElementById("product2").innerText = "1,724,140円";
  } else if (a == 51 && b == 1 && e == 1) {
    document.getElementById("amount").value = "1612900";
    document.getElementById("product2").innerText = "1,612,900円";
  } else if (a == 52 && b == 1 && e == 1) {
    document.getElementById("amount").value = "1492540";
    document.getElementById("product2").innerText = "1,492,540円";
  } else if (a == 53 && b == 1 && e == 1) {
    document.getElementById("amount").value = "1408450";
    document.getElementById("product2").innerText = "1,408,450円";
  } else if (a == 54 && b == 1 && e == 1) {
    document.getElementById("amount").value = "1298700";
    document.getElementById("product2").innerText = "1,298,700円";
  } else if (a == 55 && b == 1 && e == 1) {
    document.getElementById("amount").value = "1204820";
    document.getElementById("product2").innerText = "1,204,820円";
  } else if (a == 56 && b == 1 && e == 1) {
    document.getElementById("amount").value = "1123600";
    document.getElementById("product2").innerText = "1,123,600円";
  } else if (a == 57 && b == 1 && e == 1) {
    document.getElementById("amount").value = "1052630";
    document.getElementById("product2").innerText = "1,052,630円";
  } else if (a == 58 && b == 1 && e == 1) {
    document.getElementById("amount").value = "980390";
    document.getElementById("product2").innerText = "980,390円";
  } else if (a == 59 && b == 1 && e == 1) {
    document.getElementById("amount").value = "917430";
    document.getElementById("product2").innerText = "917,430円";
  } else if (a == 60 && b == 1 && e == 1) {
    document.getElementById("amount").value = "847460";
    document.getElementById("product2").innerText = "847,460円";
  } else if (a == 61 && b == 1 && e == 1) {
    document.getElementById("amount").value = "769230";
    document.getElementById("product2").innerText = "769,230円";
  } else if (a == 62 && b == 1 && e == 1) {
    document.getElementById("amount").value = "699300";
    document.getElementById("product2").innerText = "699,300円";
  } else if (a == 63 && b == 1 && e == 1) {
    document.getElementById("amount").value = "641030";
    document.getElementById("product2").innerText = "641,030円";
  } else if (a == 64 && b == 1 && e == 1) {
    document.getElementById("amount").value = "591720";
    document.getElementById("product2").innerText = "591,720円";
  } else if (a == 65 && b == 1 && e == 1) {
    document.getElementById("amount").value = "540540";
    document.getElementById("product2").innerText = "540,540円";
  } else if (a == 66 && b == 1 && e == 1) {
    document.getElementById("amount").value = "495050";
    document.getElementById("product2").innerText = "495,050円";
  } else if (a == 67 && b == 1 && e == 1) {
    document.getElementById("amount").value = "456620";
    document.getElementById("product2").innerText = "456,620円";
  } else if (a == 68 && b == 1 && e == 1) {
    document.getElementById("amount").value = "421940";
    document.getElementById("product2").innerText = "421,940円";
  } else if (a == 69 && b == 1 && e == 1) {
    document.getElementById("amount").value = "389110";
    document.getElementById("product2").innerText = "389,110円";
  } else if (a == 70 && b == 1 && e == 1) {
    document.getElementById("amount").value = "357140";
    document.getElementById("product2").innerText = "357,140円";
  } else if (a == 71 && b == 1 && e == 1) {
    document.getElementById("amount").value = "326800";
    document.getElementById("product2").innerText = "326,800円";
  } else if (a == 72 && b == 1 && e == 1) {
    document.getElementById("amount").value = "300300";
    document.getElementById("product2").innerText = "300,300円";
  } else if (a == 73 && b == 1 && e == 1) {
    document.getElementById("amount").value = "277010";
    document.getElementById("product2").innerText = "277,010円";
  } else if (a == 74 && b == 1 && e == 1) {
    document.getElementById("amount").value = "255750";
    document.getElementById("product2").innerText = "255,750円";
  } else if (a == 75 && b == 1 && e == 1) {
    document.getElementById("amount").value = "232560";
    document.getElementById("product2").innerText = "232,560円";
  } else if (a == 76 && b == 1 && e == 1) {
    document.getElementById("amount").value = "209640";
    document.getElementById("product2").innerText = "209,640円";
  } else if (a == 77 && b == 1 && e == 1) {
    document.getElementById("amount").value = "187270";
    document.getElementById("product2").innerText = "187,270円";
  } else if (a == 78 && b == 1 && e == 1) {
    document.getElementById("amount").value = "166110";
    document.getElementById("product2").innerText = "166,110円";
  } else if (a == 79 && b == 1 && e == 1) {
    document.getElementById("amount").value = "147060";
    document.getElementById("product2").innerText = "147,060円";
  } else if (a == 80 && b == 1 && e == 1) {
    document.getElementById("amount").value = "131750";
    document.getElementById("product2").innerText = "131,750円";
  } else if (a == 81 && b == 1 && e == 1) {
    document.getElementById("amount").value = "117510";
    document.getElementById("product2").innerText = "117,510円";
  } else if (a == 82 && b == 1 && e == 1) {
    document.getElementById("amount").value = "104930";
    document.getElementById("product2").innerText = "104,930円";
  } else if (a == 83 && b == 1 && e == 1) {
    document.getElementById("amount").value = "93550";
    document.getElementById("product2").innerText = "93,550円";
  } else if (a == 84 && b == 1 && e == 1) {
    document.getElementById("amount").value = "83330";
    document.getElementById("product2").innerText = "83,330円";
  } else if (a == 85 && b == 1 && e == 1) {
    document.getElementById("amount").value = "74400";
    document.getElementById("product2").innerText = "74,400円";
  } else if (a == 86 && b == 1 && e == 1) {
    document.getElementById("amount").value = "66800";
    document.getElementById("product2").innerText = "66,800円";
  } else if (a == 87 && b == 1 && e == 1) {
    document.getElementById("amount").value = "60060";
    document.getElementById("product2").innerText = "60,060円";
  } else if (a == 88 && b == 1 && e == 1) {
    document.getElementById("amount").value = "54050";
    document.getElementById("product2").innerText = "54,050円";
  } else if (a == 89 && b == 1 && e == 1) {
    document.getElementById("amount").value = "48590";
    document.getElementById("product2").innerText = "48,590円";
  } else if (a == 90 && b == 1 && e == 1) {
    document.getElementById("amount").value = "43610";
    document.getElementById("product2").innerText = "43,610円";
  } else if (a == 91 && b == 1 && e == 1) {
    document.getElementById("amount").value = "39170";
    document.getElementById("product2").innerText = "39,170円";
  } else if (a == 92 && b == 1 && e == 1) {
    document.getElementById("amount").value = "35060";
    document.getElementById("product2").innerText = "35,060円";
  } else if (a == 93 && b == 1 && e == 1) {
    document.getElementById("amount").value = "31420";
    document.getElementById("product2").innerText = "31,420円";
  } else if (a == 94 && b == 1 && e == 1) {
    document.getElementById("amount").value = "28450";
    document.getElementById("product2").innerText = "28,450円";
  } else if (a == 95 && b == 1 && e == 1) {
    document.getElementById("amount").value = "26250";
    document.getElementById("product2").innerText = "26,250円";
  } else if (a == 96 && b == 1 && e == 1) {
    document.getElementById("amount").value = "24150";
    document.getElementById("product2").innerText = "24,150円";
  } else if (a == 97 && b == 1 && e == 1) {
    document.getElementById("amount").value = "22260";
    document.getElementById("product2").innerText = "22,260円";
  } else if (a == 98 && b == 1 && e == 1) {
    document.getElementById("amount").value = "20550";
    document.getElementById("product2").innerText = "20,550円";
  } else if (a == 99 && b == 1 && e == 1) {
    document.getElementById("amount").value = "18980";
    document.getElementById("product2").innerText = "18,980円";
  } else if (a == 50 && b == 2 && e == 1) {
    document.getElementById("amount").value = "2500000";
    document.getElementById("product2").innerText = "2,500,000円";
  } else if (a == 51 && b == 2 && e == 1) {
    document.getElementById("amount").value = "2380950";
    document.getElementById("product2").innerText = "2,380,950円";
  } else if (a == 52 && b == 2 && e == 1) {
    document.getElementById("amount").value = "2222220";
    document.getElementById("product2").innerText = "2,222,220円";
  } else if (a == 53 && b == 2 && e == 1) {
    document.getElementById("amount").value = "2083330";
    document.getElementById("product2").innerText = "2,083,330円";
  } else if (a == 54 && b == 2 && e == 1) {
    document.getElementById("amount").value = "2000000";
    document.getElementById("product2").innerText = "2,000,000円";
  } else if (a == 55 && b == 2 && e == 1) {
    document.getElementById("amount").value = "1923080";
    document.getElementById("product2").innerText = "1,923,080円";
  } else if (a == 56 && b == 2 && e == 1) {
    document.getElementById("amount").value = "1851850";
    document.getElementById("product2").innerText = "1,851,850円";
  } else if (a == 57 && b == 2 && e == 1) {
    document.getElementById("amount").value = "1785710";
    document.getElementById("product2").innerText = "1,785,710円";
  } else if (a == 58 && b == 2 && e == 1) {
    document.getElementById("amount").value = "1724140";
    document.getElementById("product2").innerText = "1,724,140円";
  } else if (a == 59 && b == 2 && e == 1) {
    document.getElementById("amount").value = "1612900";
    document.getElementById("product2").innerText = "1,612,900円";
  } else if (a == 60 && b == 2 && e == 1) {
    document.getElementById("amount").value = "1538460";
    document.getElementById("product2").innerText = "1,538,460円";
  } else if (a == 61 && b == 2 && e == 1) {
    document.getElementById("amount").value = "1428570";
    document.getElementById("product2").innerText = "1,428,570円";
  } else if (a == 62 && b == 2 && e == 1) {
    document.getElementById("amount").value = "1351350";
    document.getElementById("product2").innerText = "1,351,350円";
  } else if (a == 63 && b == 2 && e == 1) {
    document.getElementById("amount").value = "1265820";
    document.getElementById("product2").innerText = "1,265,820円";
  } else if (a == 64 && b == 2 && e == 1) {
    document.getElementById("amount").value = "1190480";
    document.getElementById("product2").innerText = "1,190,480円";
  } else if (a == 65 && b == 2 && e == 1) {
    document.getElementById("amount").value = "1111110";
    document.getElementById("product2").innerText = "1,111,110円";
  } else if (a == 66 && b == 2 && e == 1) {
    document.getElementById("amount").value = "1041670";
    document.getElementById("product2").innerText = "1,041,670円";
  } else if (a == 67 && b == 2 && e == 1) {
    document.getElementById("amount").value = "970870";
    document.getElementById("product2").innerText = "970,870円";
  } else if (a == 68 && b == 2 && e == 1) {
    document.getElementById("amount").value = "900900";
    document.getElementById("product2").innerText = "900,900円";
  } else if (a == 69 && b == 2 && e == 1) {
    document.getElementById("amount").value = "833330";
    document.getElementById("product2").innerText = "833,330円";
  } else if (a == 70 && b == 2 && e == 1) {
    document.getElementById("amount").value = "763360";
    document.getElementById("product2").innerText = "763,360円";
  } else if (a == 71 && b == 2 && e == 1) {
    document.getElementById("amount").value = "699300";
    document.getElementById("product2").innerText = "699,300円";
  } else if (a == 72 && b == 2 && e == 1) {
    document.getElementById("amount").value = "636940";
    document.getElementById("product2").innerText = "636,940円";
  } else if (a == 73 && b == 2 && e == 1) {
    document.getElementById("amount").value = "584800";
    document.getElementById("product2").innerText = "584,800円";
  } else if (a == 74 && b == 2 && e == 1) {
    document.getElementById("amount").value = "534760";
    document.getElementById("product2").innerText = "534,760円";
  } else if (a == 75 && b == 2 && e == 1) {
    document.getElementById("amount").value = "485440";
    document.getElementById("product2").innerText = "485,440円";
  } else if (a == 76 && b == 2 && e == 1) {
    document.getElementById("amount").value = "432900";
    document.getElementById("product2").innerText = "432,900円";
  } else if (a == 77 && b == 2 && e == 1) {
    document.getElementById("amount").value = "381680";
    document.getElementById("product2").innerText = "381,680円";
  } else if (a == 78 && b == 2 && e == 1) {
    document.getElementById("amount").value = "335570";
    document.getElementById("product2").innerText = "335,570円";
  } else if (a == 79 && b == 2 && e == 1) {
    document.getElementById("amount").value = "294990";
    document.getElementById("product2").innerText = "294,990円";
  } else if (a == 80 && b == 2 && e == 1) {
    document.getElementById("amount").value = "261780";
    document.getElementById("product2").innerText = "261,780円";
  } else if (a == 81 && b == 2 && e == 1) {
    document.getElementById("amount").value = "231480";
    document.getElementById("product2").innerText = "231,480円";
  } else if (a == 82 && b == 2 && e == 1) {
    document.getElementById("amount").value = "204080";
    document.getElementById("product2").innerText = "204,080円";
  } else if (a == 83 && b == 2 && e == 1) {
    document.getElementById("amount").value = "178890";
    document.getElementById("product2").innerText = "178,890円";
  } else if (a == 84 && b == 2 && e == 1) {
    document.getElementById("amount").value = "157230";
    document.getElementById("product2").innerText = "157,230円";
  } else if (a == 85 && b == 2 && e == 1) {
    document.getElementById("amount").value = "138500";
    document.getElementById("product2").innerText = "138,500円";
  } else if (a == 86 && b == 2 && e == 1) {
    document.getElementById("amount").value = "121800";
    document.getElementById("product2").innerText = "121,800円";
  } else if (a == 87 && b == 2 && e == 1) {
    document.getElementById("amount").value = "106950";
    document.getElementById("product2").innerText = "106,950円";
  } else if (a == 88 && b == 2 && e == 1) {
    document.getElementById("amount").value = "93460";
    document.getElementById("product2").innerText = "93,460円";
  } else if (a == 89 && b == 2 && e == 1) {
    document.getElementById("amount").value = "81900";
    document.getElementById("product2").innerText = "81,900円";
  } else if (a == 90 && b == 2 && e == 1) {
    document.getElementById("amount").value = "71840";
    document.getElementById("product2").innerText = "71,840円";
  } else if (a == 91 && b == 2 && e == 1) {
    document.getElementById("amount").value = "63010";
    document.getElementById("product2").innerText = "63,010円";
  } else if (a == 92 && b == 2 && e == 1) {
    document.getElementById("amount").value = "54980";
    document.getElementById("product2").innerText = "54,980円";
  } else if (a == 93 && b == 2 && e == 1) {
    document.getElementById("amount").value = "48030";
    document.getElementById("product2").innerText = "48,030円";
  } else if (a == 94 && b == 2 && e == 1) {
    document.getElementById("amount").value = "42210";
    document.getElementById("product2").innerText = "42,210円";
  } else if (a == 95 && b == 2 && e == 1) {
    document.getElementById("amount").value = "37220";
    document.getElementById("product2").innerText = "37,220円";
  } else if (a == 96 && b == 2 && e == 1) {
    document.getElementById("amount").value = "33480";
    document.getElementById("product2").innerText = "33,480円";
  } else if (a == 97 && b == 2 && e == 1) {
    document.getElementById("amount").value = "30300";
    document.getElementById("product2").innerText = "30,300円";
  } else if (a == 98 && b == 2 && e == 1) {
    document.getElementById("amount").value = "27560";
    document.getElementById("product2").innerText = "27,560円";
  } else if (a == 99 && b == 2 && e == 1) {
    document.getElementById("amount").value = "25180";
    document.getElementById("product2").innerText = "25,180円";
  } else if (a == 52 && b == 1 && e == 2) {
    document.getElementById("amount").value = "2985080";
    document.getElementById("product2").innerText = "2,985,080円";
  } else if (a == 53 && b == 1 && e == 2) {
    document.getElementById("amount").value = "2816900";
    document.getElementById("product2").innerText = "2,816,900円";
  } else if (a == 54 && b == 1 && e == 2) {
    document.getElementById("amount").value = "2597400";
    document.getElementById("product2").innerText = "2,597,400円";
  } else if (a == 55 && b == 1 && e == 2) {
    document.getElementById("amount").value = "2409640";
    document.getElementById("product2").innerText = "2,409,640円";
  } else if (a == 56 && b == 1 && e == 2) {
    document.getElementById("amount").value = "2247200";
    document.getElementById("product2").innerText = "2,247,200円";
  } else if (a == 57 && b == 1 && e == 2) {
    document.getElementById("amount").value = "2105260";
    document.getElementById("product2").innerText = "2,105,260円";
  } else if (a == 58 && b == 1 && e == 2) {
    document.getElementById("amount").value = "1960780";
    document.getElementById("product2").innerText = "1,960,780円";
  } else if (a == 59 && b == 1 && e == 2) {
    document.getElementById("amount").value = "1834860";
    document.getElementById("product2").innerText = "1,834,860円";
  } else if (a == 60 && b == 1 && e == 2) {
    document.getElementById("amount").value = "1694920";
    document.getElementById("product2").innerText = "1,694,920円";
  } else if (a == 61 && b == 1 && e == 2) {
    document.getElementById("amount").value = "1538460";
    document.getElementById("product2").innerText = "1,538,460円";
  } else if (a == 62 && b == 1 && e == 2) {
    document.getElementById("amount").value = "1398600";
    document.getElementById("product2").innerText = "1,398,600円";
  } else if (a == 63 && b == 1 && e == 2) {
    document.getElementById("amount").value = "1282060";
    document.getElementById("product2").innerText = "1,282,060円";
  } else if (a == 64 && b == 1 && e == 2) {
    document.getElementById("amount").value = "1183440";
    document.getElementById("product2").innerText = "1,183,440円";
  } else if (a == 65 && b == 1 && e == 2) {
    document.getElementById("amount").value = "1081080";
    document.getElementById("product2").innerText = "1,081,080円";
  } else if (a == 66 && b == 1 && e == 2) {
    document.getElementById("amount").value = "990100";
    document.getElementById("product2").innerText = "990,100円";
  } else if (a == 67 && b == 1 && e == 2) {
    document.getElementById("amount").value = "913240";
    document.getElementById("product2").innerText = "913,240円";
  } else if (a == 68 && b == 1 && e == 2) {
    document.getElementById("amount").value = "843880";
    document.getElementById("product2").innerText = "843,880円";
  } else if (a == 69 && b == 1 && e == 2) {
    document.getElementById("amount").value = "778220";
    document.getElementById("product2").innerText = "778,220円";
  } else if (a == 70 && b == 1 && e == 2) {
    document.getElementById("amount").value = "714280";
    document.getElementById("product2").innerText = "714,280円";
  } else if (a == 71 && b == 1 && e == 2) {
    document.getElementById("amount").value = "653600";
    document.getElementById("product2").innerText = "653,600円";
  } else if (a == 72 && b == 1 && e == 2) {
    document.getElementById("amount").value = "600600";
    document.getElementById("product2").innerText = "600,600円";
  } else if (a == 73 && b == 1 && e == 2) {
    document.getElementById("amount").value = "554020";
    document.getElementById("product2").innerText = "554,020円";
  } else if (a == 74 && b == 1 && e == 2) {
    document.getElementById("amount").value = "511500";
    document.getElementById("product2").innerText = "511,500円";
  } else if (a == 75 && b == 1 && e == 2) {
    document.getElementById("amount").value = "465120";
    document.getElementById("product2").innerText = "465,120円";
  } else if (a == 76 && b == 1 && e == 2) {
    document.getElementById("amount").value = "419280";
    document.getElementById("product2").innerText = "419,280円";
  } else if (a == 77 && b == 1 && e == 2) {
    document.getElementById("amount").value = "374540";
    document.getElementById("product2").innerText = "374,540円";
  } else if (a == 78 && b == 1 && e == 2) {
    document.getElementById("amount").value = "332220";
    document.getElementById("product2").innerText = "332,220円";
  } else if (a == 79 && b == 1 && e == 2) {
    document.getElementById("amount").value = "294120";
    document.getElementById("product2").innerText = "294,120円";
  } else if (a == 80 && b == 1 && e == 2) {
    document.getElementById("amount").value = "263500";
    document.getElementById("product2").innerText = "263,500円";
  } else if (a == 81 && b == 1 && e == 2) {
    document.getElementById("amount").value = "235020";
    document.getElementById("product2").innerText = "235,020円";
  } else if (a == 82 && b == 1 && e == 2) {
    document.getElementById("amount").value = "209860";
    document.getElementById("product2").innerText = "209,860円";
  } else if (a == 83 && b == 1 && e == 2) {
    document.getElementById("amount").value = "187100";
    document.getElementById("product2").innerText = "187,100円";
  } else if (a == 84 && b == 1 && e == 2) {
    document.getElementById("amount").value = "166660";
    document.getElementById("product2").innerText = "166,660円";
  } else if (a == 85 && b == 1 && e == 2) {
    document.getElementById("amount").value = "148800";
    document.getElementById("product2").innerText = "148,800円";
  } else if (a == 86 && b == 1 && e == 2) {
    document.getElementById("amount").value = "133600";
    document.getElementById("product2").innerText = "133,600円";
  } else if (a == 87 && b == 1 && e == 2) {
    document.getElementById("amount").value = "120120";
    document.getElementById("product2").innerText = "120,120円";
  } else if (a == 88 && b == 1 && e == 2) {
    document.getElementById("amount").value = "108100";
    document.getElementById("product2").innerText = "108,100円";
  } else if (a == 89 && b == 1 && e == 2) {
    document.getElementById("amount").value = "97180";
    document.getElementById("product2").innerText = "97,180円";
  } else if (a == 90 && b == 1 && e == 2) {
    document.getElementById("amount").value = "87220";
    document.getElementById("product2").innerText = "87,220円";
  } else if (a == 91 && b == 1 && e == 2) {
    document.getElementById("amount").value = "78340";
    document.getElementById("product2").innerText = "78,340円";
  } else if (a == 92 && b == 1 && e == 2) {
    document.getElementById("amount").value = "70120";
    document.getElementById("product2").innerText = "70,120円";
  } else if (a == 93 && b == 1 && e == 2) {
    document.getElementById("amount").value = "62840";
    document.getElementById("product2").innerText = "62,840円";
  } else if (a == 94 && b == 1 && e == 2) {
    document.getElementById("amount").value = "56900";
    document.getElementById("product2").innerText = "56,900円";
  } else if (a == 95 && b == 1 && e == 2) {
    document.getElementById("amount").value = "52500";
    document.getElementById("product2").innerText = "52,500円";
  } else if (a == 96 && b == 1 && e == 2) {
    document.getElementById("amount").value = "48300";
    document.getElementById("product2").innerText = "48,300円";
  } else if (a == 97 && b == 1 && e == 2) {
    document.getElementById("amount").value = "44520";
    document.getElementById("product2").innerText = "44,520円";
  } else if (a == 98 && b == 1 && e == 2) {
    document.getElementById("amount").value = "41100";
    document.getElementById("product2").innerText = "41,100円";
  } else if (a == 99 && b == 1 && e == 2) {
    document.getElementById("amount").value = "37960";
    document.getElementById("product2").innerText = "37,960円";
  } else if (a == 61 && b == 2 && e == 2) {
    document.getElementById("amount").value = "2857140";
    document.getElementById("product2").innerText = "2,857,140円";
  } else if (a == 62 && b == 2 && e == 2) {
    document.getElementById("amount").value = "2702700";
    document.getElementById("product2").innerText = "2,702,700円";
  } else if (a == 63 && b == 2 && e == 2) {
    document.getElementById("amount").value = "2531640";
    document.getElementById("product2").innerText = "2,531,640円";
  } else if (a == 64 && b == 2 && e == 2) {
    document.getElementById("amount").value = "2380960";
    document.getElementById("product2").innerText = "2,380,960円";
  } else if (a == 65 && b == 2 && e == 2) {
    document.getElementById("amount").value = "2222220";
    document.getElementById("product2").innerText = "2,222,220円";
  } else if (a == 66 && b == 2 && e == 2) {
    document.getElementById("amount").value = "2083340";
    document.getElementById("product2").innerText = "2,083,340円";
  } else if (a == 67 && b == 2 && e == 2) {
    document.getElementById("amount").value = "1941740";
    document.getElementById("product2").innerText = "1,941,740円";
  } else if (a == 68 && b == 2 && e == 2) {
    document.getElementById("amount").value = "1801800";
    document.getElementById("product2").innerText = "1,801,800円";
  } else if (a == 69 && b == 2 && e == 2) {
    document.getElementById("amount").value = "1666660";
    document.getElementById("product2").innerText = "1,666,660円";
  } else if (a == 70 && b == 2 && e == 2) {
    document.getElementById("amount").value = "1526720";
    document.getElementById("product2").innerText = "1,526,720円";
  } else if (a == 71 && b == 2 && e == 2) {
    document.getElementById("amount").value = "1398600";
    document.getElementById("product2").innerText = "1,398,600円";
  } else if (a == 72 && b == 2 && e == 2) {
    document.getElementById("amount").value = "1273880";
    document.getElementById("product2").innerText = "1,273,880円";
  } else if (a == 73 && b == 2 && e == 2) {
    document.getElementById("amount").value = "1169600";
    document.getElementById("product2").innerText = "1,169,600円";
  } else if (a == 74 && b == 2 && e == 2) {
    document.getElementById("amount").value = "1069520";
    document.getElementById("product2").innerText = "1,069,520円";
  } else if (a == 75 && b == 2 && e == 2) {
    document.getElementById("amount").value = "970880";
    document.getElementById("product2").innerText = "970,880円";
  } else if (a == 76 && b == 2 && e == 2) {
    document.getElementById("amount").value = "865800";
    document.getElementById("product2").innerText = "865,800円";
  } else if (a == 77 && b == 2 && e == 2) {
    document.getElementById("amount").value = "763360";
    document.getElementById("product2").innerText = "763,360円";
  } else if (a == 78 && b == 2 && e == 2) {
    document.getElementById("amount").value = "671140";
    document.getElementById("product2").innerText = "671,140円";
  } else if (a == 79 && b == 2 && e == 2) {
    document.getElementById("amount").value = "589980";
    document.getElementById("product2").innerText = "589,980円";
  } else if (a == 80 && b == 2 && e == 2) {
    document.getElementById("amount").value = "523560";
    document.getElementById("product2").innerText = "523,560円";
  } else if (a == 81 && b == 2 && e == 2) {
    document.getElementById("amount").value = "462960";
    document.getElementById("product2").innerText = "462,960円";
  } else if (a == 82 && b == 2 && e == 2) {
    document.getElementById("amount").value = "408160";
    document.getElementById("product2").innerText = "408,160円";
  } else if (a == 83 && b == 2 && e == 2) {
    document.getElementById("amount").value = "357780";
    document.getElementById("product2").innerText = "357,780円";
  } else if (a == 84 && b == 2 && e == 2) {
    document.getElementById("amount").value = "314460";
    document.getElementById("product2").innerText = "314,460円";
  } else if (a == 85 && b == 2 && e == 2) {
    document.getElementById("amount").value = "277000";
    document.getElementById("product2").innerText = "277,000円";
  } else if (a == 86 && b == 2 && e == 2) {
    document.getElementById("amount").value = "243600";
    document.getElementById("product2").innerText = "243,600円";
  } else if (a == 87 && b == 2 && e == 2) {
    document.getElementById("amount").value = "213900";
    document.getElementById("product2").innerText = "213,900円";
  } else if (a == 88 && b == 2 && e == 2) {
    document.getElementById("amount").value = "186920";
    document.getElementById("product2").innerText = "186,920円";
  } else if (a == 89 && b == 2 && e == 2) {
    document.getElementById("amount").value = "163800";
    document.getElementById("product2").innerText = "163,800円";
  } else if (a == 90 && b == 2 && e == 2) {
    document.getElementById("amount").value = "143680";
    document.getElementById("product2").innerText = "143,680円";
  } else if (a == 91 && b == 2 && e == 2) {
    document.getElementById("amount").value = "126020";
    document.getElementById("product2").innerText = "126,020円";
  } else if (a == 92 && b == 2 && e == 2) {
    document.getElementById("amount").value = "109960";
    document.getElementById("product2").innerText = "109,960円";
  } else if (a == 93 && b == 2 && e == 2) {
    document.getElementById("amount").value = "96060";
    document.getElementById("product2").innerText = "96,060円";
  } else if (a == 94 && b == 2 && e == 2) {
    document.getElementById("amount").value = "84420";
    document.getElementById("product2").innerText = "84,420円";
  } else if (a == 95 && b == 2 && e == 2) {
    document.getElementById("amount").value = "74440";
    document.getElementById("product2").innerText = "74,440円";
  } else if (a == 96 && b == 2 && e == 2) {
    document.getElementById("amount").value = "66960";
    document.getElementById("product2").innerText = "66,960円";
  } else if (a == 97 && b == 2 && e == 2) {
    document.getElementById("amount").value = "60600";
    document.getElementById("product2").innerText = "60,600円";
  } else if (a == 98 && b == 2 && e == 2) {
    document.getElementById("amount").value = "55120";
    document.getElementById("product2").innerText = "55,120円";
  } else if (a == 99 && b == 2 && e == 2) {
    document.getElementById("amount").value = "50360";
    document.getElementById("product2").innerText = "50,360円";
  } else if (a == 58 && b == 1 && e == 3) {
    document.getElementById("amount").value = "2941170";
    document.getElementById("product2").innerText = "2,941,170円";
  } else if (a == 59 && b == 1 && e == 3) {
    document.getElementById("amount").value = "2752290";
    document.getElementById("product2").innerText = "2,752,290円";
  } else if (a == 60 && b == 1 && e == 3) {
    document.getElementById("amount").value = "2542380";
    document.getElementById("product2").innerText = "2,542,380円";
  } else if (a == 61 && b == 1 && e == 3) {
    document.getElementById("amount").value = "2307690";
    document.getElementById("product2").innerText = "2,307,690円";
  } else if (a == 62 && b == 1 && e == 3) {
    document.getElementById("amount").value = "2097900";
    document.getElementById("product2").innerText = "2,097,900円";
  } else if (a == 63 && b == 1 && e == 3) {
    document.getElementById("amount").value = "1923090";
    document.getElementById("product2").innerText = "1,923,090円";
  } else if (a == 64 && b == 1 && e == 3) {
    document.getElementById("amount").value = "1775160";
    document.getElementById("product2").innerText = "1,775,160円";
  } else if (a == 65 && b == 1 && e == 3) {
    document.getElementById("amount").value = "1621620";
    document.getElementById("product2").innerText = "1,621,620円";
  } else if (a == 66 && b == 1 && e == 3) {
    document.getElementById("amount").value = "1485150";
    document.getElementById("product2").innerText = "1,485,150円";
  } else if (a == 67 && b == 1 && e == 3) {
    document.getElementById("amount").value = "1369860";
    document.getElementById("product2").innerText = "1,369,860円";
  } else if (a == 68 && b == 1 && e == 3) {
    document.getElementById("amount").value = "1265820";
    document.getElementById("product2").innerText = "1,265,820円";
  } else if (a == 69 && b == 1 && e == 3) {
    document.getElementById("amount").value = "1167330";
    document.getElementById("product2").innerText = "1,167,330円";
  } else if (a == 70 && b == 1 && e == 3) {
    document.getElementById("amount").value = "1071420";
    document.getElementById("product2").innerText = "1,071,420円";
  } else if (a == 71 && b == 1 && e == 3) {
    document.getElementById("amount").value = "980400";
    document.getElementById("product2").innerText = "980,400円";
  } else if (a == 72 && b == 1 && e == 3) {
    document.getElementById("amount").value = "900900";
    document.getElementById("product2").innerText = "900,900円";
  } else if (a == 73 && b == 1 && e == 3) {
    document.getElementById("amount").value = "831030";
    document.getElementById("product2").innerText = "831,030円";
  } else if (a == 74 && b == 1 && e == 3) {
    document.getElementById("amount").value = "767250";
    document.getElementById("product2").innerText = "767,250円";
  } else if (a == 75 && b == 1 && e == 3) {
    document.getElementById("amount").value = "697680";
    document.getElementById("product2").innerText = "697,680円";
  } else if (a == 76 && b == 1 && e == 3) {
    document.getElementById("amount").value = "628920";
    document.getElementById("product2").innerText = "628,920円";
  } else if (a == 77 && b == 1 && e == 3) {
    document.getElementById("amount").value = "561810";
    document.getElementById("product2").innerText = "561,810円";
  } else if (a == 78 && b == 1 && e == 3) {
    document.getElementById("amount").value = "498330";
    document.getElementById("product2").innerText = "498,330円";
  } else if (a == 79 && b == 1 && e == 3) {
    document.getElementById("amount").value = "441180";
    document.getElementById("product2").innerText = "441,180円";
  } else if (a == 80 && b == 1 && e == 3) {
    document.getElementById("amount").value = "395250";
    document.getElementById("product2").innerText = "395,250円";
  } else if (a == 81 && b == 1 && e == 3) {
    document.getElementById("amount").value = "352530";
    document.getElementById("product2").innerText = "352,530円";
  } else if (a == 82 && b == 1 && e == 3) {
    document.getElementById("amount").value = "314790";
    document.getElementById("product2").innerText = "314,790円";
  } else if (a == 83 && b == 1 && e == 3) {
    document.getElementById("amount").value = "280650";
    document.getElementById("product2").innerText = "280,650円";
  } else if (a == 84 && b == 1 && e == 3) {
    document.getElementById("amount").value = "249990";
    document.getElementById("product2").innerText = "249,990円";
  } else if (a == 85 && b == 1 && e == 3) {
    document.getElementById("amount").value = "223200";
    document.getElementById("product2").innerText = "223,200円";
  } else if (a == 86 && b == 1 && e == 3) {
    document.getElementById("amount").value = "200400";
    document.getElementById("product2").innerText = "200,400円";
  } else if (a == 87 && b == 1 && e == 3) {
    document.getElementById("amount").value = "180180";
    document.getElementById("product2").innerText = "180,180円";
  } else if (a == 88 && b == 1 && e == 3) {
    document.getElementById("amount").value = "162150";
    document.getElementById("product2").innerText = "162,150円";
  } else if (a == 89 && b == 1 && e == 3) {
    document.getElementById("amount").value = "145770";
    document.getElementById("product2").innerText = "145,770円";
  } else if (a == 90 && b == 1 && e == 3) {
    document.getElementById("amount").value = "130830";
    document.getElementById("product2").innerText = "130,830円";
  } else if (a == 91 && b == 1 && e == 3) {
    document.getElementById("amount").value = "117510";
    document.getElementById("product2").innerText = "117,510円";
  } else if (a == 92 && b == 1 && e == 3) {
    document.getElementById("amount").value = "105180";
    document.getElementById("product2").innerText = "105,180円";
  } else if (a == 93 && b == 1 && e == 3) {
    document.getElementById("amount").value = "94260";
    document.getElementById("product2").innerText = "94,260円";
  } else if (a == 94 && b == 1 && e == 3) {
    document.getElementById("amount").value = "85350";
    document.getElementById("product2").innerText = "85,350円";
  } else if (a == 95 && b == 1 && e == 3) {
    document.getElementById("amount").value = "78750";
    document.getElementById("product2").innerText = "78,750円";
  } else if (a == 96 && b == 1 && e == 3) {
    document.getElementById("amount").value = "72450";
    document.getElementById("product2").innerText = "72,450円";
  } else if (a == 97 && b == 1 && e == 3) {
    document.getElementById("amount").value = "66780";
    document.getElementById("product2").innerText = "66,780円";
  } else if (a == 98 && b == 1 && e == 3) {
    document.getElementById("amount").value = "61650";
    document.getElementById("product2").innerText = "61,650円";
  } else if (a == 99 && b == 1 && e == 3) {
    document.getElementById("amount").value = "56940";
    document.getElementById("product2").innerText = "56,940円";
  } else if (a == 67 && b == 2 && e == 3) {
    document.getElementById("amount").value = "2912610";
    document.getElementById("product2").innerText = "2,912,610円";
  } else if (a == 68 && b == 2 && e == 3) {
    document.getElementById("amount").value = "2702700";
    document.getElementById("product2").innerText = "2,702,700円";
  } else if (a == 69 && b == 2 && e == 3) {
    document.getElementById("amount").value = "2499990";
    document.getElementById("product2").innerText = "2,499,990円";
  } else if (a == 70 && b == 2 && e == 3) {
    document.getElementById("amount").value = "2290080";
    document.getElementById("product2").innerText = "2,290,080円";
  } else if (a == 71 && b == 2 && e == 3) {
    document.getElementById("amount").value = "2097900";
    document.getElementById("product2").innerText = "2,097,900円";
  } else if (a == 72 && b == 2 && e == 3) {
    document.getElementById("amount").value = "1910820";
    document.getElementById("product2").innerText = "1,910,820円";
  } else if (a == 73 && b == 2 && e == 3) {
    document.getElementById("amount").value = "1754400";
    document.getElementById("product2").innerText = "1,754,400円";
  } else if (a == 74 && b == 2 && e == 3) {
    document.getElementById("amount").value = "1604280";
    document.getElementById("product2").innerText = "1,604,280円";
  } else if (a == 75 && b == 2 && e == 3) {
    document.getElementById("amount").value = "1456320";
    document.getElementById("product2").innerText = "1,456,320円";
  } else if (a == 76 && b == 2 && e == 3) {
    document.getElementById("amount").value = "1298700";
    document.getElementById("product2").innerText = "1,298,700円";
  } else if (a == 77 && b == 2 && e == 3) {
    document.getElementById("amount").value = "1145040";
    document.getElementById("product2").innerText = "1,145,040円";
  } else if (a == 78 && b == 2 && e == 3) {
    document.getElementById("amount").value = "1006710";
    document.getElementById("product2").innerText = "1,006,710円";
  } else if (a == 79 && b == 2 && e == 3) {
    document.getElementById("amount").value = "884970";
    document.getElementById("product2").innerText = "884,970円";
  } else if (a == 80 && b == 2 && e == 3) {
    document.getElementById("amount").value = "785340";
    document.getElementById("product2").innerText = "785,340円";
  } else if (a == 81 && b == 2 && e == 3) {
    document.getElementById("amount").value = "694440";
    document.getElementById("product2").innerText = "694,440円";
  } else if (a == 82 && b == 2 && e == 3) {
    document.getElementById("amount").value = "612240";
    document.getElementById("product2").innerText = "612,240円";
  } else if (a == 83 && b == 2 && e == 3) {
    document.getElementById("amount").value = "536670";
    document.getElementById("product2").innerText = "536,670円";
  } else if (a == 84 && b == 2 && e == 3) {
    document.getElementById("amount").value = "471690";
    document.getElementById("product2").innerText = "471,690円";
  } else if (a == 85 && b == 2 && e == 3) {
    document.getElementById("amount").value = "415500";
    document.getElementById("product2").innerText = "415,500円";
  } else if (a == 86 && b == 2 && e == 3) {
    document.getElementById("amount").value = "365400";
    document.getElementById("product2").innerText = "365,400円";
  } else if (a == 87 && b == 2 && e == 3) {
    document.getElementById("amount").value = "320850";
    document.getElementById("product2").innerText = "320,850円";
  } else if (a == 88 && b == 2 && e == 3) {
    document.getElementById("amount").value = "280380";
    document.getElementById("product2").innerText = "280,380円";
  } else if (a == 89 && b == 2 && e == 3) {
    document.getElementById("amount").value = "245700";
    document.getElementById("product2").innerText = "245,700円";
  } else if (a == 90 && b == 2 && e == 3) {
    document.getElementById("amount").value = "215520";
    document.getElementById("product2").innerText = "215,520円";
  } else if (a == 91 && b == 2 && e == 3) {
    document.getElementById("amount").value = "189030";
    document.getElementById("product2").innerText = "189,030円";
  } else if (a == 92 && b == 2 && e == 3) {
    document.getElementById("amount").value = "164940";
    document.getElementById("product2").innerText = "164,940円";
  } else if (a == 93 && b == 2 && e == 3) {
    document.getElementById("amount").value = "144090";
    document.getElementById("product2").innerText = "144,090円";
  } else if (a == 94 && b == 2 && e == 3) {
    document.getElementById("amount").value = "126630";
    document.getElementById("product2").innerText = "126,630円";
  } else if (a == 95 && b == 2 && e == 3) {
    document.getElementById("amount").value = "111660";
    document.getElementById("product2").innerText = "111,660円";
  } else if (a == 96 && b == 2 && e == 3) {
    document.getElementById("amount").value = "100440";
    document.getElementById("product2").innerText = "100,440円";
  } else if (a == 97 && b == 2 && e == 3) {
    document.getElementById("amount").value = "90900";
    document.getElementById("product2").innerText = "90,900円";
  } else if (a == 98 && b == 2 && e == 3) {
    document.getElementById("amount").value = "82680";
    document.getElementById("product2").innerText = "82,680円";
  } else if (a == 99 && b == 2 && e == 3) {
    document.getElementById("amount").value = "75540";
    document.getElementById("product2").innerText = "75,540円";
  } else if (a == 64 && b == 1 && e == 4) {
    document.getElementById("amount").value = "2958600";
    document.getElementById("product2").innerText = "2,958,600円";
  } else if (a == 65 && b == 1 && e == 4) {
    document.getElementById("amount").value = "2702700";
    document.getElementById("product2").innerText = "2,702,700円";
  } else if (a == 66 && b == 1 && e == 4) {
    document.getElementById("amount").value = "2475250";
    document.getElementById("product2").innerText = "2,475,250円";
  } else if (a == 67 && b == 1 && e == 4) {
    document.getElementById("amount").value = "2283100";
    document.getElementById("product2").innerText = "2,283,100円";
  } else if (a == 68 && b == 1 && e == 4) {
    document.getElementById("amount").value = "2109700";
    document.getElementById("product2").innerText = "2,109,700円";
  } else if (a == 69 && b == 1 && e == 4) {
    document.getElementById("amount").value = "1945550";
    document.getElementById("product2").innerText = "1,945,550円";
  } else if (a == 70 && b == 1 && e == 4) {
    document.getElementById("amount").value = "1785700";
    document.getElementById("product2").innerText = "1,785,700円";
  } else if (a == 71 && b == 1 && e == 4) {
    document.getElementById("amount").value = "1634000";
    document.getElementById("product2").innerText = "1,634,000円";
  } else if (a == 72 && b == 1 && e == 4) {
    document.getElementById("amount").value = "1501500";
    document.getElementById("product2").innerText = "1,501,500円";
  } else if (a == 73 && b == 1 && e == 4) {
    document.getElementById("amount").value = "1385050";
    document.getElementById("product2").innerText = "1,385,050円";
  } else if (a == 74 && b == 1 && e == 4) {
    document.getElementById("amount").value = "1278750";
    document.getElementById("product2").innerText = "1,278,750円";
  } else if (a == 75 && b == 1 && e == 4) {
    document.getElementById("amount").value = "1162800";
    document.getElementById("product2").innerText = "1,162,800円";
  } else if (a == 76 && b == 1 && e == 4) {
    document.getElementById("amount").value = "1048200";
    document.getElementById("product2").innerText = "1,048,200円";
  } else if (a == 77 && b == 1 && e == 4) {
    document.getElementById("amount").value = "936350";
    document.getElementById("product2").innerText = "936,350円";
  } else if (a == 78 && b == 1 && e == 4) {
    document.getElementById("amount").value = "830550";
    document.getElementById("product2").innerText = "830,550円";
  } else if (a == 79 && b == 1 && e == 4) {
    document.getElementById("amount").value = "735300";
    document.getElementById("product2").innerText = "735,300円";
  } else if (a == 80 && b == 1 && e == 4) {
    document.getElementById("amount").value = "658750";
    document.getElementById("product2").innerText = "658,750円";
  } else if (a == 81 && b == 1 && e == 4) {
    document.getElementById("amount").value = "587550";
    document.getElementById("product2").innerText = "587,550円";
  } else if (a == 82 && b == 1 && e == 4) {
    document.getElementById("amount").value = "524650";
    document.getElementById("product2").innerText = "524,650円";
  } else if (a == 83 && b == 1 && e == 4) {
    document.getElementById("amount").value = "467750";
    document.getElementById("product2").innerText = "467,750円";
  } else if (a == 84 && b == 1 && e == 4) {
    document.getElementById("amount").value = "416650";
    document.getElementById("product2").innerText = "416,650円";
  } else if (a == 85 && b == 1 && e == 4) {
    document.getElementById("amount").value = "372000";
    document.getElementById("product2").innerText = "372,000円";
  } else if (a == 86 && b == 1 && e == 4) {
    document.getElementById("amount").value = "334000";
    document.getElementById("product2").innerText = "334,000円";
  } else if (a == 87 && b == 1 && e == 4) {
    document.getElementById("amount").value = "300300";
    document.getElementById("product2").innerText = "300,300円";
  } else if (a == 88 && b == 1 && e == 4) {
    document.getElementById("amount").value = "270250";
    document.getElementById("product2").innerText = "270,250円";
  } else if (a == 89 && b == 1 && e == 4) {
    document.getElementById("amount").value = "242950";
    document.getElementById("product2").innerText = "242,950円";
  } else if (a == 90 && b == 1 && e == 4) {
    document.getElementById("amount").value = "218050";
    document.getElementById("product2").innerText = "218,050円";
  } else if (a == 91 && b == 1 && e == 4) {
    document.getElementById("amount").value = "195850";
    document.getElementById("product2").innerText = "195,850円";
  } else if (a == 92 && b == 1 && e == 4) {
    document.getElementById("amount").value = "175300";
    document.getElementById("product2").innerText = "175,300円";
  } else if (a == 93 && b == 1 && e == 4) {
    document.getElementById("amount").value = "157100";
    document.getElementById("product2").innerText = "157,100円";
  } else if (a == 94 && b == 1 && e == 4) {
    document.getElementById("amount").value = "142250";
    document.getElementById("product2").innerText = "142,250円";
  } else if (a == 95 && b == 1 && e == 4) {
    document.getElementById("amount").value = "131250";
    document.getElementById("product2").innerText = "131,250円";
  } else if (a == 96 && b == 1 && e == 4) {
    document.getElementById("amount").value = "120750";
    document.getElementById("product2").innerText = "120,750円";
  } else if (a == 97 && b == 1 && e == 4) {
    document.getElementById("amount").value = "111300";
    document.getElementById("product2").innerText = "111,300円";
  } else if (a == 98 && b == 1 && e == 4) {
    document.getElementById("amount").value = "102750";
    document.getElementById("product2").innerText = "102,750円";
  } else if (a == 99 && b == 1 && e == 4) {
    document.getElementById("amount").value = "94900";
    document.getElementById("product2").innerText = "94,900円";
  } else if (a == 73 && b == 2 && e == 4) {
    document.getElementById("amount").value = "2924000";
    document.getElementById("product2").innerText = "2,924,000円";
  } else if (a == 74 && b == 2 && e == 4) {
    document.getElementById("amount").value = "2673800";
    document.getElementById("product2").innerText = "2,673,800円";
  } else if (a == 75 && b == 2 && e == 4) {
    document.getElementById("amount").value = "2427200";
    document.getElementById("product2").innerText = "2,427,200円";
  } else if (a == 76 && b == 2 && e == 4) {
    document.getElementById("amount").value = "2164500";
    document.getElementById("product2").innerText = "2,164,500円";
  } else if (a == 77 && b == 2 && e == 4) {
    document.getElementById("amount").value = "1908400";
    document.getElementById("product2").innerText = "1,908,400円";
  } else if (a == 78 && b == 2 && e == 4) {
    document.getElementById("amount").value = "1677850";
    document.getElementById("product2").innerText = "1,677,850円";
  } else if (a == 79 && b == 2 && e == 4) {
    document.getElementById("amount").value = "1474950";
    document.getElementById("product2").innerText = "1,474,950円";
  } else if (a == 80 && b == 2 && e == 4) {
    document.getElementById("amount").value = "1308900";
    document.getElementById("product2").innerText = "1,308,900円";
  } else if (a == 81 && b == 2 && e == 4) {
    document.getElementById("amount").value = "1157400";
    document.getElementById("product2").innerText = "1,157,400円";
  } else if (a == 82 && b == 2 && e == 4) {
    document.getElementById("amount").value = "1020400";
    document.getElementById("product2").innerText = "1,020,400円";
  } else if (a == 83 && b == 2 && e == 4) {
    document.getElementById("amount").value = "894450";
    document.getElementById("product2").innerText = "894,450円";
  } else if (a == 84 && b == 2 && e == 4) {
    document.getElementById("amount").value = "786150";
    document.getElementById("product2").innerText = "786,150円";
  } else if (a == 85 && b == 2 && e == 4) {
    document.getElementById("amount").value = "692500";
    document.getElementById("product2").innerText = "692,500円";
  } else if (a == 86 && b == 2 && e == 4) {
    document.getElementById("amount").value = "609000";
    document.getElementById("product2").innerText = "609,000円";
  } else if (a == 87 && b == 2 && e == 4) {
    document.getElementById("amount").value = "534750";
    document.getElementById("product2").innerText = "534,750円";
  } else if (a == 88 && b == 2 && e == 4) {
    document.getElementById("amount").value = "467300";
    document.getElementById("product2").innerText = "467,300円";
  } else if (a == 89 && b == 2 && e == 4) {
    document.getElementById("amount").value = "409500";
    document.getElementById("product2").innerText = "409,500円";
  } else if (a == 90 && b == 2 && e == 4) {
    document.getElementById("amount").value = "359200";
    document.getElementById("product2").innerText = "359,200円";
  } else if (a == 91 && b == 2 && e == 4) {
    document.getElementById("amount").value = "315050";
    document.getElementById("product2").innerText = "315,050円";
  } else if (a == 92 && b == 2 && e == 4) {
    document.getElementById("amount").value = "274900";
    document.getElementById("product2").innerText = "274,900円";
  } else if (a == 93 && b == 2 && e == 4) {
    document.getElementById("amount").value = "240150";
    document.getElementById("product2").innerText = "240,150円";
  } else if (a == 94 && b == 2 && e == 4) {
    document.getElementById("amount").value = "211050";
    document.getElementById("product2").innerText = "211,050円";
  } else if (a == 95 && b == 2 && e == 4) {
    document.getElementById("amount").value = "186100";
    document.getElementById("product2").innerText = "186,100円";
  } else if (a == 96 && b == 2 && e == 4) {
    document.getElementById("amount").value = "167400";
    document.getElementById("product2").innerText = "167,400円";
  } else if (a == 97 && b == 2 && e == 4) {
    document.getElementById("amount").value = "151500";
    document.getElementById("product2").innerText = "151,500円";
  } else if (a == 98 && b == 2 && e == 4) {
    document.getElementById("amount").value = "137800";
    document.getElementById("product2").innerText = "137,800円";
  } else if (a == 99 && b == 2 && e == 4) {
    document.getElementById("amount").value = "125900";
    document.getElementById("product2").innerText = "125,900円";
  } else if (a == 50 && b == 1 && e == 5) {
    document.getElementById("amount").value = "1468400";
    document.getElementById("product2").innerText = "1,468,400円";
  } else if (a == 51 && b == 1 && e == 5) {
    document.getElementById("amount").value = "1375500";
    document.getElementById("product2").innerText = "1,375,500円";
  } else if (a == 52 && b == 1 && e == 5) {
    document.getElementById("amount").value = "1282100";
    document.getElementById("product2").innerText = "1,282,100円";
  } else if (a == 53 && b == 1 && e == 5) {
    document.getElementById("amount").value = "1199000";
    document.getElementById("product2").innerText = "1,199,000円";
  } else if (a == 54 && b == 1 && e == 5) {
    document.getElementById("amount").value = "1114800";
    document.getElementById("product2").innerText = "1,114,800円";
  } else if (a == 55 && b == 1 && e == 5) {
    document.getElementById("amount").value = "1033100";
    document.getElementById("product2").innerText = "1,033,100円";
  } else if (a == 56 && b == 1 && e == 5) {
    document.getElementById("amount").value = "959700";
    document.getElementById("product2").innerText = "959,700円";
  } else if (a == 57 && b == 1 && e == 5) {
    document.getElementById("amount").value = "896900";
    document.getElementById("product2").innerText = "896,900円";
  } else if (a == 58 && b == 1 && e == 5) {
    document.getElementById("amount").value = "841000";
    document.getElementById("product2").innerText = "841,000円";
  } else if (a == 59 && b == 1 && e == 5) {
    document.getElementById("amount").value = "784300";
    document.getElementById("product2").innerText = "784,300円";
  } else if (a == 60 && b == 1 && e == 5) {
    document.getElementById("amount").value = "725700";
    document.getElementById("product2").innerText = "725,700円";
  } else if (a == 61 && b == 1 && e == 5) {
    document.getElementById("amount").value = "660500";
    document.getElementById("product2").innerText = "660,500円";
  } else if (a == 62 && b == 1 && e == 5) {
    document.getElementById("amount").value = "600600";
    document.getElementById("product2").innerText = "600,600円";
  } else if (a == 63 && b == 1 && e == 5) {
    document.getElementById("amount").value = "549800";
    document.getElementById("product2").innerText = "549,800円";
  } else if (a == 64 && b == 1 && e == 5) {
    document.getElementById("amount").value = "507100";
    document.getElementById("product2").innerText = "507,100円";
  } else if (a == 65 && b == 1 && e == 5) {
    document.getElementById("amount").value = "464300";
    document.getElementById("product2").innerText = "464,300円";
  } else if (a == 66 && b == 1 && e == 5) {
    document.getElementById("amount").value = "425900";
    document.getElementById("product2").innerText = "425,900円";
  } else if (a == 67 && b == 1 && e == 5) {
    document.getElementById("amount").value = "392800";
    document.getElementById("product2").innerText = "392,800円";
  } else if (a == 68 && b == 1 && e == 5) {
    document.getElementById("amount").value = "361900";
    document.getElementById("product2").innerText = "361,900円";
  } else if (a == 69 && b == 1 && e == 5) {
    document.getElementById("amount").value = "334100";
    document.getElementById("product2").innerText = "334,100円";
  } else if (a == 70 && b == 1 && e == 5) {
    document.getElementById("amount").value = "307400";
    document.getElementById("product2").innerText = "307,400円";
  } else if (a == 71 && b == 1 && e == 5) {
    document.getElementById("amount").value = "281800";
    document.getElementById("product2").innerText = "281,800円";
  } else if (a == 72 && b == 1 && e == 5) {
    document.getElementById("amount").value = "258600";
    document.getElementById("product2").innerText = "258,600円";
  } else if (a == 73 && b == 1 && e == 5) {
    document.getElementById("amount").value = "239300";
    document.getElementById("product2").innerText = "239,300円";
  } else if (a == 74 && b == 1 && e == 5) {
    document.getElementById("amount").value = "220800";
    document.getElementById("product2").innerText = "220,800円";
  } else if (a == 75 && b == 1 && e == 5) {
    document.getElementById("amount").value = "201400";
    document.getElementById("product2").innerText = "201,400円";
  } else if (a == 76 && b == 1 && e == 5) {
    document.getElementById("amount").value = "181800";
    document.getElementById("product2").innerText = "181,800円";
  } else if (a == 77 && b == 1 && e == 5) {
    document.getElementById("amount").value = "162700";
    document.getElementById("product2").innerText = "162,700円";
  } else if (a == 78 && b == 1 && e == 5) {
    document.getElementById("amount").value = "144600";
    document.getElementById("product2").innerText = "144,600円";
  } else if (a == 79 && b == 1 && e == 5) {
    document.getElementById("amount").value = "128400";
    document.getElementById("product2").innerText = "128,400円";
  } else if (a == 80 && b == 1 && e == 5) {
    document.getElementById("amount").value = "115300";
    document.getElementById("product2").innerText = "115,300円";
  } else if (a == 81 && b == 1 && e == 5) {
    document.getElementById("amount").value = "103300";
    document.getElementById("product2").innerText = "103,300円";
  } else if (a == 82 && b == 1 && e == 5) {
    document.getElementById("amount").value = "92500";
    document.getElementById("product2").innerText = "92,500円";
  } else if (a == 83 && b == 1 && e == 5) {
    document.getElementById("amount").value = "82900";
    document.getElementById("product2").innerText = "82,900円";
  } else if (a == 84 && b == 1 && e == 5) {
    document.getElementById("amount").value = "74200";
    document.getElementById("product2").innerText = "74,200円";
  } else if (a == 85 && b == 1 && e == 5) {
    document.getElementById("amount").value = "66600";
    document.getElementById("product2").innerText = "66,600円";
  } else if (a == 86 && b == 1 && e == 5) {
    document.getElementById("amount").value = "60200";
    document.getElementById("product2").innerText = "60,200円";
  } else if (a == 87 && b == 1 && e == 5) {
    document.getElementById("amount").value = "54500";
    document.getElementById("product2").innerText = "54,500円";
  } else if (a == 88 && b == 1 && e == 5) {
    document.getElementById("amount").value = "49400";
    document.getElementById("product2").innerText = "49,400円";
  } else if (a == 89 && b == 1 && e == 5) {
    document.getElementById("amount").value = "44800";
    document.getElementById("product2").innerText = "44,800円";
  } else if (a == 90 && b == 1 && e == 5) {
    document.getElementById("amount").value = "40600";
    document.getElementById("product2").innerText = "40,600円";
  } else if (a == 91 && b == 1 && e == 5) {
    document.getElementById("amount").value = "36800";
    document.getElementById("product2").innerText = "36,800円";
  } else if (a == 92 && b == 1 && e == 5) {
    document.getElementById("amount").value = "33400";
    document.getElementById("product2").innerText = "33,400円";
  } else if (a == 93 && b == 1 && e == 5) {
    document.getElementById("amount").value = "30300";
    document.getElementById("product2").innerText = "30,300円";
  } else if (a == 94 && b == 1 && e == 5) {
    document.getElementById("amount").value = "27800";
    document.getElementById("product2").innerText = "27,800円";
  } else if (a == 95 && b == 1 && e == 5) {
    document.getElementById("amount").value = "26000";
    document.getElementById("product2").innerText = "26,000円";
  } else if (a == 96 && b == 1 && e == 5) {
    document.getElementById("amount").value = "24200";
    document.getElementById("product2").innerText = "24,200円";
  } else if (a == 97 && b == 1 && e == 5) {
    document.getElementById("amount").value = "22600";
    document.getElementById("product2").innerText = "22,600円";
  } else if (a == 98 && b == 1 && e == 5) {
    document.getElementById("amount").value = "21200";
    document.getElementById("product2").innerText = "21,200円";
  } else if (a == 99 && b == 1 && e == 5) {
    document.getElementById("amount").value = "19900";
    document.getElementById("product2").innerText = "19,900円";
  } else if (a == 50 && b == 2 && e == 5) {
    document.getElementById("amount").value = "2132200";
    document.getElementById("product2").innerText = "2,132,200円";
  } else if (a == 51 && b == 2 && e == 5) {
    document.getElementById("amount").value = "2008000";
    document.getElementById("product2").innerText = "2,008,000円";
  } else if (a == 52 && b == 2 && e == 5) {
    document.getElementById("amount").value = "1893900";
    document.getElementById("product2").innerText = "1,893,900円";
  } else if (a == 53 && b == 2 && e == 5) {
    document.getElementById("amount").value = "1792100";
    document.getElementById("product2").innerText = "1,792,100円";
  } else if (a == 54 && b == 2 && e == 5) {
    document.getElementById("amount").value = "1706500";
    document.getElementById("product2").innerText = "1,706,500円";
  } else if (a == 55 && b == 2 && e == 5) {
    document.getElementById("amount").value = "1634000";
    document.getElementById("product2").innerText = "1,634,000円";
  } else if (a == 56 && b == 2 && e == 5) {
    document.getElementById("amount").value = "1577300";
    document.getElementById("product2").innerText = "1,577,300円";
  } else if (a == 57 && b == 2 && e == 5) {
    document.getElementById("amount").value = "1522100";
    document.getElementById("product2").innerText = "1,522,100円";
  } else if (a == 58 && b == 2 && e == 5) {
    document.getElementById("amount").value = "1466300";
    document.getElementById("product2").innerText = "1,466,300円";
  } else if (a == 59 && b == 2 && e == 5) {
    document.getElementById("amount").value = "1388900";
    document.getElementById("product2").innerText = "1,388,900円";
  } else if (a == 60 && b == 2 && e == 5) {
    document.getElementById("amount").value = "1307200";
    document.getElementById("product2").innerText = "1,307,200円";
  } else if (a == 61 && b == 2 && e == 5) {
    document.getElementById("amount").value = "1222500";
    document.getElementById("product2").innerText = "1,222,500円";
  } else if (a == 62 && b == 2 && e == 5) {
    document.getElementById("amount").value = "1149400";
    document.getElementById("product2").innerText = "1,149,400円";
  } else if (a == 63 && b == 2 && e == 5) {
    document.getElementById("amount").value = "1083400";
    document.getElementById("product2").innerText = "1,083,400円";
  } else if (a == 64 && b == 2 && e == 5) {
    document.getElementById("amount").value = "1020400";
    document.getElementById("product2").innerText = "1,020,400円";
  } else if (a == 65 && b == 2 && e == 5) {
    document.getElementById("amount").value = "953300";
    document.getElementById("product2").innerText = "953,300円";
  } else if (a == 66 && b == 2 && e == 5) {
    document.getElementById("amount").value = "887300";
    document.getElementById("product2").innerText = "887,300円";
  } else if (a == 67 && b == 2 && e == 5) {
    document.getElementById("amount").value = "827800";
    document.getElementById("product2").innerText = "827,800円";
  } else if (a == 68 && b == 2 && e == 5) {
    document.getElementById("amount").value = "769200";
    document.getElementById("product2").innerText = "769,200円";
  } else if (a == 69 && b == 2 && e == 5) {
    document.getElementById("amount").value = "711700";
    document.getElementById("product2").innerText = "711,700円";
  } else if (a == 70 && b == 2 && e == 5) {
    document.getElementById("amount").value = "654000";
    document.getElementById("product2").innerText = "654,000円";
  } else if (a == 71 && b == 2 && e == 5) {
    document.getElementById("amount").value = "598400";
    document.getElementById("product2").innerText = "598,400円";
  } else if (a == 72 && b == 2 && e == 5) {
    document.getElementById("amount").value = "546100";
    document.getElementById("product2").innerText = "546,100円";
  } else if (a == 73 && b == 2 && e == 5) {
    document.getElementById("amount").value = "501800";
    document.getElementById("product2").innerText = "501,800円";
  } else if (a == 74 && b == 2 && e == 5) {
    document.getElementById("amount").value = "459600";
    document.getElementById("product2").innerText = "459,600円";
  } else if (a == 75 && b == 2 && e == 5) {
    document.getElementById("amount").value = "415800";
    document.getElementById("product2").innerText = "415,800円";
  } else if (a == 76 && b == 2 && e == 5) {
    document.getElementById("amount").value = "371200";
    document.getElementById("product2").innerText = "371,200円";
  } else if (a == 77 && b == 2 && e == 5) {
    document.getElementById("amount").value = "328400";
    document.getElementById("product2").innerText = "328,400円";
  } else if (a == 78 && b == 2 && e == 5) {
    document.getElementById("amount").value = "289400";
    document.getElementById("product2").innerText = "289,400円";
  } else if (a == 79 && b == 2 && e == 5) {
    document.getElementById("amount").value = "254300";
    document.getElementById("product2").innerText = "254,300円";
  } else if (a == 80 && b == 2 && e == 5) {
    document.getElementById("amount").value = "226100";
    document.getElementById("product2").innerText = "226,100円";
  } else if (a == 81 && b == 2 && e == 5) {
    document.getElementById("amount").value = "200600";
    document.getElementById("product2").innerText = "200,600円";
  } else if (a == 82 && b == 2 && e == 5) {
    document.getElementById("amount").value = "176900";
    document.getElementById("product2").innerText = "176,900円";
  } else if (a == 83 && b == 2 && e == 5) {
    document.getElementById("amount").value = "155700";
    document.getElementById("product2").innerText = "155,700円";
  } else if (a == 84 && b == 2 && e == 5) {
    document.getElementById("amount").value = "137200";
    document.getElementById("product2").innerText = "137,200円";
  } else if (a == 85 && b == 2 && e == 5) {
    document.getElementById("amount").value = "121200";
    document.getElementById("product2").innerText = "121,200円";
  } else if (a == 86 && b == 2 && e == 5) {
    document.getElementById("amount").value = "107100";
    document.getElementById("product2").innerText = "107,100円";
  } else if (a == 87 && b == 2 && e == 5) {
    document.getElementById("amount").value = "94400";
    document.getElementById("product2").innerText = "94,400円";
  } else if (a == 88 && b == 2 && e == 5) {
    document.getElementById("amount").value = "83000";
    document.getElementById("product2").innerText = "83,000円";
  } else if (a == 89 && b == 2 && e == 5) {
    document.getElementById("amount").value = "73200";
    document.getElementById("product2").innerText = "73,200円";
  } else if (a == 90 && b == 2 && e == 5) {
    document.getElementById("amount").value = "64600";
    document.getElementById("product2").innerText = "64,600円";
  } else if (a == 91 && b == 2 && e == 5) {
    document.getElementById("amount").value = "57200";
    document.getElementById("product2").innerText = "57,200円";
  } else if (a == 92 && b == 2 && e == 5) {
    document.getElementById("amount").value = "50300";
    document.getElementById("product2").innerText = "50,300円";
  } else if (a == 93 && b == 2 && e == 5) {
    document.getElementById("amount").value = "44500";
    document.getElementById("product2").innerText = "44,500円";
  } else if (a == 94 && b == 2 && e == 5) {
    document.getElementById("amount").value = "39500";
    document.getElementById("product2").innerText = "39,500円";
  } else if (a == 95 && b == 2 && e == 5) {
    document.getElementById("amount").value = "35300";
    document.getElementById("product2").innerText = "35,300円";
  } else if (a == 96 && b == 2 && e == 5) {
    document.getElementById("amount").value = "32200";
    document.getElementById("product2").innerText = "32,200円";
  } else if (a == 97 && b == 2 && e == 5) {
    document.getElementById("amount").value = "29500";
    document.getElementById("product2").innerText = "29,500円";
  } else if (a == 98 && b == 2 && e == 5) {
    document.getElementById("amount").value = "27200";
    document.getElementById("product2").innerText = "27,200円";
  } else if (a == 99 && b == 2 && e == 5) {
    document.getElementById("amount").value = "25200";
    document.getElementById("product2").innerText = "25,200円";
  } else if (a == 50 && b == 1 && e == 6) {
    document.getElementById("amount").value = "2936800";
    document.getElementById("product2").innerText = "2,936,800円";
  } else if (a == 51 && b == 1 && e == 6) {
    document.getElementById("amount").value = "2751000";
    document.getElementById("product2").innerText = "2,751,000円";
  } else if (a == 52 && b == 1 && e == 6) {
    document.getElementById("amount").value = "2564200";
    document.getElementById("product2").innerText = "2,564,200円";
  } else if (a == 53 && b == 1 && e == 6) {
    document.getElementById("amount").value = "2398000";
    document.getElementById("product2").innerText = "2,398,000円";
  } else if (a == 54 && b == 1 && e == 6) {
    document.getElementById("amount").value = "2229600";
    document.getElementById("product2").innerText = "2,229,600円";
  } else if (a == 55 && b == 1 && e == 6) {
    document.getElementById("amount").value = "2066200";
    document.getElementById("product2").innerText = "2,066,200円";
  } else if (a == 56 && b == 1 && e == 6) {
    document.getElementById("amount").value = "1919400";
    document.getElementById("product2").innerText = "1,919,400円";
  } else if (a == 57 && b == 1 && e == 6) {
    document.getElementById("amount").value = "1793800";
    document.getElementById("product2").innerText = "1,793,800円";
  } else if (a == 58 && b == 1 && e == 6) {
    document.getElementById("amount").value = "1682000";
    document.getElementById("product2").innerText = "1,682,000円";
  } else if (a == 59 && b == 1 && e == 6) {
    document.getElementById("amount").value = "1568600";
    document.getElementById("product2").innerText = "1,568,600円";
  } else if (a == 60 && b == 1 && e == 6) {
    document.getElementById("amount").value = "1451400";
    document.getElementById("product2").innerText = "1,451,400円";
  } else if (a == 61 && b == 1 && e == 6) {
    document.getElementById("amount").value = "1321000";
    document.getElementById("product2").innerText = "1,321,000円";
  } else if (a == 62 && b == 1 && e == 6) {
    document.getElementById("amount").value = "1201200";
    document.getElementById("product2").innerText = "1,201,200円";
  } else if (a == 63 && b == 1 && e == 6) {
    document.getElementById("amount").value = "1099600";
    document.getElementById("product2").innerText = "1,099,600円";
  } else if (a == 64 && b == 1 && e == 6) {
    document.getElementById("amount").value = "1014200";
    document.getElementById("product2").innerText = "1,014,200円";
  } else if (a == 65 && b == 1 && e == 6) {
    document.getElementById("amount").value = "928600";
    document.getElementById("product2").innerText = "928,600円";
  } else if (a == 66 && b == 1 && e == 6) {
    document.getElementById("amount").value = "851800";
    document.getElementById("product2").innerText = "851,800円";
  } else if (a == 67 && b == 1 && e == 6) {
    document.getElementById("amount").value = "785600";
    document.getElementById("product2").innerText = "785,600円";
  } else if (a == 68 && b == 1 && e == 6) {
    document.getElementById("amount").value = "723800";
    document.getElementById("product2").innerText = "723,800円";
  } else if (a == 69 && b == 1 && e == 6) {
    document.getElementById("amount").value = "668200";
    document.getElementById("product2").innerText = "668,200円";
  } else if (a == 70 && b == 1 && e == 6) {
    document.getElementById("amount").value = "614800";
    document.getElementById("product2").innerText = "614,800円";
  } else if (a == 71 && b == 1 && e == 6) {
    document.getElementById("amount").value = "563600";
    document.getElementById("product2").innerText = "563,600円";
  } else if (a == 72 && b == 1 && e == 6) {
    document.getElementById("amount").value = "517200";
    document.getElementById("product2").innerText = "517,200円";
  } else if (a == 73 && b == 1 && e == 6) {
    document.getElementById("amount").value = "478600";
    document.getElementById("product2").innerText = "478,600円";
  } else if (a == 74 && b == 1 && e == 6) {
    document.getElementById("amount").value = "441600";
    document.getElementById("product2").innerText = "441,600円";
  } else if (a == 75 && b == 1 && e == 6) {
    document.getElementById("amount").value = "402800";
    document.getElementById("product2").innerText = "402,800円";
  } else if (a == 76 && b == 1 && e == 6) {
    document.getElementById("amount").value = "363600";
    document.getElementById("product2").innerText = "363,600円";
  } else if (a == 77 && b == 1 && e == 6) {
    document.getElementById("amount").value = "325400";
    document.getElementById("product2").innerText = "325,400円";
  } else if (a == 78 && b == 1 && e == 6) {
    document.getElementById("amount").value = "289200";
    document.getElementById("product2").innerText = "289,200円";
  } else if (a == 79 && b == 1 && e == 6) {
    document.getElementById("amount").value = "256800";
    document.getElementById("product2").innerText = "256,800円";
  } else if (a == 80 && b == 1 && e == 6) {
    document.getElementById("amount").value = "230600";
    document.getElementById("product2").innerText = "230,600円";
  } else if (a == 81 && b == 1 && e == 6) {
    document.getElementById("amount").value = "206600";
    document.getElementById("product2").innerText = "206,600円";
  } else if (a == 82 && b == 1 && e == 6) {
    document.getElementById("amount").value = "185000";
    document.getElementById("product2").innerText = "185,000円";
  } else if (a == 83 && b == 1 && e == 6) {
    document.getElementById("amount").value = "165800";
    document.getElementById("product2").innerText = "165,800円";
  } else if (a == 84 && b == 1 && e == 6) {
    document.getElementById("amount").value = "148400";
    document.getElementById("product2").innerText = "148,400円";
  } else if (a == 85 && b == 1 && e == 6) {
    document.getElementById("amount").value = "133200";
    document.getElementById("product2").innerText = "133,200円";
  } else if (a == 86 && b == 1 && e == 6) {
    document.getElementById("amount").value = "120400";
    document.getElementById("product2").innerText = "120,400円";
  } else if (a == 87 && b == 1 && e == 6) {
    document.getElementById("amount").value = "109000";
    document.getElementById("product2").innerText = "109,000円";
  } else if (a == 88 && b == 1 && e == 6) {
    document.getElementById("amount").value = "98800";
    document.getElementById("product2").innerText = "98,800円";
  } else if (a == 89 && b == 1 && e == 6) {
    document.getElementById("amount").value = "89600";
    document.getElementById("product2").innerText = "89,600円";
  } else if (a == 90 && b == 1 && e == 6) {
    document.getElementById("amount").value = "81200";
    document.getElementById("product2").innerText = "81,200円";
  } else if (a == 91 && b == 1 && e == 6) {
    document.getElementById("amount").value = "73600";
    document.getElementById("product2").innerText = "73,600円";
  } else if (a == 92 && b == 1 && e == 6) {
    document.getElementById("amount").value = "66800";
    document.getElementById("product2").innerText = "66,800円";
  } else if (a == 93 && b == 1 && e == 6) {
    document.getElementById("amount").value = "60600";
    document.getElementById("product2").innerText = "60,600円";
  } else if (a == 94 && b == 1 && e == 6) {
    document.getElementById("amount").value = "55600";
    document.getElementById("product2").innerText = "55,600円";
  } else if (a == 95 && b == 1 && e == 6) {
    document.getElementById("amount").value = "52000";
    document.getElementById("product2").innerText = "52,000円";
  } else if (a == 96 && b == 1 && e == 6) {
    document.getElementById("amount").value = "48400";
    document.getElementById("product2").innerText = "48,400円";
  } else if (a == 97 && b == 1 && e == 6) {
    document.getElementById("amount").value = "45200";
    document.getElementById("product2").innerText = "45,200円";
  } else if (a == 98 && b == 1 && e == 6) {
    document.getElementById("amount").value = "42400";
    document.getElementById("product2").innerText = "42,400円";
  } else if (a == 99 && b == 1 && e == 6) {
    document.getElementById("amount").value = "39800";
    document.getElementById("product2").innerText = "39,800円";
  } else if (a == 58 && b == 2 && e == 6) {
    document.getElementById("amount").value = "2932600";
    document.getElementById("product2").innerText = "2,932,600円";
  } else if (a == 59 && b == 2 && e == 6) {
    document.getElementById("amount").value = "2777800";
    document.getElementById("product2").innerText = "2,777,800円";
  } else if (a == 60 && b == 2 && e == 6) {
    document.getElementById("amount").value = "2614400";
    document.getElementById("product2").innerText = "2,614,400円";
  } else if (a == 61 && b == 2 && e == 6) {
    document.getElementById("amount").value = "2445000";
    document.getElementById("product2").innerText = "2,445,000円";
  } else if (a == 62 && b == 2 && e == 6) {
    document.getElementById("amount").value = "2298800";
    document.getElementById("product2").innerText = "2,298,800円";
  } else if (a == 63 && b == 2 && e == 6) {
    document.getElementById("amount").value = "2166800";
    document.getElementById("product2").innerText = "2,166,800円";
  } else if (a == 64 && b == 2 && e == 6) {
    document.getElementById("amount").value = "2040800";
    document.getElementById("product2").innerText = "2,040,800円";
  } else if (a == 65 && b == 2 && e == 6) {
    document.getElementById("amount").value = "1906600";
    document.getElementById("product2").innerText = "1,906,600円";
  } else if (a == 66 && b == 2 && e == 6) {
    document.getElementById("amount").value = "1774600";
    document.getElementById("product2").innerText = "1,774,600円";
  } else if (a == 67 && b == 2 && e == 6) {
    document.getElementById("amount").value = "1655600";
    document.getElementById("product2").innerText = "1,655,600円";
  } else if (a == 68 && b == 2 && e == 6) {
    document.getElementById("amount").value = "1538400";
    document.getElementById("product2").innerText = "1,538,400円";
  } else if (a == 69 && b == 2 && e == 6) {
    document.getElementById("amount").value = "1423400";
    document.getElementById("product2").innerText = "1,423,400円";
  } else if (a == 70 && b == 2 && e == 6) {
    document.getElementById("amount").value = "1308000";
    document.getElementById("product2").innerText = "1,308,000円";
  } else if (a == 71 && b == 2 && e == 6) {
    document.getElementById("amount").value = "1196800";
    document.getElementById("product2").innerText = "1,196,800円";
  } else if (a == 72 && b == 2 && e == 6) {
    document.getElementById("amount").value = "1092200";
    document.getElementById("product2").innerText = "1,092,200円";
  } else if (a == 73 && b == 2 && e == 6) {
    document.getElementById("amount").value = "1003600";
    document.getElementById("product2").innerText = "1,003,600円";
  } else if (a == 74 && b == 2 && e == 6) {
    document.getElementById("amount").value = "919200";
    document.getElementById("product2").innerText = "919,200円";
  } else if (a == 75 && b == 2 && e == 6) {
    document.getElementById("amount").value = "831600";
    document.getElementById("product2").innerText = "831,600円";
  } else if (a == 76 && b == 2 && e == 6) {
    document.getElementById("amount").value = "742400";
    document.getElementById("product2").innerText = "742,400円";
  } else if (a == 77 && b == 2 && e == 6) {
    document.getElementById("amount").value = "656800";
    document.getElementById("product2").innerText = "656,800円";
  } else if (a == 78 && b == 2 && e == 6) {
    document.getElementById("amount").value = "578800";
    document.getElementById("product2").innerText = "578,800円";
  } else if (a == 79 && b == 2 && e == 6) {
    document.getElementById("amount").value = "508600";
    document.getElementById("product2").innerText = "508,600円";
  } else if (a == 80 && b == 2 && e == 6) {
    document.getElementById("amount").value = "452200";
    document.getElementById("product2").innerText = "452,200円";
  } else if (a == 81 && b == 2 && e == 6) {
    document.getElementById("amount").value = "401200";
    document.getElementById("product2").innerText = "401,200円";
  } else if (a == 82 && b == 2 && e == 6) {
    document.getElementById("amount").value = "353800";
    document.getElementById("product2").innerText = "353,800円";
  } else if (a == 83 && b == 2 && e == 6) {
    document.getElementById("amount").value = "311400";
    document.getElementById("product2").innerText = "311,400円";
  } else if (a == 84 && b == 2 && e == 6) {
    document.getElementById("amount").value = "274400";
    document.getElementById("product2").innerText = "274,400円";
  } else if (a == 85 && b == 2 && e == 6) {
    document.getElementById("amount").value = "242400";
    document.getElementById("product2").innerText = "242,400円";
  } else if (a == 86 && b == 2 && e == 6) {
    document.getElementById("amount").value = "214200";
    document.getElementById("product2").innerText = "214,200円";
  } else if (a == 87 && b == 2 && e == 6) {
    document.getElementById("amount").value = "188800";
    document.getElementById("product2").innerText = "188,800円";
  } else if (a == 88 && b == 2 && e == 6) {
    document.getElementById("amount").value = "166000";
    document.getElementById("product2").innerText = "166,000円";
  } else if (a == 89 && b == 2 && e == 6) {
    document.getElementById("amount").value = "146400";
    document.getElementById("product2").innerText = "146,400円";
  } else if (a == 90 && b == 2 && e == 6) {
    document.getElementById("amount").value = "129200";
    document.getElementById("product2").innerText = "129,200円";
  } else if (a == 91 && b == 2 && e == 6) {
    document.getElementById("amount").value = "114400";
    document.getElementById("product2").innerText = "114,400円";
  } else if (a == 92 && b == 2 && e == 6) {
    document.getElementById("amount").value = "100600";
    document.getElementById("product2").innerText = "100,600円";
  } else if (a == 93 && b == 2 && e == 6) {
    document.getElementById("amount").value = "89000";
    document.getElementById("product2").innerText = "89,000円";
  } else if (a == 94 && b == 2 && e == 6) {
    document.getElementById("amount").value = "79000";
    document.getElementById("product2").innerText = "79,000円";
  } else if (a == 95 && b == 2 && e == 6) {
    document.getElementById("amount").value = "70600";
    document.getElementById("product2").innerText = "70,600円";
  } else if (a == 96 && b == 2 && e == 6) {
    document.getElementById("amount").value = "64400";
    document.getElementById("product2").innerText = "64,400円";
  } else if (a == 97 && b == 2 && e == 6) {
    document.getElementById("amount").value = "59000";
    document.getElementById("product2").innerText = "59,000円";
  } else if (a == 98 && b == 2 && e == 6) {
    document.getElementById("amount").value = "54400";
    document.getElementById("product2").innerText = "54,400円";
  } else if (a == 99 && b == 2 && e == 6) {
    document.getElementById("amount").value = "50400";
    document.getElementById("product2").innerText = "50,400円";
  } else if (a == 56 && b == 1 && e == 7) {
    document.getElementById("amount").value = "2879100";
    document.getElementById("product2").innerText = "2,879,100円";
  } else if (a == 57 && b == 1 && e == 7) {
    document.getElementById("amount").value = "2690700";
    document.getElementById("product2").innerText = "2,690,700円";
  } else if (a == 58 && b == 1 && e == 7) {
    document.getElementById("amount").value = "2523000";
    document.getElementById("product2").innerText = "2,523,000円";
  } else if (a == 59 && b == 1 && e == 7) {
    document.getElementById("amount").value = "2352900";
    document.getElementById("product2").innerText = "2,352,900円";
  } else if (a == 60 && b == 1 && e == 7) {
    document.getElementById("amount").value = "2177100";
    document.getElementById("product2").innerText = "2,177,100円";
  } else if (a == 61 && b == 1 && e == 7) {
    document.getElementById("amount").value = "1981500";
    document.getElementById("product2").innerText = "1,981,500円";
  } else if (a == 62 && b == 1 && e == 7) {
    document.getElementById("amount").value = "1801800";
    document.getElementById("product2").innerText = "1,801,800円";
  } else if (a == 63 && b == 1 && e == 7) {
    document.getElementById("amount").value = "1649400";
    document.getElementById("product2").innerText = "1,649,400円";
  } else if (a == 64 && b == 1 && e == 7) {
    document.getElementById("amount").value = "1521300";
    document.getElementById("product2").innerText = "1,521,300円";
  } else if (a == 65 && b == 1 && e == 7) {
    document.getElementById("amount").value = "1392900";
    document.getElementById("product2").innerText = "1,392,900円";
  } else if (a == 66 && b == 1 && e == 7) {
    document.getElementById("amount").value = "1277700";
    document.getElementById("product2").innerText = "1,277,700円";
  } else if (a == 67 && b == 1 && e == 7) {
    document.getElementById("amount").value = "1178400";
    document.getElementById("product2").innerText = "1,178,400円";
  } else if (a == 68 && b == 1 && e == 7) {
    document.getElementById("amount").value = "1085700";
    document.getElementById("product2").innerText = "1,085,700円";
  } else if (a == 69 && b == 1 && e == 7) {
    document.getElementById("amount").value = "1002300";
    document.getElementById("product2").innerText = "1,002,300円";
  } else if (a == 70 && b == 1 && e == 7) {
    document.getElementById("amount").value = "922200";
    document.getElementById("product2").innerText = "922,200円";
  } else if (a == 71 && b == 1 && e == 7) {
    document.getElementById("amount").value = "845400";
    document.getElementById("product2").innerText = "845,400円";
  } else if (a == 72 && b == 1 && e == 7) {
    document.getElementById("amount").value = "775800";
    document.getElementById("product2").innerText = "775,800円";
  } else if (a == 73 && b == 1 && e == 7) {
    document.getElementById("amount").value = "717900";
    document.getElementById("product2").innerText = "717,900円";
  } else if (a == 74 && b == 1 && e == 7) {
    document.getElementById("amount").value = "662400";
    document.getElementById("product2").innerText = "662,400円";
  } else if (a == 75 && b == 1 && e == 7) {
    document.getElementById("amount").value = "604200";
    document.getElementById("product2").innerText = "604,200円";
  } else if (a == 76 && b == 1 && e == 7) {
    document.getElementById("amount").value = "545400";
    document.getElementById("product2").innerText = "545,400円";
  } else if (a == 77 && b == 1 && e == 7) {
    document.getElementById("amount").value = "488100";
    document.getElementById("product2").innerText = "488,100円";
  } else if (a == 78 && b == 1 && e == 7) {
    document.getElementById("amount").value = "433800";
    document.getElementById("product2").innerText = "433,800円";
  } else if (a == 79 && b == 1 && e == 7) {
    document.getElementById("amount").value = "385200";
    document.getElementById("product2").innerText = "385,200円";
  } else if (a == 80 && b == 1 && e == 7) {
    document.getElementById("amount").value = "345900";
    document.getElementById("product2").innerText = "345,900円";
  } else if (a == 81 && b == 1 && e == 7) {
    document.getElementById("amount").value = "309900";
    document.getElementById("product2").innerText = "309,900円";
  } else if (a == 82 && b == 1 && e == 7) {
    document.getElementById("amount").value = "277500";
    document.getElementById("product2").innerText = "277,500円";
  } else if (a == 83 && b == 1 && e == 7) {
    document.getElementById("amount").value = "248700";
    document.getElementById("product2").innerText = "248,700円";
  } else if (a == 84 && b == 1 && e == 7) {
    document.getElementById("amount").value = "222600";
    document.getElementById("product2").innerText = "222,600円";
  } else if (a == 85 && b == 1 && e == 7) {
    document.getElementById("amount").value = "199800";
    document.getElementById("product2").innerText = "199,800円";
  } else if (a == 86 && b == 1 && e == 7) {
    document.getElementById("amount").value = "180600";
    document.getElementById("product2").innerText = "180,600円";
  } else if (a == 87 && b == 1 && e == 7) {
    document.getElementById("amount").value = "163500";
    document.getElementById("product2").innerText = "163,500円";
  } else if (a == 88 && b == 1 && e == 7) {
    document.getElementById("amount").value = "148200";
    document.getElementById("product2").innerText = "148,200円";
  } else if (a == 89 && b == 1 && e == 7) {
    document.getElementById("amount").value = "134400";
    document.getElementById("product2").innerText = "134,400円";
  } else if (a == 90 && b == 1 && e == 7) {
    document.getElementById("amount").value = "121800";
    document.getElementById("product2").innerText = "121,800円";
  } else if (a == 91 && b == 1 && e == 7) {
    document.getElementById("amount").value = "110400";
    document.getElementById("product2").innerText = "110,400円";
  } else if (a == 92 && b == 1 && e == 7) {
    document.getElementById("amount").value = "100200";
    document.getElementById("product2").innerText = "100,200円";
  } else if (a == 93 && b == 1 && e == 7) {
    document.getElementById("amount").value = "90900";
    document.getElementById("product2").innerText = "90,900円";
  } else if (a == 94 && b == 1 && e == 7) {
    document.getElementById("amount").value = "83400";
    document.getElementById("product2").innerText = "83,400円";
  } else if (a == 95 && b == 1 && e == 7) {
    document.getElementById("amount").value = "78000";
    document.getElementById("product2").innerText = "78,000円";
  } else if (a == 96 && b == 1 && e == 7) {
    document.getElementById("amount").value = "72600";
    document.getElementById("product2").innerText = "72,600円";
  } else if (a == 97 && b == 1 && e == 7) {
    document.getElementById("amount").value = "67800";
    document.getElementById("product2").innerText = "67,800円";
  } else if (a == 98 && b == 1 && e == 7) {
    document.getElementById("amount").value = "63600";
    document.getElementById("product2").innerText = "63,600円";
  } else if (a == 99 && b == 1 && e == 7) {
    document.getElementById("amount").value = "59700";
    document.getElementById("product2").innerText = "59,700円";
  } else if (a == 65 && b == 2 && e == 7) {
    document.getElementById("amount").value = "2859900";
    document.getElementById("product2").innerText = "2,859,900円";
  } else if (a == 66 && b == 2 && e == 7) {
    document.getElementById("amount").value = "2661900";
    document.getElementById("product2").innerText = "2,661,900円";
  } else if (a == 67 && b == 2 && e == 7) {
    document.getElementById("amount").value = "2483400";
    document.getElementById("product2").innerText = "2,483,400円";
  } else if (a == 68 && b == 2 && e == 7) {
    document.getElementById("amount").value = "2307600";
    document.getElementById("product2").innerText = "2,307,600円";
  } else if (a == 69 && b == 2 && e == 7) {
    document.getElementById("amount").value = "2135100";
    document.getElementById("product2").innerText = "2,135,100円";
  } else if (a == 70 && b == 2 && e == 7) {
    document.getElementById("amount").value = "1962000";
    document.getElementById("product2").innerText = "1,962,000円";
  } else if (a == 71 && b == 2 && e == 7) {
    document.getElementById("amount").value = "1795200";
    document.getElementById("product2").innerText = "1,795,200円";
  } else if (a == 72 && b == 2 && e == 7) {
    document.getElementById("amount").value = "1638300";
    document.getElementById("product2").innerText = "1,638,300円";
  } else if (a == 73 && b == 2 && e == 7) {
    document.getElementById("amount").value = "1505400";
    document.getElementById("product2").innerText = "1,505,400円";
  } else if (a == 74 && b == 2 && e == 7) {
    document.getElementById("amount").value = "1378800";
    document.getElementById("product2").innerText = "1,378,800円";
  } else if (a == 75 && b == 2 && e == 7) {
    document.getElementById("amount").value = "1247400";
    document.getElementById("product2").innerText = "1,247,400円";
  } else if (a == 76 && b == 2 && e == 7) {
    document.getElementById("amount").value = "1113600";
    document.getElementById("product2").innerText = "1,113,600円";
  } else if (a == 77 && b == 2 && e == 7) {
    document.getElementById("amount").value = "985200";
    document.getElementById("product2").innerText = "985,200円";
  } else if (a == 78 && b == 2 && e == 7) {
    document.getElementById("amount").value = "868200";
    document.getElementById("product2").innerText = "868,200円";
  } else if (a == 79 && b == 2 && e == 7) {
    document.getElementById("amount").value = "762900";
    document.getElementById("product2").innerText = "762,900円";
  } else if (a == 80 && b == 2 && e == 7) {
    document.getElementById("amount").value = "678300";
    document.getElementById("product2").innerText = "678,300円";
  } else if (a == 81 && b == 2 && e == 7) {
    document.getElementById("amount").value = "601800";
    document.getElementById("product2").innerText = "601,800円";
  } else if (a == 82 && b == 2 && e == 7) {
    document.getElementById("amount").value = "530700";
    document.getElementById("product2").innerText = "530,700円";
  } else if (a == 83 && b == 2 && e == 7) {
    document.getElementById("amount").value = "467100";
    document.getElementById("product2").innerText = "467,100円";
  } else if (a == 84 && b == 2 && e == 7) {
    document.getElementById("amount").value = "411600";
    document.getElementById("product2").innerText = "411,600円";
  } else if (a == 85 && b == 2 && e == 7) {
    document.getElementById("amount").value = "363600";
    document.getElementById("product2").innerText = "363,600円";
  } else if (a == 86 && b == 2 && e == 7) {
    document.getElementById("amount").value = "321300";
    document.getElementById("product2").innerText = "321,300円";
  } else if (a == 87 && b == 2 && e == 7) {
    document.getElementById("amount").value = "283200";
    document.getElementById("product2").innerText = "283,200円";
  } else if (a == 88 && b == 2 && e == 7) {
    document.getElementById("amount").value = "249000";
    document.getElementById("product2").innerText = "249,000円";
  } else if (a == 89 && b == 2 && e == 7) {
    document.getElementById("amount").value = "219600";
    document.getElementById("product2").innerText = "219,600円";
  } else if (a == 90 && b == 2 && e == 7) {
    document.getElementById("amount").value = "193800";
    document.getElementById("product2").innerText = "193,800円";
  } else if (a == 91 && b == 2 && e == 7) {
    document.getElementById("amount").value = "171600";
    document.getElementById("product2").innerText = "171,600円";
  } else if (a == 92 && b == 2 && e == 7) {
    document.getElementById("amount").value = "150900";
    document.getElementById("product2").innerText = "150,900円";
  } else if (a == 93 && b == 2 && e == 7) {
    document.getElementById("amount").value = "133500";
    document.getElementById("product2").innerText = "133,500円";
  } else if (a == 94 && b == 2 && e == 7) {
    document.getElementById("amount").value = "118500";
    document.getElementById("product2").innerText = "118,500円";
  } else if (a == 95 && b == 2 && e == 7) {
    document.getElementById("amount").value = "105900";
    document.getElementById("product2").innerText = "105,900円";
  } else if (a == 96 && b == 2 && e == 7) {
    document.getElementById("amount").value = "96600";
    document.getElementById("product2").innerText = "96,600円";
  } else if (a == 97 && b == 2 && e == 7) {
    document.getElementById("amount").value = "88500";
    document.getElementById("product2").innerText = "88,500円";
  } else if (a == 98 && b == 2 && e == 7) {
    document.getElementById("amount").value = "81600";
    document.getElementById("product2").innerText = "81,600円";
  } else if (a == 99 && b == 2 && e == 7) {
    document.getElementById("amount").value = "75600";
    document.getElementById("product2").innerText = "75,600円";
  } else if (a == 63 && b == 1 && e == 8) {
    document.getElementById("amount").value = "2749000";
    document.getElementById("product2").innerText = "2,749,000円";
  } else if (a == 64 && b == 1 && e == 8) {
    document.getElementById("amount").value = "2535500";
    document.getElementById("product2").innerText = "2,535,500円";
  } else if (a == 65 && b == 1 && e == 8) {
    document.getElementById("amount").value = "2321500";
    document.getElementById("product2").innerText = "2,321,500円";
  } else if (a == 66 && b == 1 && e == 8) {
    document.getElementById("amount").value = "2129500";
    document.getElementById("product2").innerText = "2,129,500円";
  } else if (a == 67 && b == 1 && e == 8) {
    document.getElementById("amount").value = "1964000";
    document.getElementById("product2").innerText = "1,964,000円";
  } else if (a == 68 && b == 1 && e == 8) {
    document.getElementById("amount").value = "1809500";
    document.getElementById("product2").innerText = "1,809,500円";
  } else if (a == 69 && b == 1 && e == 8) {
    document.getElementById("amount").value = "1670500";
    document.getElementById("product2").innerText = "1,670,500円";
  } else if (a == 70 && b == 1 && e == 8) {
    document.getElementById("amount").value = "1537000";
    document.getElementById("product2").innerText = "1,537,000円";
  } else if (a == 71 && b == 1 && e == 8) {
    document.getElementById("amount").value = "1409000";
    document.getElementById("product2").innerText = "1,409,000円";
  } else if (a == 72 && b == 1 && e == 8) {
    document.getElementById("amount").value = "1293000";
    document.getElementById("product2").innerText = "1,293,000円";
  } else if (a == 73 && b == 1 && e == 8) {
    document.getElementById("amount").value = "1196500";
    document.getElementById("product2").innerText = "1,196,500円";
  } else if (a == 74 && b == 1 && e == 8) {
    document.getElementById("amount").value = "1104000";
    document.getElementById("product2").innerText = "1,104,000円";
  } else if (a == 75 && b == 1 && e == 8) {
    document.getElementById("amount").value = "1007000";
    document.getElementById("product2").innerText = "1,007,000円";
  } else if (a == 76 && b == 1 && e == 8) {
    document.getElementById("amount").value = "909000";
    document.getElementById("product2").innerText = "909,000円";
  } else if (a == 77 && b == 1 && e == 8) {
    document.getElementById("amount").value = "813500";
    document.getElementById("product2").innerText = "813,500円";
  } else if (a == 78 && b == 1 && e == 8) {
    document.getElementById("amount").value = "723000";
    document.getElementById("product2").innerText = "723,000円";
  } else if (a == 79 && b == 1 && e == 8) {
    document.getElementById("amount").value = "642000";
    document.getElementById("product2").innerText = "642,000円";
  } else if (a == 80 && b == 1 && e == 8) {
    document.getElementById("amount").value = "576500";
    document.getElementById("product2").innerText = "576,500円";
  } else if (a == 81 && b == 1 && e == 8) {
    document.getElementById("amount").value = "516500";
    document.getElementById("product2").innerText = "516,500円";
  } else if (a == 82 && b == 1 && e == 8) {
    document.getElementById("amount").value = "462500";
    document.getElementById("product2").innerText = "462,500円";
  } else if (a == 83 && b == 1 && e == 8) {
    document.getElementById("amount").value = "414500";
    document.getElementById("product2").innerText = "414,500円";
  } else if (a == 84 && b == 1 && e == 8) {
    document.getElementById("amount").value = "371000";
    document.getElementById("product2").innerText = "371,000円";
  } else if (a == 85 && b == 1 && e == 8) {
    document.getElementById("amount").value = "333000";
    document.getElementById("product2").innerText = "333,000円";
  } else if (a == 86 && b == 1 && e == 8) {
    document.getElementById("amount").value = "301000";
    document.getElementById("product2").innerText = "301,000円";
  } else if (a == 87 && b == 1 && e == 8) {
    document.getElementById("amount").value = "272500";
    document.getElementById("product2").innerText = "272,500円";
  } else if (a == 88 && b == 1 && e == 8) {
    document.getElementById("amount").value = "247000";
    document.getElementById("product2").innerText = "247,000円";
  } else if (a == 89 && b == 1 && e == 8) {
    document.getElementById("amount").value = "224000";
    document.getElementById("product2").innerText = "224,000円";
  } else if (a == 90 && b == 1 && e == 8) {
    document.getElementById("amount").value = "203000";
    document.getElementById("product2").innerText = "203,000円";
  } else if (a == 91 && b == 1 && e == 8) {
    document.getElementById("amount").value = "184000";
    document.getElementById("product2").innerText = "184,000円";
  } else if (a == 92 && b == 1 && e == 8) {
    document.getElementById("amount").value = "167000";
    document.getElementById("product2").innerText = "167,000円";
  } else if (a == 93 && b == 1 && e == 8) {
    document.getElementById("amount").value = "151500";
    document.getElementById("product2").innerText = "151,500円";
  } else if (a == 94 && b == 1 && e == 8) {
    document.getElementById("amount").value = "139000";
    document.getElementById("product2").innerText = "139,000円";
  } else if (a == 95 && b == 1 && e == 8) {
    document.getElementById("amount").value = "130000";
    document.getElementById("product2").innerText = "130,000円";
  } else if (a == 96 && b == 1 && e == 8) {
    document.getElementById("amount").value = "121000";
    document.getElementById("product2").innerText = "121,000円";
  } else if (a == 97 && b == 1 && e == 8) {
    document.getElementById("amount").value = "113000";
    document.getElementById("product2").innerText = "113,000円";
  } else if (a == 98 && b == 1 && e == 8) {
    document.getElementById("amount").value = "106000";
    document.getElementById("product2").innerText = "106,000円";
  } else if (a == 99 && b == 1 && e == 8) {
    document.getElementById("amount").value = "99500";
    document.getElementById("product2").innerText = "99,500円";
  } else if (a == 71 && b == 2 && e == 8) {
    document.getElementById("amount").value = "2992000";
    document.getElementById("product2").innerText = "2,992,000円";
  } else if (a == 72 && b == 2 && e == 8) {
    document.getElementById("amount").value = "2730500";
    document.getElementById("product2").innerText = "2,730,500円";
  } else if (a == 73 && b == 2 && e == 8) {
    document.getElementById("amount").value = "2509000";
    document.getElementById("product2").innerText = "2,509,000円";
  } else if (a == 74 && b == 2 && e == 8) {
    document.getElementById("amount").value = "2298000";
    document.getElementById("product2").innerText = "2,298,000円";
  } else if (a == 75 && b == 2 && e == 8) {
    document.getElementById("amount").value = "2079000";
    document.getElementById("product2").innerText = "2,079,000円";
  } else if (a == 76 && b == 2 && e == 8) {
    document.getElementById("amount").value = "1856000";
    document.getElementById("product2").innerText = "1,856,000円";
  } else if (a == 77 && b == 2 && e == 8) {
    document.getElementById("amount").value = "1642000";
    document.getElementById("product2").innerText = "1,642,000円";
  } else if (a == 78 && b == 2 && e == 8) {
    document.getElementById("amount").value = "1447000";
    document.getElementById("product2").innerText = "1,447,000円";
  } else if (a == 79 && b == 2 && e == 8) {
    document.getElementById("amount").value = "1271500";
    document.getElementById("product2").innerText = "1,271,500円";
  } else if (a == 80 && b == 2 && e == 8) {
    document.getElementById("amount").value = "1130500";
    document.getElementById("product2").innerText = "1,130,500円";
  } else if (a == 81 && b == 2 && e == 8) {
    document.getElementById("amount").value = "1003000";
    document.getElementById("product2").innerText = "1,003,000円";
  } else if (a == 82 && b == 2 && e == 8) {
    document.getElementById("amount").value = "884500";
    document.getElementById("product2").innerText = "884,500円";
  } else if (a == 83 && b == 2 && e == 8) {
    document.getElementById("amount").value = "778500";
    document.getElementById("product2").innerText = "778,500円";
  } else if (a == 84 && b == 2 && e == 8) {
    document.getElementById("amount").value = "686000";
    document.getElementById("product2").innerText = "686,000円";
  } else if (a == 85 && b == 2 && e == 8) {
    document.getElementById("amount").value = "606000";
    document.getElementById("product2").innerText = "606,000円";
  } else if (a == 86 && b == 2 && e == 8) {
    document.getElementById("amount").value = "535500";
    document.getElementById("product2").innerText = "535,500円";
  } else if (a == 87 && b == 2 && e == 8) {
    document.getElementById("amount").value = "472000";
    document.getElementById("product2").innerText = "472,000円";
  } else if (a == 88 && b == 2 && e == 8) {
    document.getElementById("amount").value = "415000";
    document.getElementById("product2").innerText = "415,000円";
  } else if (a == 89 && b == 2 && e == 8) {
    document.getElementById("amount").value = "366000";
    document.getElementById("product2").innerText = "366,000円";
  } else if (a == 90 && b == 2 && e == 8) {
    document.getElementById("amount").value = "323000";
    document.getElementById("product2").innerText = "323,000円";
  } else if (a == 91 && b == 2 && e == 8) {
    document.getElementById("amount").value = "286000";
    document.getElementById("product2").innerText = "286,000円";
  } else if (a == 92 && b == 2 && e == 8) {
    document.getElementById("amount").value = "251500";
    document.getElementById("product2").innerText = "251,500円";
  } else if (a == 93 && b == 2 && e == 8) {
    document.getElementById("amount").value = "222500";
    document.getElementById("product2").innerText = "222,500円";
  } else if (a == 94 && b == 2 && e == 8) {
    document.getElementById("amount").value = "197500";
    document.getElementById("product2").innerText = "197,500円";
  } else if (a == 95 && b == 2 && e == 8) {
    document.getElementById("amount").value = "176500";
    document.getElementById("product2").innerText = "176,500円";
  } else if (a == 96 && b == 2 && e == 8) {
    document.getElementById("amount").value = "161000";
    document.getElementById("product2").innerText = "161,000円";
  } else if (a == 97 && b == 2 && e == 8) {
    document.getElementById("amount").value = "147500";
    document.getElementById("product2").innerText = "147,500円";
  } else if (a == 98 && b == 2 && e == 8) {
    document.getElementById("amount").value = "136000";
    document.getElementById("product2").innerText = "136,000円";
  } else if (a == 99 && b == 2 && e == 8) {
    document.getElementById("amount").value = "126000";
    document.getElementById("product2").innerText = "126,000円";

  } else {
    document.getElementById("amount").value = "引受不可";
    document.getElementById("product2").innerText = "引受不可";
  }
}


setInterval(function() {
  var y = new Date().getFullYear();
  var m = new Date().getMonth() + 1;
  var d = new Date().getDate();
  var w = new Date().getDay();
  var wd = ["日", "月", "火", "水", "木", "金", "土"];
  var youbi = wd[w];
  var h = new Date().getHours();
  var min = new Date().getMinutes();
  var s = new Date().getSeconds();

  // 日付を表示する要素のIDを配列で持つ
  var dateDisplayIds = ["datedisplay1", "datedisplay2", "datedisplay3", "datedisplay4"];

  // 各要素に日付を表示する
  dateDisplayIds.forEach(function(id) {
    $("#" + id).html(y + "年" + m + "月" + d + "日");
  });

}, 1000);


// 開くボタンと閉じるボタンを取得
const openButtons = document.querySelectorAll('.js-modal-open'),
  closeButtons = document.querySelectorAll('.js-modal-close');

// 「開くボタン」をクリックしてモーダルを開く
function modalOpen(event) {
  const modalId = event.currentTarget.getAttribute('data-modal'); // クリックしたボタンのdata-modal属性を取得
  const modal = document.getElementById(modalId); // 該当のモーダル要素を取得
  modal.classList.add('is-active');
}

// 全ての開くボタンに対してイベントリスナーを追加
openButtons.forEach(button => {
  button.addEventListener('click', modalOpen);
});

// 「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose(event) {
  const modal = event.currentTarget.closest('.js-modal'); // クリックしたボタンの親要素のモーダルを取得
  modal.classList.remove('is-active');
}

// 全ての閉じるボタンに対してイベントリスナーを追加
closeButtons.forEach(button => {
  button.addEventListener('click', modalClose);
});

// 「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut(event) {
  const modal = document.querySelector('.js-modal.is-active');
  if (modal && event.target === modal) {
    modal.classList.remove('is-active');
  }
}
window.addEventListener('click', modalOut);

// モーダルを閉じる関数
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('is-active'); // is-active クラスを削除してモーダルを閉じる
  }
}

// button1クリック時の処理
document.querySelector('.button1').addEventListener('click', function(event) {
  event.preventDefault(); // デフォルトのリンク動作を防ぐ
  closeModal('modal1'); // モーダル1を閉じる
  setTimeout(function() {
    window.location.href = "https://kizuna-ssi.jp/agency01#05"; // 0.5秒後に指定のURLへ移動
  }, 500); // モーダルが閉じてから遷移
});


//===============================================================
// debounce関数
//===============================================================
function debounce(func, wait) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


//===============================================================
// メニュー関連
//===============================================================

// 変数でセレクタを管理
var $menubar = $('#menubar');
var $menubarHdr = $('#menubar_hdr');

// menu
$(window).on("load resize", debounce(function() {
    if(window.innerWidth <= 900) {	// ここがブレイクポイント指定箇所です
        // 小さな端末用の処理
        $('body').addClass('small-screen').removeClass('large-screen');
        $menubar.addClass('display-none').removeClass('display-block');
        $menubarHdr.removeClass('display-none ham').addClass('display-block');
    } else {
        // 大きな端末用の処理
        $('body').addClass('large-screen').removeClass('small-screen');
        $menubar.addClass('display-block').removeClass('display-none');
        $menubarHdr.removeClass('display-block').addClass('display-none');

        // ドロップダウンメニューが開いていれば、それを閉じる
        $('.ddmenu_parent > ul').hide();
    }
}, 10));

$(function() {

    // ハンバーガーメニューをクリックした際の処理
    $menubarHdr.click(function() {
        $(this).toggleClass('ham');
        if ($(this).hasClass('ham')) {
            $menubar.addClass('display-block');
        } else {
            $menubar.removeClass('display-block');
        }
    });

    // アンカーリンクの場合にメニューを閉じる処理
    $menubar.find('a[href*="#"]').click(function() {
        $menubar.removeClass('display-block');
        $menubarHdr.removeClass('ham');
    });

    // ドロップダウンの親liタグ（空のリンクを持つaタグのデフォルト動作を防止）
	$menubar.find('a[href=""]').click(function() {
		return false;
	});

	// ドロップダウンメニューの処理
    $menubar.find('li:has(ul)').addClass('ddmenu_parent');
    $('.ddmenu_parent > a').addClass('ddmenu');

// タッチ開始位置を格納する変数
var touchStartY = 0;

// タッチデバイス用
$('.ddmenu').on('touchstart', function(e) {
    // タッチ開始位置を記録
    touchStartY = e.originalEvent.touches[0].clientY;
}).on('touchend', function(e) {
    // タッチ終了時の位置を取得
    var touchEndY = e.originalEvent.changedTouches[0].clientY;
    
    // タッチ開始位置とタッチ終了位置の差分を計算
    var touchDifference = touchStartY - touchEndY;
    
    // スクロール動作でない（差分が小さい）場合にのみドロップダウンを制御
    if (Math.abs(touchDifference) < 10) { // 10px以下の移動ならタップとみなす
        var $nextUl = $(this).next('ul');
        if ($nextUl.is(':visible')) {
            $nextUl.stop().hide();
        } else {
            $nextUl.stop().show();
        }
        $('.ddmenu').not(this).next('ul').hide();
        return false; // ドロップダウンのリンクがフォローされるのを防ぐ
    }
});

    //PC用
    $('.ddmenu_parent').hover(function() {
        $(this).children('ul').stop().show();
    }, function() {
        $(this).children('ul').stop().hide();
    });

    // ドロップダウンをページ内リンクで使った場合に、ドロップダウンを閉じる
    $('.ddmenu_parent ul a').click(function() {
        $('.ddmenu_parent > ul').hide();
    });

});


//===============================================================
// 小さなメニューが開いている際のみ、body要素のスクロールを禁止。
//===============================================================
$(function() {
  function toggleBodyScroll() {
    // 条件をチェック
    if ($('#menubar_hdr').hasClass('ham') && !$('#menubar_hdr').hasClass('display-none')) {
      // #menubar_hdr が 'ham' クラスを持ち、かつ 'display-none' クラスを持たない場合、スクロールを禁止
      $('body').css({
        overflow: 'hidden',
        height: '100%'
      });
    } else {
      // その他の場合、スクロールを再び可能に
      $('body').css({
        overflow: '',
        height: ''
      });
    }
  }

  // 初期ロード時にチェックを実行
  toggleBodyScroll();

  // クラスが動的に変更されることを想定して、MutationObserverを使用
  const observer = new MutationObserver(toggleBodyScroll);
  observer.observe(document.getElementById('menubar_hdr'), { attributes: true, attributeFilter: ['class'] });
});


//===============================================================
// スムーススクロール（※バージョン2024-7）※通常タイプ
//===============================================================
$(function() {
    // ページトップボタンの表示・非表示
    var scroll = $('.pagetop');
    var scrollShow = $('.pagetop-show');
    $(scroll).hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 300) {
            $(scroll).fadeIn().addClass(scrollShow);
        } else {
            $(scroll).fadeOut().removeClass(scrollShow);
        }
    });

    // スムーススクロール
    function smoothScroll(target) {
        var scroll = target.offset().top ; // スクロール位置を調整
        $('body,html').animate({ scrollTop: scroll }, 500);
    }

    // ページトップボタンのクリックイベント
    $('.pagetop').click(function(e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 500);
    });

    // ページ読み込み時のハッシュ処理
    $(window).on('load', function() {
        var hash = location.hash;
        if (hash) {
            $('body,html').scrollTop(0);
            setTimeout(function() {
                var target = $(hash);
                if (target.length) {
                    smoothScroll(target);
                }
            }, 100);
        }
    });

    // リンククリック時のスムーススクロール
    $(window).on('load', function() {
        $('a[href*="#"]').click(function(e) {
            var href = $(this).attr('href');
            var targetId = href.split('#')[1]; // ハッシュ部分だけを取り出す
            var target = $('#' + targetId);
            if (target.length) {
                e.preventDefault();
                smoothScroll(target);
                history.pushState(null, null, '#' + targetId); // ハッシュをURLに追加
            }
        });
    });
});


//===============================================================
// 汎用開閉処理
//===============================================================
$(function() {
	$('.openclose').next().hide();
	$('.openclose').click(function() {
		$(this).next().slideToggle();
		$('.openclose').not(this).next().slideUp();
	});
});
