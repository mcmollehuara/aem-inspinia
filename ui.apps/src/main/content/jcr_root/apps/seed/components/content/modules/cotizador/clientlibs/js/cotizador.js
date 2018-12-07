
// $(document).ready(function () {
//     var failure = function (err) {
//         alert("Unable to retrive data " + err);
//     };
//     $.ajax({
//         url: "https://www.rimac.com.pe/SeguroVehicularRimac/services/tipovehiculo",
//         type: "POST",
//         dataType: 'json',

//         success: function (rawData, status, xhr) {
//             var data;
//             try {
//                 var json2 = rawData;
//                 var vehiculos = $("#tipoVehiculo");
//                 json2.forEach(element => {
//                     vehiculos.append('<option value="' + element.id + '">' + element.name + '</option>')
//                 });

//             } catch (err) {
//                 failure(err);
//             }
//         },
//         error: function (xhr, status, err) {
//             failure(err);
//         }
//     });
// }); // end ready

// function getMarca() {
//     var failure = function (err) {
//         alert("Unable to retrive data " + err);
//     };

//     $("#tipoVehiculoAlt").text($("#tipoVehiculo  option:selected").text());
//     $.ajax({
//         url: 'https://www.rimac.com.pe/SeguroVehicularRimac/services/marcas',
//         type: "POST",
//         dataType: 'json',
//         data: { tipovehiculo: $("#tipoVehiculo  option:selected").val() },
//         success: function (rawData, status, xhr) {
//             var data;
//             try {
//                 var json2 = rawData;
//                 var vehiculos = $("#tipoMarca");
//                 json2.forEach(element => {
//                     vehiculos.append('<option value="' + element.id + '">' + element.name + '</option>')
//                 });

//             } catch (err) {
//                 failure(err);
//             }
//         },
//         error: function (xhr, status, err) {
//             failure(err);
//         }
//     });
// }

// function getModelo() {
//     var failure = function (err) {
//         alert("Unable to retrive data " + err);
//     };

//     $("#tipoMarcaAlt").text($("#tipoMarca  option:selected").text());
//     $.ajax({
//         url: 'https://www.rimac.com.pe/SeguroVehicularRimac/services/modelos',
//         dataType: 'json',
//         type: 'POST',
//         data: { marca: $("#tipoMarca  option:selected").val() },
//         success: function (rawData, status, xhr) {
//             var data;
//             try {
//                 var json2 = rawData;
//                 var vehiculos = $("#tipoModelo");
//                 json2.forEach(element => {
//                     vehiculos.append('<option value="' + element.id + '">' + element.name + '</option>')
//                 });

//             } catch (err) {
//                 failure(err);
//             }
//         },
//         error: function (xhr, status, err) {
//             failure(err);
//         }
//     });
// }

// function onChangeModelo() {
//     $("#tipoModeloAlt").text($("#tipoModelo  option:selected").text());
// }

// function getCotizacion() {
//     var failure = function (err) {
//         alert("Unable to retrive data " + err);
//     };
    
//     $.ajax({
//         url: 'https://pemz544hoc.execute-api.us-east-2.amazonaws.com/prod/page_datos',
//         dataType: "json",
//         type: 'POST',
//         data: {
//             'tipovehiculo': $("#tipoVehiculo  option:selected").text(),
//             'tipovehiculoid': $("#tipoVehiculo").val(),
//             'marca': $("#tipoMarca  option:selected").text(),
//             'marcaid': $("#tipoMarca").val(),
//             'modelo': $("#tipoModelo  option:selected").text(),

//             'modeloid': $("#tipoModelo  option:selected").val(),
//             'anio': 2018,
//             'gas': true,
//             'origen': '',
//             'origenMedio': '',
//             'origenContenido': '',

//             'origenCampania': '',
//             'tipoLead': 'Cotizador'
//         }
//         ,
//         success: function (rawData, status, xhr) {
//             var data;
//             try {
//                 var json2 = rawData;
//                 var vehiculos = $("#result");
//                 json2.forEach(element => {
//                     vehiculos.append('<li>' + element.name + '</li>')
//                 });

//             } catch (err) {
//                 failure(err);
//             }
//         },
//         error: function (xhr, status, err) {
//             failure(err);
//         }
//     });
// }
