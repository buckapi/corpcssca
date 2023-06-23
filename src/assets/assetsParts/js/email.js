function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    if (name !== null
      && email !== null
      && phone !== null
      && message !== null) {
      var json_object = {
        "name": name,
        "email": email,
        "phone": phone,
        "message": message
      };
      $.ajax({
        cache: false,
        data: JSON.stringify(json_object),
        contentType: "application/json",
        dataType: "json",
        type: 'POST',
        url: 'https://5j1ya4v06c.execute-api.us-east-2.amazonaws.com/api',
        success: function () {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("message").value = "";
          toastr.success('Tu comentario fue enviado correctamente.', { timeOut: 5000 });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          toastr.error('Tuvimos un problema al recibir su solicitud, Favor de volver a intentar en unos minutos.');
        }
      });
    }
  }
  