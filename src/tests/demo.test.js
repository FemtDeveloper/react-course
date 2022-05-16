describe("Prubas que están en el demo.test.js", () => {
  test("Deben ser iguales los string", () => {
    const mensaje = "Primer mensaje";
    const mensaje2 = `Primer mensaje`;

    expect(mensaje).toBe(mensaje2);
  });
});
