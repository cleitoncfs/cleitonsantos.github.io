document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');
    const cxNome = document.getElementById('nome');
    const cxIdade = document.getElementById('idade');
    const cxPeso = document.getElementById('peso');
    const cxAltura = document.getElementById('altura');
    const cxImc = document.getElementById('resultadoImc');
    const aviso = document.getElementById('aviso');
    const resultado = document.getElementById('resultado');
    const resNome = document.getElementById('resNome');
    const resIdade = document.getElementById('resIdade');
    const resPeso = document.getElementById('resPeso');
    const resAltura = document.getElementById('resAltura');
    const resImc = document.getElementById('resImc');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = cxNome.value.trim();
        const idade = cxIdade.value.trim();
        const peso = parseFloat(cxPeso.value);
        const altura = parseFloat(cxAltura.value);
        
        if (!nome || isNaN(idade) || isNaN(peso) || isNaN(altura)) {
            aviso.textContent = "Preencha todos os campos corretamente.";
            aviso.style.color = "red";
            return;
        }
        
        const imc = (peso / (altura * altura)).toFixed(1);
        cxImc.value = imc;
        const sit = situacaoDoPeso(imc);

        aviso.textContent = sit;
        aviso.style.color = "green";

        resNome.textContent = `Nome: ${nome}`;
        resIdade.textContent = `Idade: ${idade} anos`;
        resPeso.textContent = `Peso: ${peso} kg`;
        resAltura.textContent = `Altura: ${altura} m`;
        resImc.textContent = `IMC: ${imc} - ${sit}`;
    });

    function situacaoDoPeso(imc) {
        if (imc < 18.5) return 'Baixo peso';
        if (imc < 24.9) return 'Peso normal';
        if (imc < 29.9) return 'Sobrepeso';
        if (imc < 34.9) return 'Obesidade I';
        if (imc < 39.9) return 'Obesidade II';
        return 'Obesidade III';
    }
});
