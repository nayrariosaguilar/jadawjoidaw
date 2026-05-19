const currencyFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
});

export function formatPrice(amount: number): string {
  return currencyFormatter.format(amount);
}
