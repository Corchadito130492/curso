$(document).ready(function(){

  $('#mensajeConfirmacion').hide();

  $('#mensajeCancelacion').fadeOut();

  $('#btn_Guardar').click(function(){
    var nombre = $('#txt_Nombre').val();
    var apellidos = $('#txt_Apellidos').val();
    var sexo = $('#Lista_sexo').val();

    $('#lbl_nombre').text(nombre);
    $('#lbl_apellidos').text(apellidos);
    $('#lbl_sexo').text(sexo);

    $('#mensajeConfirmacion').show();
    limpiaCampos();
  });

  $('#btn_Cancelar').click(function(){
  //mostramos el mensaje de cancelacion
  $('#mensajeCancelacion').fadeIn();
});

function limpiaCampos(){
  $('#txt_Nombre').val("");
$('#txt_Apellidos').val("");
$('#txt_Correo').val("");
$('#Lista_sexo').val("");
$('#txt_Ocupacion').val("");
}

});
