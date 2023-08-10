import image from "../../images/image-qr-code.png";

export function Header() {
    return (
      <header className="header" data-testid="header">
        <img src={image} alt="QR Code" />
      </header>
    );
}