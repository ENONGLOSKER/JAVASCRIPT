class Pekerja{
    constructor(jamKerja, rate){
        this.jamKerja = jamKerja;
        this.rate = rate;
        this.tax = 10;
    }

    gajiUtama(){
        return this.jamKerja * this.rate;
    }

    gajiBersih(){
        return this.gajiUtama() + this.tax;
    }
}

let elqusairi = new Pekerja( 5 , 10);
console.log(elqusairi.gajiUtama());
console.log(elqusairi.gajiBersih());