$(document).ready(function(){

$("#boton").click(function(){
    console.log("en la función");
    
    let respImagen = document.querySelector("#respImagen");
    respImagen.innerHTML = "";
    var i = 0;
    while (i < 10) {
        respImagen.innerHTML += `<img id="img${i}" src="/assets/img/sol.png" style="width: 150px;"></img>`
        i++;
    }
});


for (var i = 0; i < 10; i++) {
 $('body').on('click', `#img${i}`, function(){
        // alert($(this).attr('id'));
        $(this).hide();
      })
    }
});

