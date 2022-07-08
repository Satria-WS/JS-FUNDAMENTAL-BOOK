//## chaining method
const siswa = [
  {
    nama: "Sutan Gading",
    nilaiTugas: 70,
    nilaiUts: 80,
    nilaiUas: 74,
  },
  {
    nama: "Alex",
    nilaiTugas: 30,
    nilaiUts: 40,
    nilaiUas: 97,
  },
  {
    nama: "Si Muning",
    nilaiTugas: 25,
    nilaiUts: 40,
    nilaiUas: 75,
  },
  {
    nama: "Toni Stark",
    nilaiTugas: 60,
    nilaiUts: 70,
    nilaiUas: 94,
  },
  {
    nama: "Jay Boy",
    nilaiTugas: 40,
    nilaiUts: 50,
    nilaiUas: 54,
  },
];

var siswaPass = siswa
  .map((object) => {
    const student = {
      name: object.nama,
      finalExam:
        object.nilaiTugas * 0.2 + object.nilaiUts * 0.3 + object.nilaiUas * 0.5,
    };
    return student;
  })
  .filter((item) => item.finalExam >= 60);

//return jumlah nilai rata2 dibagi jumlah total siswa yang lulus
//return take 2 decimal place
const averagePassValue = siswaPass.reduce((accumulator, object) => {
  let result = accumulator + object.finalExam / siswaPass.length;
  let resultTwoDecimal = Math.round(result * 100) / 100;
  return resultTwoDecimal;
}, 0);
console.log(averagePassValue);


//##basic rule take decimal number
let floatNumber = 235.3453;
console.log(Math.round(floatNumber * 10) / 10);
