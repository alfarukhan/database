//event//
$('.page-scroll').on('click', function(e) {

//ambil isi
 var tujuan = $(this).attr('href');
//tangkap elemen ybs
 var elemenTujuan = $(tujuan);

	
//pindah scroll
 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
 },1250,'easeInOutSine');

 e.preventDefault();
});