import React, { Component } from "react";
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import MovieInfo from "./MovieInfo";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SliderContainer = styled.div`
  text-align: center;
  width: 100%;
`;

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
    const PrevArrow = ({ className, style, onClick }) => (
      <div onClick={onClick} className={className}>
        <FaAngleLeft />
      </div>
    );
    const NextArrow = ({ className, style, onClick }) => (
      <div style={{ ...style }} onClick={onClick} className={className}>
        <FaAngleRight />
      </div>
    );
    const settings = {
      className: "center",
      focusOnSelect: true,
      centerMode: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      infinite: true,
      centerPadding: "50px",
      slidesToShow: 3,
      beforeChange: (current, next) => {
        this.setState({ slideIndex: next });
      },
      afterChange: () => {
        this.props.changeCard(this.state.slideIndex);
      },
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
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
          <SliderContainer>
            <Slider {...settings}>
              {this.props.movies.map((movie) => {
                return (
                  <div>
                    <MovieCard poster={movie.medium_cover_image} />
                  </div>
                );
              })}
            </Slider>
          </SliderContainer>
        </div>
        <MovieInfo movie={this.props.movies[this.state.slideIndex]} />
      </div>
    );
  }
}

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  align-items:center;
  width:60%
}

.slick-prev::before, .slick-next::before {
  // font-family : "slick",
  font-size:40px;
  color: black;
}
// .slick-prev::before {
//     content: "<";
  
// }
// .slick-next::before {
//     content: ">";
// }

.center .slick-center div {
    color: #e67e22;
    opacity: 1;
    transition:0.3s all ease
   
}

.center .slick-center div img {
  box-shadow :0 0 15px grey;
}

.slick-slide:not(.slick-center) {
    opacity: 0.5;
 }
.slick-slide {
  margin : 0px, 100px;
}
.center h3 {
    transition: all .3s ease;
}
`;
