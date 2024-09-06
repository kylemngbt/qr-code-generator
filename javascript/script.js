const imgBox = document.querySelector("#img-box");
const qrImage = document.querySelector("#qr-image");
const qrText = document.querySelector("#qr-text");
const generateBtn = document.querySelector(".container button");

function generateQr() {
  qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
}

