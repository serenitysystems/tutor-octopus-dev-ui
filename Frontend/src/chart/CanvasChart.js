import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import "./CanvasChart.css";  // Import the CSS file

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CanvasChart = ({ perform }) => {
 // console.log(perform);
  const performanceData = [
    { percentage_below: "100%", percentage_above: "91%", students: perform['90+'] },
    { percentage_below: "90%", percentage_above: "81%", students: perform['80-89'] },
    { percentage_below: "80%", percentage_above: "71%", students: perform['70-79'] },
    { percentage_below: "70%", percentage_above: "61%", students: perform['60-69'] },
    { percentage_below: "60%", percentage_above: "51%", students: perform['<60'] },
  ];
  // const performanceData = [
  //   { percentage_below: "100%", percentage_above: "91%", students: 20 },
  //   { percentage_below: "90%", percentage_above: "81%", students: 30 },
  //   { percentage_below: "80%", percentage_above: "71%", students: 40 },
  //   { percentage_below: "70%", percentage_above: "61%", students: 60 },
  //   { percentage_below: "60%", percentage_above: "51%", students: 90 },
  // ];

  const processData = (data) => {
    const ranges = {
      ">=90": 0,
      "80 to 89": 0,
      "70 to 79": 0,
      "60 to 69": 0,
      "<=60": 0,
    };

    data.forEach((performance) => {
      if (parseInt(performance.percentage_above) >= 90)
        ranges[">=90"] += performance.students;
      else if (parseInt(performance.percentage_above) >= 80)
        ranges["80 to 89"] += performance.students;
      else if (parseInt(performance.percentage_above) >= 70)
        ranges["70 to 79"] += performance.students;
      else if (parseInt(performance.percentage_above) >= 60)
        ranges["60 to 69"] += performance.students;
      else ranges["<=60"] += performance.students;
    });

    return Object.entries(ranges).map(([label, students]) => ({
      label,
      y: students,
    }));
  };

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: { text: "Student Performance" },
    axisY: { title: "Number of Students", includeZero: true },
    axisX: { title: "Percentage Range" },
    data: [
      {
        type: "column",
        indexLabel: "{y}",
        indexLabelFontColor: "#5A5757",
        indexLabelPlacement: "outside",
        dataPoints: processData(performanceData),
      },
    ],
  };

  return (
    <div className="chart-container">
      <CanvasJSChart options={options} />
    </div>
  );
};

export default CanvasChart;
