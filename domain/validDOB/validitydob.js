var validitybod = require('../person/persontype')

class validbod extends validitybod{
  constructor(...args) {
    super(...args)
  }

  bod() {
      var lahir = super.getbod();
      var lahir_2 = String(lahir).replace(/-/g,"")
      var nomor_induk = super.getnik()
      var nomor_induk_2 = nomor_induk.slice(6,12);

      //cektanggal
      var cekTanggal = nomor_induk_2.slice(0,2);
      var cekTanggal2 = lahir_2.slice(6,8)

      //cekbulan
      var cekBulan = nomor_induk_2.slice(2,4);
      var cekBulan2 = lahir_2.slice(4,6)

      //cektahun
      var cekTahun = nomor_induk_2.slice(4,8);
      var cekTahun2 = lahir_2.slice(2,4)   
      
      
      if(cekTanggal === cekTanggal2 && (cekBulan === cekBulan2) && (cekTahun === cekTahun2)){
          return "Tanggal, Bulan dan Tahun NIK sudah sesuai dengan Tanggal Bulan Tahun LAHIR"
      } else {
          return "NIK TIDAK SESUAI DENGAN TANGGAL BULAN TAHUN LAHIR"
      }
      
   
}
}
module.exports = validbod;