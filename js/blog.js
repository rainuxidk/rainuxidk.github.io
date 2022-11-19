$(document).ready(() => {
  $('#mensaje').hide()
  $('#mensaje2').hide()

  $('#leerMas').click(function() {
      $('#intro').hide()
      $('#leerMas').hide()

      $('#mensaje').show('slow')
  })

  $('#leerMas2').click(function() {
    $('#intro2').hide()
    $('#leerMas2').hide()

    $('#mensaje2').show('slow')
})
})