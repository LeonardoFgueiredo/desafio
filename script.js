function calcularMedia() {
    let nota1       = parseFloat(document.getElementById("nota1").value);
    let nota2       = parseFloat(document.getElementById("nota2").value);
    let nota3       = parseFloat(document.getElementById("nota3").value);
    let resultado   = document.getElementById("resultado");

    if (!nota1 || !nota2 || !nota3) {
        // mostrar snackbar
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);

        return false;
    }
    else{
        var media = (nota1 + nota2 + nota3) / 3;
    }   

    return resultado.textContent = media.toFixed(2);
}
