$(document).ready(function () {
  // Botón modo claro
  $("#btnClaro").click(function () {
    $("body").removeClass("modo-oscuro").addClass("modo-claro");
  });

  // Botón modo oscuro
  $("#btnOscuro").click(function () {
    $("body").removeClass("modo-claro").addClass("modo-oscuro");
  });
});
