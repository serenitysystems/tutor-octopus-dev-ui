import React from 'react';

import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Coursescard from './Coursescard';

function CoursesCarousel() {
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
      Title: "Subject ",
      image: "/imgs/courses1.png",
      
    },
    {
      id: 2,
      Title: "",
      image: "",
      
    }
    ,
    {
      id: 3,
      Title: "",
      image: "",
      
    }
    ,
    {
      id: 4,
      Title: "",
      image: "",
      
    },
    {
      id: 5,
      Title: "",
      image: "",
     
    }
  ]

  const coursescard = data.map((item) => <Coursescard Title={item.Title} url={item.image}
    
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
            {coursescard}

          </Carousel>
        </Container>
      </div>
      {/* ))} */}
    </div>
  );
}

export default CoursesCarousel
