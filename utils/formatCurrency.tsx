export default (amount: number): string => {
  const currencyFormat = new Intl.NumberFormat(
    'en-US',
    {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }
  );

  return currencyFormat.format(amount);
}
