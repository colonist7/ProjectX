import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { Image } from "react-bootstrap";
import { UsersBlock } from "./People.style";

class PeopleShell extends Component {
  componentDidMount = () => {
    this.props.getAllUsers();
  };

  render() {
    const { users, follow } = this.props;

    return (
      <UsersBlock>
        <h5 className="title">People you may know</h5>
        {users && (
          <CarouselProvider
            className="users-slider"
            visibleSlides={3}
            naturalSlideWidth={60}
            naturalSlideHeight={60}
            totalSlides={users.length}
            dragEnabled={false}
            infinite={false}
            step={1}
          >
            <ButtonBack className="carousel__back-button">
              <FontAwesomeIcon icon={faChevronLeft} />
            </ButtonBack>
            <Slider className="slider">
              {users.map((item, index) => {
                return (
                  <Slide index={index} key={"slide" + index} className="slider-item">
                    <Image
                      onClick={(e) => {
                        follow(item.userId ? item.userId : "", item.userName);
                      }}
                      src={require("../../../assets/images/profile.png")}
                      alt={item.userName}
                      title={item.userName}
                    ></Image>
                  </Slide>
                );
              })}
            </Slider>
            <ButtonNext className="carousel__next-button">
              <FontAwesomeIcon icon={faChevronRight} />
            </ButtonNext>
          </CarouselProvider>
        )}
      </UsersBlock>
    );
  }
}

export default PeopleShell;
