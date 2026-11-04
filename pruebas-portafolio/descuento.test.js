const calcularDescuento = require("./descuento");

test("Aplica un descuento de 20%", () => {
  expect(calcularDescuento(100, 20)).toBe(80);
});

test("No aplica descuento cuando es 0%", () => {
  expect(calcularDescuento(100, 0)).toBe(100);
});