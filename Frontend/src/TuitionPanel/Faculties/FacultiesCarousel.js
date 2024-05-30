import React, { useState, useEffect } from 'react';

import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Facultiescard from './Facultiescard';

function FacultiesCarousel() {
  // const [data, setData] = useState([]);
  // const [filter, setFilter] = useState([]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  // const getProduct = async () => {
  //   try {
  //     const req = await fetch("https://fakestoreapi.com/products");
  //     const res = await req.json();
  //     setData(res);
  //     setFilter(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
  //   getProduct();
  // }, []);
  const data = [
    {
      id: 1,
      Title: "Cathy",
      image: "/img/img1.jpeg",
      Subject: 'Subject :',
      Exp: "Exp.",
      Exps: ": 4 ",
      description: "English..."
    },
    {
      id: 2,
      Title: "",
      image: "",
      Subject: '',
      Exp: "",
      Exps: "",
      description: ""
    }
    ,
    {
      id: 3,
      Title: "",
      image: "",
      Subject: '',
      Exp: "",
      Exps: "",
      description: ""
    }
    ,
    {
      id: 4,
      Title: "",
      image: "",
      Subject: '',
      Exp: "",
      Exps: "",
      description: ""
    },
    {
      id: 5,
      Title: "",
      image: "",
      Subject: '',
      Exp: "",
      Exps: "",
      description: ""
    }
  ]

  const facultiescard = data.map((item) => <Facultiescard Title={item.Title} url={item.image}
    description={item.description} Subject={item.Subject} Exp={item.Exp} Exps={item.Exps}
  />
  )
  return (
    <div>
      {/* {data.map((d) => ( */}
      <div>

        <Container>
          <Carousel
            swipeable={false}
            draggable={false}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}

            responsive={responsive}
            ssr={true}
            infinite={true}


          >
            {facultiescard}

          </Carousel>
        </Container>
      </div>
      {/* ))} */}
    </div>
  );
}

export default FacultiesCarousel
