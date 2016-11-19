import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Grid } from 'react-bootstrap';
import './Navigation.css';

export default class Nav extends Component{
  render(){
    return (
      <Grid>
        <Row>
          <div className="menu-background">
            <div className="menu">
              <Link href='/' className="link-menu">Главная</Link>
              <Link href='/app/registration' className="link-menu">Регистрация</Link>
            </div>
          </div>
        </Row>
        {this.props.children}
      </Grid>
    );
  }
};
