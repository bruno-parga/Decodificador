const chaves = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const reverterChaves = Object.fromEntries(
    Object.entries(chaves).map(([key, value]) => [value, key])
);

function encriptografar() {
    const entrada = document.getElementById('entradaTexto').value;
    const saida = entrada.replace(/[eioua]/g, char => chaves[char]);
    document.getElementById('saidaTexto').value = saida;
}

function descriptografar() {
    const entrada = document.getElementById('entradaTexto').value;
    const saida = entrada.replace(/enter|imes|ai|ober|ufat/g, match => reverterChaves[match]);
    document.getElementById('saidaTexto').value = saida;
}

function copiar() {
    const saidaTexto = document.getElementById('saidaTexto');
    saidaTexto.select();
    document.execCommand('copy');
    document.getElementById('entradaTexto').value = '';
    saidaTexto.value = '';
}
