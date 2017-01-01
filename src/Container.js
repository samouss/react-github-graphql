import React, { Component } from 'react';
import { query } from './client';

const defaultVariables = {
  direction: 'DESC',
};

const graphQuery = `
  query(
    $after: String,
    $direction: OrderDirection!,
  ) {
    viewer {
      login
      repositories(
        first: 5,
        after: $after,
        orderBy: {field: PUSHED_AT, direction: $direction},
      ) {
        edges {
          node {
            id,
            name
            description
            createdAt
            pushedAt
          },
          cursor,
        }
      }
    }
  }
`;

class Container extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: {},
    };
  }

  componentDidMount() {
    query(graphQuery, {
      ...defaultVariables,
    }).then(res => {
      this.setState({
        isLoading: false,
        data: res,
      });
    });
  }

  render() {
    const { isLoading, data } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <h1>React starter</h1>
        Github account of <strong>{data.viewer.login}</strong>
        <ul>
          {data.viewer.repositories.edges.map(edge => (
            <li key={edge.node.id}>{edge.node.name} - {edge.node.pushedAt}</li>
          ))}
        </ul>
      </div>
    );
  }

}

export default Container;
