import image from "../images/image-qr-code.png";

export function QrCode() {
    return (
      <div className="image">
        <img src={image} alt="QR Code" />
      </div>
    );
}