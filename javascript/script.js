const imgBox = document.querySelector("#img-box");
const qrImage = document.querySelector("#qr-image");
const qrText = document.querySelector("#qr-text");
const generateBtn = document.querySelector(".container button");

function generateQr() {
  if (qrText.value.length > 0) {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000)
  }
}

generateBtn.addEventListener("click", generateQr);

