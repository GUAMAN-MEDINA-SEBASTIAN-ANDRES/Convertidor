function binario(valor){
    var binario = [];
    var total = valor.split("");
    var entero = 0;
    var contador = 0;
    for(var i = total.length-1; i>=0;i--){
        if(total[i] == 0){
            binario[i] = 0;
        }
        else{
            binario[i] = Math.pow(2,contador);
        }
        contador++;
    }
    for(var a = 0; a < binario.length; a++){
        entero += binario[a];
    }
    return entero;
}

$(function(){
    $("#binario").keyup(function(){
        $("#entero").val(binario($(this).val()));
    });
});