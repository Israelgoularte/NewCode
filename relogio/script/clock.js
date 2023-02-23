function atualizaRelogio_digital() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
    let saudacao;
    
    document.querySelector('.hora').textContent = horas;
    document.querySelector('.minuto').textContent = minutos;
    document.querySelector('.segundo').textContent = segundos;

    if( horas >=12 ){
        if(horas >=18){
            saudacao ="Boa Noite";
        }
        else saudacao ="Boa Tarde";
    }else saudacao = "Bom Dia";

    document.querySelector('.saudacao').textContent = saudacao;

  }


  function atualizaRelogio_analogico() {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();
    
    const horaPonteiro = document.querySelector('.hora-ponteiro');
    const minutoPonteiro = document.querySelector('.minuto-ponteiro');
    const segundoPonteiro = document.querySelector('.segundo-ponteiro');
    
    const horaGrau = (horas / 12) * 360;
    const minutoGrau = (minutos / 60) * 360 ;
    const segundoGrau = (segundos / 60) * 360;
    
    horaPonteiro.style.transform = `rotate(${horaGrau}deg)`;
    minutoPonteiro.style.transform = `rotate(${minutoGrau}deg)`;
    segundoPonteiro.style.transform = `rotate(${segundoGrau}deg)`;
  }
  
  setInterval(atualizaRelogio_analogico, 1000);
  
  
  setInterval(atualizaRelogio_digital, 1000);
  
  function redirecionarPagina() {
    const select = document.getElementById("projeto");
    var selectedOption = select.options[select.selectedIndex].value;
    if (selectedOption !== "") {
      window.location.href = selectedOption;
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("projeto");
    select.addEventListener('change', redirecionarPagina);
  });
  
