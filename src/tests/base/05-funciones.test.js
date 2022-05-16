import { getUser, getUsuarioActivo } from "../../base/05-funciones";
import "@testing-library/jest-dom";

describe("pruebas en funciones.js", () => {
  test("should return an object", () => {
    const usertest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    expect(user).toEqual(usertest);
  });
  test("should return an object activo", () => {
    const usertestActivo = {
      uid: "ABC567",
      username: "Felix",
    };
    const name = "Felix";
    const user = getUsuarioActivo(name);
    expect(user).toEqual(usertestActivo);
  });
});
