let input = document.getElementById('adc').value;
let buttonadc = document.getElementById('adicionar');
let cursoselect = document.getElementById('cursos');

buttonadc.addEventListener('click', function (e) {
    e.preventDefault();
    let novocurso = document.createElement('option');
    novocurso.innerHTML = document.querySelector('input').value;
    cursoselect.appendChild(novocurso);
});

let buttonsel = document.getElementById('selecionar');
let contador =1;
const tbody = document.querySelector('tbody');
buttonsel.addEventListener('click', function (e) {
    e.preventDefault();
    let p = 0
    let curso = document.getElementById('selc').value;
    let td = document.querySelectorAll('td');
    while(curso === td[p]){
        p = p + 3;
    }
    if(contador<4){
        const bt = `<button>Excluir</button>`;
        let posicao= contador;
        const prioridade = `<input id="prioridade" type="number" max="3" min="1">`
        const tds = `<td>${curso}</td> <td>${bt}</td> <td>${prioridade}</td>`;
        const row = `<tr>${tds}</tr>`;
        tbody.innerHTML += row;
        contador++;
    }
    else{
        console.log("Você já preencheu todas as opções de curso")
    }
});
tbody.addEventListener('click', function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === 'BUTTON') {
        console.log('Excluir');
        if (confirm('Confirma?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
    contador--;
});