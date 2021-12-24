import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import api from './services/api';
import Main from "./components/menu";


export default class TesteApi extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    api.get(`/books?_quantity=20`)
      .then(res => {

        const livros = res.data.data;
        this.setState({ livros });
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

  }

  render() {
    return (
      <Main data = {this.state.books}/>
    )
  }
}

ReactDOM.render(<TesteApi />, document.getElementById('root'))