import React from 'react';
import ReactDOM from 'react-dom';
import { configureClient } from './client';
import Container from './Container';
import './index.css';

configureClient('https://api.github.com/graphql', {
  headers: {
    Authorization: 'Bearer 1ea78121248da28183fe8044a4c887176ecf1301',
  },
});

ReactDOM.render(
  <Container />,
  document.getElementById('root'),
);
