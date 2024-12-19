function makeStyledQrCode(
  url,
  shapeType,
  fileType,
  color,
  size,
  cornerShapeType,
  cornersDotType
) {
  const qrCode = new QRCodeStyling({
    width: size,
    height: size,
    type: fileType,
    data: url,
    // image:
    //   "https://elsewhere.to/static/media/moon-transparent.1aef3e17886ed29bcbf4.png",
    dotsOptions: {
      color: color,
      type: shapeType,
    },
    backgroundOptions: {
      color: "transparent",
    },
    // imageOptions: {
    //   // crossOrigin: "anonymous",
    //   margin: 10,
    // },
    cornersSquareOptions: {
      color: color,
      type: cornerShapeType,
    },
    cornersDotOptions: {
      color: color,
      type: cornersDotType,
    },
  });

  qrCode.append(document.getElementById("qr-canvas"));

  window.qrCode = qrCode;
}

function downloadQrCode() {
  window.qrCode.download({ name: "qr", extension: "svg" });
}
