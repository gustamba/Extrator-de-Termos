document.getElementById("uploadForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const fileInput = document.getElementById("fileInput");
    const extractionType = document.getElementById("extractionType").value;

    if (!fileInput.files.length) {
        alert("Por favor, envie um arquivo .docx.");
        return;
    }

    const file = fileInput.files[0];

    try {
        const text = await extractTextFromDocx(file);
        const extractedTerms = extractTerms(text, extractionType);

        if (extractedTerms.length === 0) {
            alert("Nenhum termo encontrado.");
            return;
        }

        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.aoa_to_sheet([["Glossários"], ...extractedTerms.map(term => [term])]);
        XLSX.utils.book_append_sheet(workbook, worksheet, "Glossários");

        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        const blob = new Blob([excelBuffer], { type: "application/octet-stream" });

        const url = URL.createObjectURL(blob);
        const downloadLink = document.getElementById("downloadLink");
        downloadLink.href = url;
        downloadLink.download = "Glossário.xlsx";
        downloadLink.style.display = "block";
    } catch (error) {
        alert("Erro ao processar o arquivo: " + error.message);
    }
});

async function extractTextFromDocx(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const arrayBuffer = e.target.result;
            mammoth.extractRawText({ arrayBuffer })
                .then(result => resolve(result.value))
                .catch(reject);
        };
        reader.onerror = () => reject(new Error("Erro ao ler o arquivo."));
        reader.readAsArrayBuffer(file);
    });
}

function extractTerms(content, type) {
    const quotesPattern = /("|“).+?("|”)/gm;
    const capslockPattern = /\b[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+(?:\s+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+)*\b/gm;

    let matches = [];
    if (type === "quotes") {
        matches = content.match(quotesPattern) || [];
        return matches.map(term => term.replace(/("|“|”)/g, ""));
    } else if (type === "capslock") {
        matches = content.match(capslockPattern) || [];
        return matches;
    }

    return [];
}