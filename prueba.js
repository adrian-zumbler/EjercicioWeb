
var x,y;
x = 9;
var longitudPermitida = 8;

txtPassword = document.getElementById('txtPassword');
btnEnviar = document.getElementById('btnEnviar');
btnEnviar.addEventListener('click',function() {
  validarPassword(txtPassword.value);
  agregarGuiones(txtPassword.value);
})

//variables
$('#btnEsconder').click(function(){
  //$('.grande').toggle(2000);
  $texto = $('#txtNombre');
  alert($texto.val())
})

function agregarGuiones(texto) {
  var nuevoTexto = "";
  for(i = 0;i < texto.length;i++){
    if (i != texto.length - 1) {
        nuevoTexto = nuevoTexto + texto[i] + "-";
    } else {
      nuevoTexto = nuevoTexto + texto[i];
    }

  }
  console.log(nuevoTexto);
}

function fibonacci(x) {
  var a,b,fibo;
  a = 0;
  b = 1;
  for(a = 0; a < x;) {
      fibo = fibo + "-"+ a + "-"+ (a + b);
      b = b + a
      a = (b + a)
  }
  console.log(fibo)
}





function validarPassword(password) {
  longitud = password.length;
  if(longitud >= longitudPermitida) {
    console.log('El password con la longitud');
  } else {
    console.log('El password no cumple con la longitud');
  }

}
