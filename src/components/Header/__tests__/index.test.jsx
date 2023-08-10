import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "..";

test("renderiza header", () => {
    render(<Header />);

    expect(screen.getByTestId("header")).toBeInTheDocument();

    expect(screen.getByAltText("QR Code")).toBeInTheDocument();
});