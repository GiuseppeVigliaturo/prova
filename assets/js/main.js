$(document).ready(function() {


function next(){
  var image = $(".images img.active");
  var dot = $(".dot.active")
  //se siamo all'ultima immagine e clicco su next torno alla prima
  if (image.hasClass("last")) {
    $(".images img.active").removeClass("active");
    $(".images img.first").addClass("active");
    $(".dot.active").removeClass("active");
    $(".dot.first").addClass("active");
    // altrimenti vado all'immagine successiva
  } else {
    $(".images img.active").removeClass("active");
    image.next().addClass("active");
    $(".dot.active").removeClass("active");
    dot.next().addClass("active");
  }
}

function previous(){
  var image = $(".images img.active");
  var dot = $(".dot.active")
  //se siamo alla prima immagine e clicco su back vado all'ultima ultima
  if (image.hasClass("first")) {
    $(".images img.active").removeClass("active");
    $(".images img.last").addClass("active");
    $(".dot.active").removeClass("active");
    $(".dot.last").addClass("active");
    //altrimenti vado all'immagine precedente
  } else {
    $(".images img.active").removeClass("active");
    image.prev().addClass("active");
    $(".dot.active").removeClass("active");
    dot.prev().addClass("active");
  }
}

  //intercetto il click su next
  $(".next").click(next);

  //intercetto il click su previous
  $(".previous").click(previous);

  //intercetto il click su dot per muovere il carousel cliccandoci

  $(".dot").click(function() {
    //mi salvo tutti i .dot presenti in pagina
    var dots = $(".dot");
    console.log($(this));
    for(var i = 0; i < dots.length; i++) {
      console.log("entro nel for", dots.eq(i));
      //se il dot su cui clicco è uguale all'i-esimo dot ciclato allora il valore attuale del contatore i
      //posso usarlo come indice per risalire all'immagine
      if ($(this).is(dots.eq(i))) {
        console.log("entro nell'if");
        //rimuovo active a tutte le img
        $(".images img.active").removeClass("active");
        //aggiungo active solo all'immagine corrispondente
        $(".images img").eq(i).addClass("active");
      }
    }
    $(".dot.active").removeClass("active");
    $(this).addClass("active");

  });
});
