let cargaTotal = 0;

function adicionarCarga(quantidade){
    const visor = document.querySelector('#peso-visor');
    const statusluz = document.querySelector('#status-luz');
    if(cargaTotal<1000){
        cargaTotal += quantidade;
    }
    visor.textContent=cargaTotal;

    if(cargaTotal>300){
        statusluz.textContent = "ALERTA: RISCO DE TRANSBORDAMENTO!";
        statusluz.classList.add("alerta-perigo");
    }

}

function limparcarga(){
    const visor = document.querySelector('#peso-visor');
    const statusluz = document.querySelector('#status-luz');

    cargaTotal = 0;
    visor.textContent=cargaTotal;
    statusluz.textContent = "SISTEMA OK";
    statusluz.classList.remove("alerta-perigo");
}
