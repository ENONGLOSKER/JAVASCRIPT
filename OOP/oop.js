// construktor fungsi atau  oop model lama

// cara 01
function Person(){
    // this, berfungsi agar semua propertinya bisa di pakai pada setiap obejk
    this.namaPanggilan = "";
    this.namaLengkap = "";
    this.panggil= function(nama){
        console.log(`hello ${nama}, saya ${this.namaPanggilan}`);
    }
}

// elqusairi adalah objek 1, yang mewarisi semua properti Person
const elqusairi= new Person(); //new namaClass yg diwarisi

elqusairi.namaPanggilan="elqusairiz"; //mengisi nilai properti 1 pada objek 1 
elqusairi.namaLengkap="el"; //mengisi nilai properti 2 pada objek 1 
elqusairi.panggil("enong");

const zaenul= new Person();
zaenul.namaLengkap="zaenul alqusairi";

console.log(elqusairi);
console.log(zaenul);

// cara 02
// menggunakan parameter
function Orang(namaPanggilan, namaLengkap){
    this.namaPanggilan = namaPanggilan;
    this.namaLengkap = namaLengkap;
}

const el= new Orang("elqusairi", "el"); //tinggal mengisi nilai parameternya, tanpa harus memanggil objek itu sendiri kembali elqusairi.namaLengkap="el";
const za= new Orang("zaenul", "zaenul alqusairi");

console.log(el);
console.log(za);


// construktor function inheritec atau mewarisi objek lain
function Hello(hi,namaPanggilan, namaLengkap){ // panggil  parameter fungsi yg diwarisi
    this.hi = hi;
    // panggil fungsi objek lain dengan parameternya
    Orang.call(this, namaPanggilan, namaLengkap);

}

const hallo = new Hello("assalamualaikum","el","elqusairi");

console.log(hallo);


// prototype, turunana atau instance dari fungsi construktornya
// cara kerjanya jika ditambahakn pada instance objeknya (elqusairi) maka akan memanggilnya lewat objek tersebut. namun jika tidak ada maka akan mengecek di __proto__ nya jika ada maka akan di panggil lewat protonya begitupun seterusnya ke proto dibawahnya.

/*contoh :
pada fungsi konstruktor Person memiliki 3 parameter (namaPanggilan,namaLengkap dan panggil) namun kita inggin menambhakan properti baru lewat prototypenya dengan cara : namaFungsinya.prototype.namaparameterbaru=isi 

artinya pada instance objek zaenul dan alqusairi memiliki properti baru yaitu terimakasih yang berada didalam __proto__
maka jika kita memanggil atau mengakses parameter terimkasih tersebut dengan cara zaenul.terimakasih() maka akan berhasil, karena parameter tersebut tidak ada didalam obejk nya (zaenul dan alqusairi) namun ada di dalam __proto__ nya
*/ 

function Person(namaPanggilan,namaLengkap){
    this.namaPanggilan = namaPanggilan;
    this.namaLengkap = namaLengkap;
    this.panggil= function(nama){
        console.log(`hello ${nama}, saya ${this.namaPanggilan}`);
    }
}

// membuat prototype dengan menambahkan parmeter terimakasih
Person.prototype.terimakasih=function(){ //isi dari parameter terimakasih
    console.log("terimakasih");
}

const zaenul= new Person("el","qusairi");
console.log (zaenul.terimakasih());

const alqusairi= new Person();


console.log(elqusairi);
console.log(zaenul);
