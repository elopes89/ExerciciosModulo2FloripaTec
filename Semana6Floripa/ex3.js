
export function Dados(){
fetch("https://servicodados.ibge.gov.br/api/v1/censos/nomes/ranking")
.then(e => {
    return e.json();
})
.then(data => {
    for (let i = 0; i < data.length; i++) {
        const para = document.createElement("p")
        para.innerText = data[i].nome;
        document.body.appendChild(para);
    }

})
}

