function previewImages() {

  var $card = `<div class='card'></div>`;
  var $preview = $('#preview').empty();
  if (this.files) $.each(this.files, readAndPreview);

  function readAndPreview(i, file) {

    if (!/\.(jpe?g|png)$/i.test(file.name)) {
      return alert(file.name + " is not an image");
    } // else...

    var reader = new FileReader();

    $(reader).on("load", async function () {
      // $preview.append($("<img/>", { src: this.result, height: 100 }));
      $preview.append($(
        `<div class='col-md-4'>
          <div class="card">
            <div class="card-body p-0">
              <img class="card-img-top" src='${this.result}' alt="uploaded_file" height="100">
                <div class="card-text">
                  <form class='container'>
                    <label for="title">Title</label>&nbsp;
                    <input type="text" class='form-control' />
                  </form>
                </div>
              <a class="btn btn-danger btn-sm"></a>  
            </div>
          </div>
        </div>`
      ));
    });

    reader.readAsDataURL(file);

  }

}

$('#file-input').on("change", previewImages);