let table = {
    89.1:'Alanine',
    174.2:'Arginine',
    132.1:'Asparagine',
    133.1:'Aspartate',
    121.2:'Cysteine',
    147.1:'Glutamate',
    146.2:['Glutamine','Lysine'],
    75.1:'Glycine',
    155.2:'Histidine',
    131.2:['Isoleucine','Leucine'],
    149.2:'Methionine',
    165.2:'Phenylalanine',
    115.1:'Proline',
    105.1:'Serine',
    119.1:'Threonine',
    204.2:'Tryptophan',
    181.2:'Tyrosine',
    117.1:'Valine',
}
let keys = Object.keys(table)

let result = document.getElementById('result')
let ans = document.getElementById('ans')
let data = document.getElementById('data')

let boxes = document.getElementById('boxes');
let balls = document.getElementById('balls');
let x_box = document.getElementById('X-box');
let btn = document.getElementById('btn')

btn.addEventListener('click',function(){
    data.innerHTML = ''
    let box = parseFloat(boxes.value)
    let ball = parseFloat(balls.value)
    let X_box = parseFloat(x_box.value)
    
    try{
        x = (ball/box) * X_box
        ans.innerHTML = `<div class="alert alert-primary alert-dismissible fade show" role="alert">
                                <strong>Results:</strong> ${parseFloat(x).toFixed(2)}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`

        for(let i =0; i<keys.length;i++){
            if(parseInt(x) == parseInt(keys[i])){
                data.innerHTML = `<div class="alert alert-primary alert-dismissible fade show" role="alert">
                                    <strong>Compound:</strong> ${table[keys[i]]}
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>`
                break;
            }
            else if(parseInt(x) != parseInt(keys[i]) && i === (keys.length-1)){
                createTable(table)
            }
        }
        boxes.value = ''
        balls.value = ''
        x_box.value = ''
    }
    catch(err){
        console.log(err)
    }
})

function createTable(tableData) {

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    let headerCell1 = document.createElement('th');
    headerCell1.textContent = 'Molecular Weight';
    let headerCell2 = document.createElement('th');
    headerCell2.textContent = 'Amino Acids';
    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    thead.appendChild(headerRow);

    let tbody = document.createElement('tbody');

    for (let weight in tableData) {
        let aminoAcids = tableData[weight];
        let row = document.createElement('tr');

        let weightCell = document.createElement('td');
        weightCell.textContent = weight;

        let aminoAcidsCell = document.createElement('td');

        if (Array.isArray(aminoAcids)) {
        aminoAcidsCell.textContent = aminoAcids.join(', ');
        } else {
        aminoAcidsCell.textContent = aminoAcids;
        }

        row.appendChild(weightCell);
        row.appendChild(aminoAcidsCell);

        tbody.appendChild(row);
    }

    table.appendChild(thead);
    table.appendChild(tbody);

    data.appendChild(table);
}
