import React, { Component } from 'react';
import './style/home.scss'

export class Home extends Component {
  static displayName = Home.name;
  render() {
      return (
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                  <div className="carousel-item slide-1 active">
                      <div className="imgText">
                          <h2>Welcome to The Best Electronic Store</h2>
                          <p>We dedicate our lives to making sure that everyone is up to date with the newest technology at the best prices.</p>
                      </div>
                  </div>
                  <div className="carousel-item slide-2">
                      <div className="imgText">
                          <h2>Products</h2>
                          <p>We have a variety of products including smart televitions, drones, speackers and others. For more go to our product page</p>
                      </div>
                  </div>
                  <div className="carousel-item slide-3">
                      <div className="imgText">
                          <h2>Contact Us</h2>
                          <p>If you have any questions or consurns feel free to reach out by going to the contact page. Thank you for shopping with us</p>
                      </div>
                  </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
              </a>
          </div>
      );
  }
}

