import React from 'react';
import ReactDOM from 'react-dom';
import ProductsPage from './ProductsPage';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ProductsPage />
  </BrowserRouter>,
  document.getElementById('root')
);