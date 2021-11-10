import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import MovieInfo from "./MovieInfo";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }
  componentDidMount() {
    console.log(this.props.movies);
  }
  render() {
    const settings = {
      className: "center",
      focusOnSelect: true,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
    };
    return (
      <div>
        <div className="container">
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <style>{cssstyle}</style>

          <Slider {...settings}>
            {this.props.movies.map((movie) => {
              return (
                <div>
                  <MovieCard poster={movie.medium_cover_image} />
                </div>
              );
            })}
          </Slider>
        </div>
        <MovieInfo movie={this.props.movies[this.state.slideIndex]} />
        <FontAwesomeIcon icon={"angle-down"} />
      </div>
    );
  }
}

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 800px;
}


.slick-prev::before {
    content: "<";
  
}
.slick-next::before {
    content: ">";
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
.center .slick-center div {
    color: #e67e22;
    opacity: 1;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
    transition:0.3s all ease
   
}

.slick-slide:not(.slick-center) {
    opacity: 0.5;
 }

.center h3 {
    transition: all .3s ease;
}
`;
