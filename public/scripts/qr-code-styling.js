function makeStyledQrCode(url) {
  const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    type: "svg",
    data: url,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    dotsOptions: {
      color: "#4267b2",
      type: "rounded",
    },
    backgroundOptions: {
      color: "#e9ebee",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 20,
    },
  });

  qrCode.append(document.getElementById("canvas"));
  qrCode.download({ name: "qr", extension: "svg" });
}
