import React from 'react';

import { ProductsWrapper } from './styles';

export const Products = () => (
  <ProductsWrapper>
    <ul className="primary">
      <li>
        <span className="payments" />

        <div>
          <h3>Payments</h3>
          <p>Pagamentos online</p>
        </div>
      </li>
      <li>
        <span className="billing" />

        <div>
          <h3>Billing</h3>
          <p>Pagamentos online</p>
        </div>
      </li>
      <li>
        <span className="connect" />

        <div>
          <h3>Connect</h3>
          <p>Pagamentos online</p>
        </div>
      </li>
    </ul>

    <ul className="secondary">
      <li>
        <span className="sigma" />

        <h3>Sigma</h3>
        <p>Análises e relatórios comerciais avançados</p>
      </li>
      <li>
        <span className="atlas" />

        <h3>Sigma</h3>
        <p>Análises e relatórios</p>
      </li>
      <li>
        <span className="radar" />

        <h3>Sigma</h3>
        <p>Análises e relatórios</p>
      </li>
      <li>
        <span className="issuing" />

        <h3>Sigma</h3>
        <p>Análises e relatórios</p>
      </li>
      <li>
        <span className="terminal" />

        <h3>Sigma</h3>
        <p>Análises e relatórios</p>
      </li>
    </ul>
  </ProductsWrapper>
);