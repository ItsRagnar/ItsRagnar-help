// Styled Components
import styled from "styled-components";

// Material UI
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

// React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  // Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 0,
    slidesToScroll: 0,
    autoplay: true,
    pauseOnHover: false,
    swipe: true,
    arrows: false,
    autoplaySpeed: 1500,
    customPaging: () => <FiberManualRecordIcon />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Wrapper {...settings}>

    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled(Slider)`
  div {
    img {
      width: 100%;
      height: 250px;
      object-fit: cover;

      @media only screen and (max-width: 600px) {
        height: 175px;
      }
    }
  }

  .slick-slide div {
    outline: none;
    border: 1px solid transparent;
  }
`;
