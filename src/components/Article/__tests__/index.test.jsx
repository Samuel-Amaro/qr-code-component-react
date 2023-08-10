import "@testing-library/jest-dom";
import { render, screen} from "@testing-library/react";
import { Article } from "..";

it("renderiza article componente", () => {
    render(<Article title="Título Teste" description="teste descrição" />);

    expect(screen.getByRole("heading")).toHaveTextContent("Título Teste");

    expect(screen.getByText("teste descrição")).toBeTruthy();
});
