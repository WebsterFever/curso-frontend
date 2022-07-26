function obterMedia(){

    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("C").value);

    var media = (a + b + c) / 3;

    document.getElementById("resultado").innerHTML = "Resultado: " + media;
    
    console.log(a+b+c);
    







}