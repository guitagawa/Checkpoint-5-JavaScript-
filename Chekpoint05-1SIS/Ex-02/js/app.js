const tbody = document.querySelector('tbody');
const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    //campos do formulario
    const campos = [
        form.querySelector('#nome'),
        form.querySelector('#celular'),
        form.querySelector('#origem'),
        form.querySelector('#destino'),
        form.querySelector('#data'),
        form.querySelector('#modelo')
    ]

    const tr = document.createElement('tr');

    campos.forEach(campo => {
        const td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    })

    tbody.appendChild(tr);

    form.reset();

})

