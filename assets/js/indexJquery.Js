$(document).ready(function () {
  $('#breadSelect').addClass('display-None');
  $('#breadConfirm').addClass('display-None');

  // Events
  // breadCrumb
  $('#breadHome').on('click', function () {
    $('#form-container').removeClass('display-None');
    $('#select-form-container').addClass('display-None');
    $('#schedule-container').addClass('display-None');
  });

  $('#breadSelect').on('click', function () {
    if (ValidateForm()) {
      InsertPeesonalInformation();
      SelectCarrer();
      selectScheduleClass();
      $('#select-form-container').removeClass('display-None');
      $('#form-container').addClass('display-None');
      $('#schedule-container').addClass('display-None');
    } else {
      alert('Debe completar los campos');
    }
  });

  $('#breadConfirm').on('click', function () {
    if (ValidateForm()) {
      InsertPeesonalInformation();
      SelectCarrer();
      selectScheduleClass();

    $('#schedule-container').removeClass('display-None');
    $('#select-form-container').addClass('display-None');
    $('#form-container').addClass('display-None');
    } else {
      alert('Debe completar los campos');
    }
  });
  // btn Next
  $('#btnNextForm').on('click', function () {
    if (ValidateForm()) {
      InsertPeesonalInformation();
      SelectCarrer();
      selectScheduleClass();
      $('#breadSelect').removeClass('display-None');
      $('#select-form-container').removeClass('display-None');
      $('#form-container').addClass('display-None');
    } else {
      alert('Debe completar los campos');
    }
  });
  $('#btnNextSelect').on('click', function () {
    if (ValidateForm()) {
      InsertPeesonalInformation();
      SelectCarrer();
      selectScheduleClass();
      $('#schedule-container').removeClass('display-None');
      $('#select-form-container').addClass('display-None');
      $('#breadConfirm').removeClass('display-None');
    } else {
      alert('Debe completar los campos');
    }
  });
  $('#btnClearForm').on('click', function () {
    Clear()
  });

  // functions
  function Clear() {
    $('#nameField').val('');
    $('#stateField').val('');
    $('#cityField').val('');
    $('#sectorField').val('');
    $('#streetField').val('');
    $('#carrerField').val('Seleccione una carrera...');
  }
  function ValidateForm() {
    isValid = true;
    const valueName = $('#nameField').val();
    const valueState = $('#stateField').val();
    const valueCity = $('#cityField').val();
    const valueSector = $('#sectorField').val();
    const valueStreet = $('#streetField').val();
    const valueCarrer = $('#carrerField').val();

    if (valueName == '' || valueName == null || valueName == undefined) {
      isValid = false;
      $('#nameField').addClass('input-error').focus();
      $('#nameField').removeClass('input-success');
    } else {
      $('#nameField').addClass('input-success').focus();
      $('#nameField').removeClass('input-error');
    }
    if (valueState == '' || valueState == null || valueState == undefined) {
      isValid = false;
      $('#stateField').addClass('input-error');
      $('#stateField').removeClass('input-success');
    } else {
      $('#stateField').addClass('input-success');
      $('#stateField').removeClass('input-error');
    }
    if (valueCity == '' || valueCity == null || valueCity == undefined) {
      isValid = false;
      $('#cityField').addClass('input-error');
      $('#cityField').removeClass('input-success');
    } else {
      $('#cityField').addClass('input-success');
      $('#cityField').removeClass('input-error');
    }

    if (valueSector == '' || valueSector == null || valueSector == undefined) {
      isValid = false;
      $('#sectorField').addClass('input-error');
      $('#sectorField').removeClass('input-success');
    } else {
      $('#sectorField').addClass('input-success');
      $('#sectorField').removeClass('input-error');
    }

    if (valueStreet == '' || valueStreet == null || valueStreet == undefined) {
      isValid = false;
      $('#streetField').addClass('input-error');
      $('#streetField').removeClass('input-success');
    } else {
      $('#streetField').addClass('input-success');
      $('#streetField').removeClass('input-error');
    }

    if (
      valueCarrer == '' ||
      valueCarrer == null ||
      valueCarrer == undefined ||
      valueCarrer == 'Seleccione una carrera...'
    ) {
      isValid = false;
      $('#carrerField').addClass('input-error');
      $('#carrerField').removeClass('input-success');
    } else {
      $('#carrerField').addClass('input-success');
      $('#carrerField').removeClass('input-error');
    }
    return isValid;
  }

  function InsertPeesonalInformation() {
    const valueName = $('#nameField').val();
    const valueState = $('#stateField').val();
    const valueCity = $('#cityField').val();
    const valueSector = $('#sectorField').val();
    const valueStreet = $('#streetField').val();
    const valueCarrer = $('#carrerField').val();

    switch (valueCarrer) {
      case '1':
        $('#dataCarrer').text('software');
        break;
      case '2':
        $('#dataCarrer').text('Multimedia');
        break;
      case '3':
        $('#dataCarrer').text('Ciberseguridad');
        break;
    }

    $('#dataName').text(valueName);
    $('#dataCity').text(valueCity);
    $('#dataState').text(valueState);
    $('#dataSector').text(valueSector);
    $('#dataStreet').text(valueStreet);
  }

  function SelectCarrer() {
    const valueCarrer = $('#carrerField').val();
    switch (valueCarrer) {
      case '1':
        $('#firstClassName').text('Programación I');
        $('#secondClassName').text('Base de datos avanzada');
        $('#thirdClassName').text('Analisís y diseño de sistemas');
        $('#fourthClassName').text('Inteligencia Artificial');
        $('#fifthClassName').text('Mineria de datos');

        $('#firstClass').text('programacion I');
        $('#secondClass').text('base de datos avanzada');
        $('#thirdClass').text('Analisís y diseño de sistemas');
        $('#fourthClass').text('Intteligencia Artificial');
        $('#fifthClass').text('Mineria de datos');

        break;
      case '2':
        $('#firstClassName').text('Comunicación Visual');
        $('#secondClassName').text('Fotografía');
        $('#thirdClassName').text('Dibujo e Ilustración');
        $('#fourthClassName').text('Grafico de vectores');
        $('#fifthClassName').text('Animacion 2D');

        $('#firstClass').text('Comunicación Visual');
        $('#secondClass').text('Fotografía');
        $('#thirdClass').text('Dibujo e Ilustración');
        $('#fourthClass').text('Grafico de vectores');
        $('#fifthClass').text('Animacion 2D');
        break;
      case '3':
        $('#firstClassName').text('Sistema operativos');
        $('#secondClassName').text('Fundamentos de la seguridad');
        $('#thirdClassName').text('Segutidad sistemas operativos');
        $('#fourthClassName').text('Hacker etico II');
        $('#fifthClassName').text('Aspects legales de la seguridad');

        $('#firstClass').text('Sistema operativos');
        $('#secondClass').text('Fundamentos de la seguridad');
        $('#thirdClass').text('Segutidad sistemas operativos');
        $('#fourthClass').text('Hacker etico II');
        $('#fifthClass').text('Aspects legales de la seguridad');
        break;
    }
  }
  function selectScheduleClass() {
    // First Class
    if ($('#lunSelectFirst').is(':checked')) {
      $('#lunSelectFirst').prop('checked', true);
      $('#firstLunes').text('lunes 8:00 - 12:59');
      $('#firstMartes').text('');
      $('#firstViernes').text('');
    }
    if ($('#marSelectFirst').is(':checked')) {
      $('#marSelectFirst').prop('checked', true);
      $('#firstMartes').text('martes 14:00 - 17:59');
      $('#firstLunes').text('');
      $('#firstViernes').text('');
    }
    if ($('#vierSelectFirst').is(':checked')) {
      $('#vierSelectFirst').prop('checked', true);
      $('#firstViernes').text('viernes 18:00 - 21:59');
      $('#firstLunes').text('');
      $('#firstMartes').text('');
    }
    // Second Class
    if ($('#mierSelectSecond').is(':checked')) {
      $('#mierSelectSecond').prop('checked', true);
      $('#secondMiercoles').text('miercoles 8:00 - 12:59');
      $('#secondJueves').text('');
      $('#secondSabado').text('');
    }
    if ($('#jueSelectSecond').is(':checked')) {
      $('#juevSelectSecond').prop('checked', true);
      $('#secondJueves').text('jueves 14:00 - 17:59');
      $('#secondMiercoles').text('');
      $('#secondSabado').text('');
    }
    if ($('#sabSelectSecond').is(':checked')) {
      $('#sabSelectSecond').prop('checked', true);
      $('#secondSabado').text('sabado 18:00 - 21:59');
      $('#secondMiercoles').text('');
      $('#secondJueves').text('');
    }
    // Third Class
    if ($('#lunSelectThird').is(':checked')) {
      $('#lunSelectThird').prop('checked', true);
      $('#thirdLunes').text('lunes 8:00 - 12:59');
      $('#thirdMartes').text('');
      $('#thirdViernes').text('');
    }
    if ($('#marSelectThird').is(':checked')) {
      $('#marSelectThird').prop('checked', true);
      $('#thirdMartes').text('martes 14:00 - 17:59');
      $('#thirdLunes').text('');
      $('#thirdViernes').text('');
    }
    if ($('#vierSelectThird').is(':checked')) {
      $('#vierSelectThird').prop('checked', true);
      $('#thirdViernes').text('viernes 18:00 - 21:59');
      $('#thirdLunes').text('');
      $('#thirdMartes').text('');
    }
    // Fourth Class
    if ($('#mierSelectFourth').is(':checked')) {
      $('#mierSelectFourth').prop('checked', true);
      $('#fourthMiercoles').text('miercoles 8:00 - 12:59');
      $('#fourthJueves').text('');
      $('#fourthSabado').text('');
    }
    if ($('#jueSelectFourth').is(':checked')) {
      $('#jueSelectFourth').prop('checked', true);
      $('#fourthJueves').text('jueves 14:00 - 17:59');
      $('#fourthMiercoles').text('');
      $('#fourthSabado').text('');
    }
    if ($('#sabSelectFourth').is(':checked')) {
      $('#sabSelectFourth').prop('checked', true);
      $('#fourthSabado').text('sabado 18:00 - 21:59');
      $('#fourthMiercoles').text('');
      $('#fourthJueves').text('');
    }
    // Fifth Class
    if ($('#lunSelectFifth').is(':checked')) {
      $('#lunSelectFifth').prop('checked', true);
      $('#fifthLunes').text('lunes 8:00 - 12:59');
      $('#fifthMartes').text('');
      $('#fifthViernes').text('');
    }
    if ($('#marSelectFifth').is(':checked')) {
      $('#marSelectFifth').prop('checked', true);
      $('#fifthMartes').text('martes 14:00 - 17:59');
      $('#fifthLunes').text('');
      $('#fifthViernes').text('');
    }
    if ($('#vierSelectFifth').is(':checked')) {
      $('#vierSelectFifth').prop('checked', true);
      $('#fifthViernes').text('viernes 18:00 - 21:59');
      $('#fifthLunes').text('');
      $('#fifthMartes').text('');
    }
  }
});
