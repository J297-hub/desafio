
function VerificarEntrada(){
  let pessoa= document.getElementById('txtn').value
  let ConvidadosTatiana= ['Thomas','Alphie','Ada','Arthur']

  if (ConvidadosTatiana.includes(pessoa)){  // esse includes quer dizer incluiu, ou tem.
    document.getElementById('PermissãoDeEntrada').innerText=
    'Você pode entrar! E lembre-se da primeira regra!'
    

  }else{
    document.getElementById('PermissãoDeEntrada').innerText=
    'Você não pode entrar!'
  }
}
