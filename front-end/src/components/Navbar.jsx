import { bool } from 'prop-types';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Navbar({ isSeller }) {
  const history = useHistory();
  const [user, setUser] = useState({});

  const routeChange = (route) => {
    history.push(route);
  };

  const logout = () => {
    history.push('/');
    localStorage.removeItem('user');
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  return (
    <header>
      <nav>
        <button
          data-testid="customer_products__element-navbar-link-products"
          type="button"
          onClick={ () => routeChange('products') }
        >
          Produtos
        </button>
        {!isSeller && (
          <button
            data-testid="customer_products__element-navbar-link-orders"
            type="button"
            onClick={ () => routeChange('/customer/orders') }
          >
            Meus pedidos
          </button>
        )}
        <p data-testid="customer_products__element-navbar-user-full-name">
          {user.name}
        </p>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          onClick={ logout }
        >
          Sair
        </button>
      </nav>
    </header>
  );
}

Navbar.defaultProps = {
  isSeller: false,
};

Navbar.propTypes = {
  isSeller: bool,
};

export default Navbar;
