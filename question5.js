const originalString = prompt("Digite uma string para inverter:");

if (originalString) {
    let invertedString = "";

    for (let i = originalString.length - 1; i >= 0; i--) {
        invertedString += originalString[i];
    }

    console.log("String original:", originalString);
    console.log("String invertida:", invertedString);
} else {
    console.log("Nenhuma string foi fornecida.");
}