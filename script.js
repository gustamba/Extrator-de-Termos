var freg = document.getElementsByName('reg');
var txt = document.getElementById('txt1');
var res2 = document.getElementById('res2');

function extrair() {
    let m = 0;
    res2.innerHTML="";  //limpa a área de termos exportados
    //Verifica se campo está com o texto preenchido
    if (txt.value == 0) { 
        window.alert("Cole um texto antes de extrair os termos");
    } else {
        //Verifica qual regex esta selecionado
        if (freg[0].checked) {
          //Palavras entre aspas
         var regex = /(\"|“).+?(\"|”)/gm;
        } else {
            //Palavras com maiúsculo e próximas
            var regex = /\b[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+\b|[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+\b|[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+\b|[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+\b|[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+\b|\b[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+\b|\b[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+\b|\b[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+\b|\b[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+\b|\b[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+[’ ]+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+\b|\b[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+\b/gm;
        }
        //Procurar por matchs
        while ((m = regex.exec(txt.value)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                if (groupIndex == 0 && match.length>2) {
                    let match1 = match.replace(/(\"|“|\"|”)/gm,"");
                    let match2 = match1.replace(/\bTHE \b|\bTHIS \b|\bIN \b|\bOF\b/gm,"");
                    res2.innerHTML+=`${match2}` + '\n';
                    console.log(`Found match, group ${groupIndex}: ${match}`);
                }
            });
        }
    }
}

function copiarTexto() {
    if (res2.innerHTML == 0) {
        window.alert("Extraia os termos antes de copiar")
    } else {
        res2.select();
        document.execCommand("Copy");
        alert("Termos copiados!");
    }
}