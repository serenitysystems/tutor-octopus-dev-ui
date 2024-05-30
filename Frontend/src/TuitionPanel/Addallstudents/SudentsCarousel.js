import React from 'react';

import { Container, Card, Row, Col, CardGroup } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Studentscard from './Studentscard';

function SudentsCarousel() {
    // const [data, setData] = useState([]);
    // const [filter, setFilter] = useState([]);


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
            id: 1,
            Title: "Subject ",
            image: "/imgs/courses1.png",

        },
        {
            id: 4,
            Title: "",
            image: "",

        },
        {
            id: 4,
            Title: "",
            image: "",

        },
        {
            id: 4,
            Title: "",
            image: "",

        },
        {
            id: 4,
            Title: "",
            image: "",

        },
        {
            id: 4,
            Title: "",
            image: "",

        },


    ]

    // const sudentscard = data.map((item) => 
    // <Studentscard Title={item.Title} url={item.image}

    // />
    // )
    return (
        <div>
            {/* {data.map((d) => ( */}
            <div>
                <Container>
                    <div class="row">
                        <h4 className='text-center my-5'>Add all students </h4>
                        <div class="col-xs-12 col-sm-5">
                            <img src='./imgs/StudentsStudi.png' className='aboutins9 my-1' />
                        </div>
                        <div class="col-xs-12 col-sm-7">
                            <div class="row">
                                {data.slice(0, 4).map((item) => {

                                    return (
                                        <div class="col-xs-12 col-sm-6" key={item.id} >



                                            <Studentscard Title={item.Title} url={item.image} />




                                        </div>
                                    )
                                })

                                }
                            </div>
                        </div>
                        <div className=''>


                        </div>
                    </div>


                    <div class="row">
                        {data.slice(4, 8).map((item) => {

                            return (
                                <div class="col-xs-12 col-sm-3" key={item.id} >



                                    <Studentscard Title={item.Title} url={item.image} />




                                </div>
                            )
                        })

                        }

                    </div>
                    <details>

                        <div class="row">
                            {data.slice(5).map((item) => {

                                return (
                                    <div class="col-xs-12 col-sm-3" key={item.id} >



                                        <Studentscard Title={item.Title} url={item.image} />




                                    </div>
                                )
                            })

                            }

                        </div>
                        <summary style={{textAlign:"center"}}>
                            <span class="summary-open">Show More</span>
                            <span class="summary-closed">Less More</span>

                        </summary>
                    </details>
                </Container>
            </div>
            {/* ))} */}
        </div>
    );
}

export default SudentsCarousel
