import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row } from 'react-bootstrap';
import './Navigation.css';

export default class Nav extends Component{
  render(){
    return (
      <div>
        <Row>
          <Link href='/'>Главная</Link>
          <Link href='/app/registration'>Регистрация</Link>
        </Row>
        {this.props.children}
      </div>
    );
  }
};
