import React from 'react';
import ReactDOM from 'react-dom';
import { configureClient } from './client';
import Container from './Container';
import './index.css';

configureClient('https://api.github.com/graphql', {
  headers: {
    Authorization: 'Bearer TOKEN_HERE',
  },
});

ReactDOM.render(
  <Container />,
  document.getElementById('root'),
);
