function error(msg) {
  alert(msg);
}

var myDropzone = new Dropzone("#hotzone", {
  url: "nothing",
  autoProcessQueue: false,
  createImageThumbnails: false
});

myDropzone.on("addedfile", function(file) {

  if(!file.name.match(/\.svg/)) return error("This converter only works on SVG files");

  var r = new FileReader();
  r.onload = function(e) {
    fileUploaded(e.target.result, file.name);
  }

  r.readAsText(file);
});


function fileUploaded(contents, filename) {

  // read size of SVG
  var div = $('<div>' + contents + '</div>');
  var svg = div.find('svg');

  if(svg.length == 0) return error("Uploaded file doesn't have an SVG tag");

  var width = parseInt(svg.attr('width'));
  var height = parseInt(svg.attr('height'));
  var ratio = height / width;

  var convertWidth = width;
  var convertHeight = height;

  if(!width || !height) return error("SVG must have width and height attribute");

  // Create form
  var tmpl = '<form>' +
  '<label>Width</label> <input id="inputWidth" name="width" value="'+width+'" type="text">' +
  '<label>Height</label> <input id="inputHeight" name="height" value="'+height+'" type="text" disabled>' +
  '<input type="submit" value="Convert">' +
  '</form>';
  var form = $('<div id="form">' + tmpl + '</form>');
  $("#hotzone").replaceWith(form);

  $("#inputWidth").on('input', function() {
    convertWidth = parseInt($(this).val());
    convertHeight = Math.round(convertWidth * ratio);
    $("#inputHeight").val(convertHeight);
  });

  $("#form").on('submit', function(e) {
    e.preventDefault();
    var newFilename = filename.replace('.svg', '.png');
    createPNG(convertWidth, convertHeight, contents, newFilename);
  });
}

function createPNG(width, height, contents, filename) {

  var src = 'data:image/svg+xml;utf8,' + contents;

  // from here:
  // https://gist.github.com/mbostock/6466603
  $("#form").replaceWith('<canvas width="'+width+'" height="'+height+'"></canvas>');

  var canvas = document.querySelector("canvas");
  var context = canvas.getContext("2d");

  var image = new Image;
  image.src = src;
  image.onload = function() {
    context.drawImage(image, 0, 0, width, height);
    var a = document.createElement("a");
    a.download = filename;
    a.href = canvas.toDataURL("image/png");
    a.click();
  };
}
