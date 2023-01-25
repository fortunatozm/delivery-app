const setStorage = (id, price, name, qnt) => {
  const alreadyExists = localStorage.getItem(id);
  console.log(id, price, name, qnt);
  if (alreadyExists === null) {
    console.log('entrou');
    localStorage.setItem(`Product${id}`, JSON.stringify({ id, price, name, qnt }));
  }
  localStorage.setItem(`Product${id}`, { ...qnt });
};
export default (setStorage);
