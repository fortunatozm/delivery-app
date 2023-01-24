import { useHistory } from 'react-router-dom';

function Navbar() {
  const history = useHistory();

  const routeChange = (route) => {
    history.push(route);
  };

  return (
    <header>
      <nav>
        <button
          data-testid="customer_products__element-navbar-link-products"
          type="button"
          onClick={ () => routeChange('produtos') }
        >
          Produtos
        </button>
        <button
          data-testid="customer_products__element-navbar-link-orders"
          type="button"
          onClick={ () => routeChange('pedidos') }
        >
          Meus pedidos
        </button>
        <p data-testid="customer_products__element-navbar-user-full-name">
          Nome de usuário
        </p>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
        >
          Sair
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
