const handleTotal = () => {
  const prods = JSON.parse(localStorage.getItem('cart'));
  console.log(prods);
  const subTotalArray = prods.map((prod) => prod.subTotal);
  const total = subTotalArray.reduce((acc, curr) => acc + curr, 0);
  console.log(total.toFixed(2));
  return total.toFixed(2);
};

export default handleTotal;
