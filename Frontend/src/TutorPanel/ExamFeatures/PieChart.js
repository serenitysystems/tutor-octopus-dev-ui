import React, { useState, useEffect } from "react";
import Chart from 'react-apexcharts';
import { Stack } from "react-bootstrap";
import { GoDotFill } from "react-icons/go";

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
    const students = [
        { studentName: 'John', rank: 1, marksPercentage: 85,status:"pass" },
        { studentName: 'Alice', rank: 2, marksPercentage: 78 ,status:"pass"},
        { studentName: 'Bob', rank: 3, marksPercentage: 92,status:"pass" },
        // Add more student data as needed
      ];

      let passCount = 0;
      let failCount = 0;

      // Iterate through the students array
      students.forEach((student) => {
        // Check the status of each student and increment the corresponding counter
        if (student.status === "pass") {
          passCount++;
        } else if (student.status === "fail") {
          failCount++;
        }
      });
      

    return (
        <div>
            <React.Fragment>


<Chart
    type="donut"
    width={330}
    height={600}

    series={[failCount,passCount]}

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
<Stack direction="horizontal" gap={3}>
<div className="bnnnui">
 <p style={{ fontSize: "18px", margin: "0px" }}><b style={{ fontSize: "25px" }}>{passCount}</b> Pass</p>
 <p style={{ fontSize: "18px" }}><b style={{ fontSize: "25px" }}>{failCount}</b> Fail</p>
</div>

<div className="bnnnuib">
 <p style={{ fontSize: "18px", margin: "0px" }} ><GoDotFill style={{ fontSize: "30px", color: "#F56954" }} /> Fail</p>
 <p style={{ fontSize: "18px", margin: "3px 0px 0px 0px" }}><GoDotFill style={{ fontSize: "30px", color: "#5CB9B1" }} /> Pass</p>
</div>
</Stack>
        </div>
    );
}
export default PieChart;