$(".warna-produk span").click(function () {
  $(".warna-produk span").removeClass("aktif");
  $(this).addClass("aktif");
  $(".aktif").css("border-color", $(this).attr("data-color-sec"));
  $("body").css("background", $(this).attr("data-color-primary"));
  $(".konten h2").css("color", $(this).attr("data-color-sec"));
  $(".konten h3").css("color", $(this).attr("data-color-sec"));
  $(".wadah .kotakIMG").css("background", $(this).attr("data-color-sec"));
  $(".wadah .selengkapnya button").css(
    "background",
    $(this).attr("data-color-sec")
  );
  $(".kotakIMG img").attr("src", $(this).attr("data-pic"));
});
