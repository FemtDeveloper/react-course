import { getSaludo } from "../../base/02-template-string";

describe("pruebas en 02 template strings", () => {
  test("should regresar Hola Felix", () => {
    const nombre = "Felix";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe(`Hola ${nombre}!`);
  });
  test("should return Hola Carlos!", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Carlos!");
  });
});
