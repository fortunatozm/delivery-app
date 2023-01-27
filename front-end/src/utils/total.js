const handleTotal = () => {
  const prods = JSON.parse(localStorage.getItem('cart'));
  const subTotalArray = prods.map((prod) => prod.subTotal);
  const total = subTotalArray.reduce((acc, curr) => acc + curr, 0);

  return total;
};

export default handleTotal;
