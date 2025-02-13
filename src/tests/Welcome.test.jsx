import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome"; // Assicurati che il percorso sia corretto
import { describe, expect, it } from "vitest";

describe("looks for the h1 in the page ", () => {
  it("the h1 correctly", async () => {
    // 1)Monta il componente
    render(<Welcome />);
    //screen.debug()
    //2) andiamo a cercare l'elemento tramite il suo contenuto testuale

    const alert = screen.getByText(/benvenuti in epibooks!/i);
    // 4) verifica delle aspettative: verificare la presenza dell'elemento nel documento
    expect(alert).toBeInTheDocument();
  });
});
