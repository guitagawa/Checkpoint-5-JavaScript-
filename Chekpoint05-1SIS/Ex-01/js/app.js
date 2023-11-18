
function calcularValorDaViagem() {
    const btn = document.querySelector('#btnDados');

    btn.addEventListener('click', () => {

        const viagens = document.querySelectorAll('.viagem');

        let maior = 0;
        let menor = 0;
        let maiorDestino = '';
        let menorDestino = '';

        viagens.forEach(viagem => {
            const mediaPreco = parseFloat(viagem.querySelector('.media-preco').textContent);
            const duracao = parseFloat(viagem.querySelector('.duracao').textContent);
            const destino = viagem.querySelector('.destino').textContent;
            const valor = (mediaPreco / duracao);

            if (maior < valor || maior == 0) {
                maior = valor;
                maiorDestino = destino;
            }

            if (menor > valor || menor == 0) {
                menor = valor;
                menorDestino = destino;
            }

            viagem.querySelector('.valor-hora').textContent = valor.toFixed(2);

        })

        console.log(menor);
        console.log(maior);

        viagens.forEach(viagem => {
            const valor = parseFloat(viagem.querySelector('.valor-hora').textContent);
            const classe = viagem.querySelector('.valor-hora');

            if (valor == maior) {
                classe.classList.add('bg-danger');
                const maior2 = document.querySelector('#maiorValor');
                maior2.textContent = maiorDestino;
                
            }

            if (valor == menor.toFixed(2)) {
                classe.classList.add('bg-warning');
                const menor2 = document.querySelector('#menorValor');
                menor2.textContent = menorDestino;

            }

        })



    })




}

calcularValorDaViagem();