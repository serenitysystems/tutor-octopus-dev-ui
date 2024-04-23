import React, { useState, useEffect } from "react";
import Chart from 'react-apexcharts';

function PieChart() {


    // const [contryname, setCountryname]= useState([]);
    // const [medal, setMedal]= useState([]);

    // useEffect( ()=>{
    //  const getdata= async()=>{
    //       const countryname=[];
    //       const getmedal=[];

    //     const reqData= await fetch("http://localhost/reactgraphtutorial/medals"); 
    //     const resData= await reqData.json();
    //     for(let i=0; i<resData.length; i++)
    //     {
    //         countryname.push(resData[i].country);
    //         getmedal.push(parseInt(resData[i].medals));
    //     }
    //     setCountryname(countryname);
    //     setMedal(getmedal);


    //  }
    //  getdata();
    // },[]);


    return (
        <React.Fragment>

            {/* <Chart  type="donut"
                width={1349}
                height={550}
                series={medal}

                options={{
                    labels: contryname,
                    title: {
                        text: "Medal Country Name",

                    },

                    plotOptions: {
                        pie: {
                            donut: {
                                labels: {
                                    show: true,
                                    total: {
                                        show: true,
                                        showAlways: true,

                                        fontSize: 30,
                                        color: '#f90000',
                                    }
                                }
                            }
                        }

                    },

                    dataLabels: {
                        enabled: true,
                    }

 }}  /> */}
            <Chart
                type="donut"
                width={330}
                height={600}

                series={[40, 60]}

                options={{
                    labels: ['Fail', 'Pass'],
                    // title: {
                    //     text: "Medal Country Name",
                    //     // align:"center",
                    // },

                    plotOptions: {
                        pie: {
                            donut: {
                                labels: {
                                    show: true,

                                    total: {
                                        show: true,
                                        showAlways: true,
                                        formatter: () => 'Students',

                                        fontSize: 20,

                                        color: 'black',
                                    }
                                }
                            }
                        }

                    },

                    dataLabels: {
                        enabled: true,
                    }


                }}

            />


        </React.Fragment>
    );
}
export default PieChart;