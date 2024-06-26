//Codigo do menu

var menuBtn = document.querySelector('.menu-mobile img');
menuBtn.addEventListener('click', ()=>{
    let itensMenu = document.querySelector('.mobile');
    if(itensMenu.classList.contains('show')){
        itensMenu.classList.remove('show');
        itensMenu.classList.add('hide')
    }
    else{
        itensMenu.classList.remove('hide');
        itensMenu.classList.add('show')
    }
    
})

//Código do removedor de protocolo

function extrairNumerosProtocolos(texto) {
    // Expressão regular para encontrar todos os números entre "Protocolo " e o primeiro " -"
    const regex = /Protocolo\s(\d+)\s-/g;
    let resultado;
    const numeros = [];
    while ((resultado = regex.exec(texto)) !== null) {
        numeros.push(resultado[1]);
    }
    return numeros;
}

function extrairEcopiarProtocolos() {
    const inputTexto = document.getElementById('inputTexto').value;
    const numerosProtocolos = extrairNumerosProtocolos(inputTexto);
    const resultadoTexto = numerosProtocolos.join('\n');
    document.getElementById('resultado').innerText = resultadoTexto;
    
    const textareaTemp = document.createElement('textarea');
    textareaTemp.value = resultadoTexto;
    document.body.appendChild(textareaTemp);
    textareaTemp.select();
    document.execCommand('copy');
    document.body.removeChild(textareaTemp);

    document.getElementById('inputTexto').value = ''; // Limpar o textarea

    const botaoExtrair = document.getElementById('botaoExtrair');
    botaoExtrair.style.backgroundColor = '#59cbe8';
    botaoExtrair.innerText = 'Protocolos Copiados';
    
    setTimeout(() => {
        botaoExtrair.style.backgroundColor = '';
        botaoExtrair.innerText = 'Extrair e Copiar Números de Protocolo';
    }, 3000); // 3 segundos
}


//Código para comparar protocolo

 function compararProtocolos() {
            // Pegar os valores dos textareas
            const protocolos1 = document.getElementById('protocolos1').value.split('\n').map(p => p.trim()).filter(p => p);
            const protocolos2 = document.getElementById('protocolos2').value.split('\n').map(p => p.trim()).filter(p => p);

            // Criar um Set para armazenar os protocolos únicos
            const set1 = new Set(protocolos1);
            const set2 = new Set(protocolos2);

            // Encontrar protocolos diferentes
            const diferentes = [];

            set1.forEach(p => {
                if (!set2.has(p)) {
                    diferentes.push(p);
                }
            });

            set2.forEach(p => {
                if (!set1.has(p)) {
                    diferentes.push(p);
                }
            });

            // Exibir os protocolos diferentes no terceiro textarea
            document.getElementById('resultados').value = diferentes.join('\n');

            // Limpar os conteúdos dos primeiros dois textareas
            document.getElementById('protocolos1').value = '';
            document.getElementById('protocolos2').value = '';
        }


        function copiarProtocolos() {
            // Selecionar o conteúdo do terceiro textarea
            const resultados = document.getElementById('resultados');
            resultados.select();
            resultados.setSelectionRange(0, 99999); // Para dispositivos móveis

            // Copiar o conteúdo selecionado para a área de transferência
            document.execCommand('copy');

            // Mudar a cor do botão e exibir mensagem de cópia
            const copiarButton = document.getElementById('copiarButton');
            copiarButton.style.backgroundColor = '#59cbe8';
            copiarButton.textContent = 'Protocolos copiados';

            // Limpar o conteúdo do terceiro textarea
            document.getElementById('resultados').value = '';

            // Voltar o botão ao estado original após 5 segundos
            setTimeout(() => {
                copiarButton.style.backgroundColor = '';
                copiarButton.textContent = 'Copiar Protocolos';
            }, 5000);
        }


        //Código para alterar protocolo

        function transformText() {
            // Obter o texto do primeiro textarea
            const inputText = document.getElementById('inputText').value;

            // Definir as transformações
            const transformations = {
                "(Tecnica) Sem acesso - Fibra - PF": "SA",
                '(Tecnica) Sem acesso - Fibra - PF':'SA',
                '(Tecnica) Sem acesso - Cabo - PF':'SA',
                '(Tecnica) Sem acesso - Rádio - PF':'SA',
                '(Tecnica) Sem acesso - Fibra - PJ':'SA-PJ',
                '(Tecnica) Sem acesso - Cabo - PJ':'SA-PJ',
                '(Tecnica) Sem acesso - Rádio - PJ':'SA-PJ',
                'Sem acesso - Fibra':'SA',
                'Sem acesso - Cabo':'SA',
                'Sem acesso - Rádio':'SA',
                'Lentidão - Fibra':'IL',
                'Lentidão - Cabo':'IL',
                'Lentidão - Rádio':'IL',
                'Manutenção geral':'MN'	,
                'Desconexão/Oscilação - Cabo':'DE',
                'Desconexão/Oscilação - Fibra':'DE',
                '(Tecnica) Remoção de conector externo':'RCE',
                '(Tecnica) Desativar Serviço - Retorno':'DS',
                '(Tecnica) Upgrade':'UPG',
                '(Tecnica) Substituição de Equipamento':'SDE',
                '(Tecnica) Oscilação na Conexão - Fibra - PJ':'OC-PJ',
                '(Tecnica) Oscilação na Conexão - Cabo - PJ':'OC-PJ',
                '(Tecnica) Oscilação na Conexão - Rádio - PJ':'OC-PJ',
                'Configuração de roteador':'CR',
                '(Tecnica) Oscilação na Conexão - Rádio - PF':'OC',
                '(Tecnica) Instalação Telefonia - PJ':'IT-PJ',
                '(Tecnica) Instalação Telefonia - PF':'IT',
                '(Tecnica) Serviços Gerais - Infra':'SG',
                '(Tecnica) Manutenção de POP':'MNP',
                '(Técnica) Troca de cômodo':'TC',
                '(Tecnica) Instalação - Fibra - PF':'IN',
                '(Tecnica) Alocação de Equipamentos - Novo Titular':'AL',
                '(Tecnica) Migração Fibra Combo PJ':'MI-PJ',
                '(Tecnica) Migração Fibra Combo PF':'MI',
                '(Tecnica) Mudança de Endereço Fibra Combo PJ':'ME-PJ',
                '(Tecnica) Mudança de Endereço Fibra Combo PF':'ME',
                '(Tecnica) Instalação - Cabo - PF':'IN',
                '(Tecnica) Análise de Telefonia - PF':'AT',
                '(Tecnica) Análise de Telefonia - PJ':'AT-PJ',
                '(Tecnica) Desconexão - Fibra - PF':'DE',
                '(Tecnica) Desconexão - Cabo - PF':'DE',
                '(Tecnica) Desconexão - Rádio - PF':'DE',
                '(Tecnica) Desconexão - Cabo - PJ':'DE-PJ',
                '(Tecnica) Desconexão - Fibra - PJ':'DE-PJ',
                '(Tecnica) Desconexão - Rádio - PJ':'DE-PJ',
                '(Tecnica) Patch-cord':'PC',
                '(Tecnica) Instalação - Rádio - PF':'IN',
                '(Tecnica) Instalação - Cabo - PJ':'IN-PJ',
                '(Tecnica) Instalação - Fibra - PJ':'IN-PJ',
                '(Tecnica) Instalação - Rádio - PJ':'IN-PJ',
                '(Tecnica) Migração - PF':'MI',
                '(Tecnica) Migração - PJ':'MI-PJ',
                '(Tecnica) Internet Lenta - Cabo - PF':'IL',
                '(Tecnica) Internet Lenta - Fibra - PF':'IL',
                '(Tecnica) Internet Lenta - Rádio - PF':'IL',
                '(Tecnica) Internet Lenta - Cabo - PJ':'IL-PJ',
                '(Tecnica) Internet Lenta - Fibra - PJ':'IL-PJ',
                '(Tecnica) Internet Lenta - Rádio - PJ':'IL-PJ',
                '(Tecnica) Velocidade Incompatível - Cabo - PF':'VI',
                '(Tecnica) Velocidade Incompatível - Fibra - PF':'VI',
                '(Tecnica) Velocidade Incompatível - Rádio - PF':'VI',
                '(Tecnica) Velocidade Incompatível - Cabo - PJ':'VI-PJ',
                '(Tecnica) Velocidade Incompatível - Fibra - PJ':'VI-PJ',
                '(Tecnica) Velocidade Incompatível - Rádio - PJ':'VI-PJ',
                '(Tecnica) Mudança de Endereço - PF':'ME',
                '(Tecnica) Mudança de Endereço - PJ':'ME-PJ',
                '(Tecnica) Problema com site específico - Cabo - PF':'SE',
                '(Tecnica) Problema com site específico - Fibra - PF':'SE',
                '(Tecnica) Problema com site específico - Rádio - PF':'SE',
                '(Tecnica) Problema com site específico - Cabo - PJ':'SE-PJ',
                '(Tecnica) Problema com site específico - Fibra - PJ':'SE-PJ',
                '(Tecnica) Problema com site específico - Rádio - PJ':'SE-PJ',
                '(Tecnica) Manutenção - PF'	:'MN',
                '(Tecnica) Desativar Serviço':'DS',
                '(Tecnica) Manutenção - PJ':'MN-PJ',
                '(Tecnica) Oscilação na Conexão - Fibra - PF':'OC',
                '(Tecnica) Oscilação na Conexão - Cabo - PF':'OC',
                '(Tecnica) Instalação Fibra Combo PJ':'IN-PJ',
                '(Tecnica) Instalação Fibra Combo - PF':'IN',
                'Viabilidade Técnica':'VB',
                '(Tecnica) Alocação de equipamentos':'AE',
                '(Tecnica) Problema com equipamento específico - PF':'EE',
                '(Tecnica) Remoção de Equipamento - Mudança de Endereço':'DS',
                '(Tecnica) Remoção de Equipamento por Inadimplência':'DS',
                '(Tecnica) Remoção de Equipamento por Solicitação':'DS',
                '(Técnica) Remoção do equipamento':'DS',
                '(Técnica) Remoção de equipamento por suspensão':'DS',
                '(Tecnica) Viabilidade - Rede Mesh':'VB',
                '(Tecnica) Instalação - Rede Mesh':'IM',
                '(Tecnica) Configuração de roteador com visita':'CR',
                '(Tecnica) Reativação de serviço':'RS',
                '(Tecnica) Configuração de roteador sem visita':'CR',
                '(Tecnica) Instalação - TV - PF':'ITV',
                '(Tecnica) Análise de TV - PF':'ANT',
                'Problema em site ou equipamento específico':"SE",
                'Upgrade':'UPG'



            };

            // Dividir o texto em linhas
            const lines = inputText.split('\n');
            let outputLines = [];

            // Processar cada linha
            for (let line of lines) {
                let found = false;
                for (let key in transformations) {
                    if (line.includes(key)) {
                        // Substituir a parte correspondente pela sigla
                        line = line.replace(key, transformations[key]);
                        found = true;
                        break;
                    }
                }
                outputLines.push(line);
            }

            // Juntar as linhas processadas e definir no segundo textarea
            const outputText = outputLines.join('\n');
            document.getElementById('outputText').value = outputText;
        }

        function copyText() {
            const outputText = document.getElementById('outputText');
            outputText.select();
            outputText.setSelectionRange(0, 99999); // Para dispositivos móveis
            document.execCommand('copy');

            // Limpar os textareas
            document.getElementById('inputText').value = '';
            document.getElementById('outputText').value = '';

            // Mudar a cor do botão e o texto
            const copyButton = document.getElementById('copyButton');
            copyButton.style.backgroundColor = '#59cbe8';
            copyButton.textContent = 'Protocolos copiados';

            // Voltar ao estado original após 5 segundos
            setTimeout(() => {
                copyButton.style.backgroundColor = '';
                copyButton.textContent = 'Copiar';
            }, 5000);
        }

// Código gerador de roteiro


function filtrarLinhas() {
    // Obtém o texto do primeiro textarea
    const inputText = document.getElementById('inputTextarea').value;
    
    // Divide o texto em linhas
    const lines = inputText.split('\n');
    
    // Inicializa arrays para armazenar as linhas filtradas
    let resultado1 = [];
    let resultado2 = [];
    let resultado3 = [];
    let resultado4 = [];
    let resultado5 = [];
    let resultado6 = [];
    let resultado7 = [];
    let resultado8 = [];
    let resultado9 = [];
    let resultado10 = [];
    let resultado11 = [];
    
    // Itera sobre cada linha
    lines.forEach(line => {
        // Verifica e separa conforme os critérios
        if (line.includes('PITANGA') || line.includes('NOVA BRASILIA') ||  line.includes('NOVA BRASÍLIA') || line.includes("MALEMBA DE BAIXO") || line.includes('MONTE') || line.includes('MURIBECA') || line.includes('SOCORRO') || line.includes('SANTA CLARA')) {
            resultado1.push(line);
        }
        else if (line.includes('JANGADA') ||  line.includes('CARIRI') || line.includes('MARIO CRUZ') || line.includes('PATRICIO DOREA') || line.includes('AGOSTINHO AMARAL') || line.includes('PENAO') || line.includes('VIVENDA DO PASSE') || line.includes('URBIS-SSP') || line.includes('CENTRO-SSP') || line.includes('CENTRO - SSP')|| line.includes('SÃO ROQUE') || line.includes('ARAÇATIBA') || line.includes('ARACATIBA') || line.includes('JULIO SILVA') || line.includes('AGOSTINHO DO AMARAL') || line.includes('BRASILIA') || line.includes('FAZENDA CONCEICAO') || line.includes('FAZENDA CONCEIÇÃO') || line.includes('JAIME MENEZES') || line.includes('FAZENDA PARÁ') || line.includes('HUMILDES') || line.includes('MALHADA') || line.includes('ALEGRE') || line.includes('PENÃO') || line.includes('IRMÃ DULCE') || line.includes('CURRALINHO') || line.includes('I ETAPA') || line.includes('II ETAPA') || line.includes('III ETAPA') || line.includes('IV ETAPA')) {
            resultado7.push(line) ;
        } 
        else if (line.includes('OURO NEGRO') || line.includes('URBIS I') || line.includes('JABEQUARA DA AREIA') || line.includes('MASSUIM') || line.includes('JABEQUARA') || line.includes('JABEQUARA DA AREIA') || line.includes('PINDOBA') || line.includes('MARACANGALHA') || line.includes('CINCO RIOS')) {
            resultado4.push(line);
        }
        else if (line.includes('MALEMBA') || line.includes('URBIS II') || line.includes('AREIA') || line.includes('PASSE') || line.includes('PASSÉ') || line.includes('BAIRRO DA PAZ')) {
            resultado2.push(line);
        }
        else if (line.includes('CENTRO-CA') || line.includes('TRIANGULO') || line.includes('TRIÂNGULO') || line.includes('CENTRO - CA')) {
            resultado3.push(line);
        }

        else if (line.includes('NOVA CANDEIAS') || line.includes('SÃO FRANCISCO')  || line.includes('MAMÃO')  || line.includes('DISTRITO INDUSTRIAL') || line.includes('DOM AVELAR') || line.includes('CONDOMINIO') || line.includes('FAZENDA MAMÃO')) {
            resultado5.push(line);
        }
        else if (line.includes('CAROBA') || line.includes('MENINO JESUS') || line.includes('PASSAGEM DOS TEIXEIRAS') || line.includes('CABOTO') || line.includes('MADEIRA') || line.includes('COLONIA') || line.includes('CEDRO') || line.includes('PASTO DE FORA') || line.includes('POSTO SANCA') || line.includes('BOCA DA MATA')) {
            resultado6.push(line);
        }

        else if (line.includes('CENTRO-DD') || line.includes("NOVA DIAS D' ÁVILA") || line.includes("IMBASSAY") || line.includes("GARCIA D'AVILA") || line.includes("CENTRO - DD")|| line.includes('GENARO') || line.includes('IMBASSAI') || line.includes('BOSQUE')|| line.includes('ISAURA') || line.includes('PARQUE PETROPOLIS') || line.includes('CONCORDIA') || line.includes('CAMPO ALEGRE') || line.includes('JARDIM ALVORADA') || line.includes('ENTRONCAMENTO-DD') || line.includes("NOVA DIAS D'AVILA") || line.includes("CRISTO REI") || line.includes("SANTA TEREZINHA - DD") || line.includes("LESSA") || line.includes("VARGINHA") || line.includes("NOVA DIAS D'ÁVILA")|| line.includes('SANTA HELENA-DD')) {
            resultado8.push(line);
        }
        else if (line.includes('SANTO ANTONIO') || line.includes('SARANDY') || line.includes('SANTO ANTÔNIO')) {
            resultado9.push(line);
        }
        else if (line.includes('') || line.includes('') || line.includes('')) {
            resultado10.push(line);
        }
        else {
            resultado11.push(line);
        }
    });
    
    // Exibe os resultados nos textareas apropriados
    document.getElementById('outputTextarea1').value = resultado1.join('\n');
    document.getElementById('outputTextarea2').value = resultado2.join('\n');
    document.getElementById('outputTextarea3').value = resultado3.join('\n');
    document.getElementById('outputTextarea4').value = resultado4.join('\n');
    document.getElementById('outputTextarea5').value = resultado5.join('\n');
    document.getElementById('outputTextarea6').value = resultado6.join('\n');
    document.getElementById('outputTextarea7').value = resultado7.join('\n');
    document.getElementById('outputTextarea8').value = resultado8.join('\n');
    document.getElementById('outputTextarea9').value = resultado9.join('\n');
    document.getElementById('outputTextarea10').value = resultado10.join('\n');
    document.getElementById('outputTextarea11').value = resultado11.join('\n');

}

function copiarTexto(textareaId, buttonId) {
    // Obtém o textarea pelo ID
    const textarea = document.getElementById(textareaId);
    
    // Seleciona o texto do textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto para a área de transferência
    document.execCommand('copy');
    
    // Muda o texto e a cor do botão
    const button = document.getElementById(buttonId);
    button.textContent = 'Protocolos copiados';
    button.classList.add('copiado');
    
    // Após 5 segundos, reverte as mudanças
    setTimeout(() => {
        button.textContent = 'Copiar Texto';
        button.classList.remove('copiado');
    }, 5000);
}

function limparTextareas() {
    document.getElementById('inputTextarea').value = '';
    document.getElementById('outputTextarea1').value = '';
    document.getElementById('outputTextarea2').value = '';
    document.getElementById('outputTextarea3').value = '';
    document.getElementById('outputTextarea4').value = '';
    document.getElementById('outputTextarea5').value = '';
    document.getElementById('outputTextarea6').value = '';
    document.getElementById('outputTextarea7').value = '';
    document.getElementById('outputTextarea8').value = '';
    document.getElementById('outputTextarea9').value = '';
    document.getElementById('outputTextarea10').value = '';
    document.getElementById('outputTextarea11').value = '';
    
}