function verificar(){

    var data = new Date();
    var ano = data.getFullYear();
    var anoNasc = document.getElementById('anos');
    var res = document.getElementById('resposta'); 


    if (anoNasc.value.length == 0 || parseInt(anoNasc.value) > ano){
        window.alert('[erro] verifique os dados e tente novamente!')
    } else{
        var sex = document.getElementsByName('sex');
        var idade = ano -  parseInt(anoNasc.value);
        var genero = '';
        var foto = document.getElementById('foto');
       
        if (sex[0].checked){
            genero= 'homem'
          if(idade >= 0 && idade <12){
            //criança
            foto.setAttribute('src','crian-h.jpg')
          } else if ( idade < 21){
            //jovem
            foto.setAttribute('src','jov-h.jpg')
          } else if( idade < 50 ){
            //adulto
            foto.setAttribute('src','adul-h.jpg')
          } else{
            //idoso
            foto.style.width ='190px'
            foto.setAttribute('src','vel-h.jpg')
          }
        } else{
            genero = 'mulher'
            if(idade >= 0 && idade <12){
                //criança
                foto.setAttribute('src','crian-m.jpg')
              } else if ( idade < 21){
                //jovem
                foto.setAttribute('src','jov-m.jpg')
              } else if( idade < 50 ){
                //adulto
                foto.setAttribute('src','adul-m.jpg')
              } else{
                //idoso
                foto.setAttribute('src','vel-m.jpg')
              }
            }
            res.style.textAlign = 'center'
       res.innerHTML = `detectamos ${genero} com ${idade} anos.` 
       res.appendChild(foto)
    }
    

   



}