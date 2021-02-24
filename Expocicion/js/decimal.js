function entero(valor){
    var rd = [];
    var entradas = 0;
    var total= '';
    while(valor > 0){
        sobrante = parseInt(valor % 2);
        valor = parseInt(valor/2);
        rd[entradas] = sobrante;
        entradas++;
    }
    for (var i = rd.length - 1; i >= 0; i--) {
        total += rd[i];
    }
    return total;
}

$(function(){
    $("#decimal").keyup(function(){
        $("#binario2").val(entero($(this).val()));
    });
});