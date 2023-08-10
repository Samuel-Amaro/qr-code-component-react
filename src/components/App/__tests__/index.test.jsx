import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "..";

test("renderiza App", () => {
    render(<App />);

    expect(screen.getByRole("main")).toBeInTheDocument();
});