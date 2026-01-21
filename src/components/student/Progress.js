import { Chart } from "react-google-charts";
import React from 'react';
import "./Progress.css";

var data = [
    // [
    //   'Month',
    //   'Bolivia',
    //   'Ecuador',
    //   'Madagascar',
    //   'Papua New Guinea',
    //   'Rwanda',
    //   'Average',
    // ],
    // ['2004/05', 165, 938, 522, 998, 450, 614.6],
    // ['2005/06', 135, 1120, 599, 1268, 288, 682],
    // ['2006/07', 157, 1167, 587, 807, 397, 623],
    // ['2007/08', 139, 1110, 615, 968, 215, 609.4],
    // ['2008/09', 136, 691, 629, 1026, 366, 569.6],


    
    ['Element', 'Density', { role: 'style' }],
    ['HTML', 50.94, 'red'],            // RGB value
    ['CSS', 70.49, 'red'],            // English color name
    ['JavaScript', 89.30, 'red'],
  ['DSA', 41.45, 'color: red' ], // CSS-style declaration
  ['Algorithm', 15.45, 'color: red' ], // CSS-style declaration
  ['DBMS', 91.45, 'color: red' ], // CSS-style declaration
  ];



// gantt
const data1 = [
    [
      { type: "string", label: "Task ID" },
      { type: "string", label: "Task Name" },
      { type: "string", label: "Description" },
      { type: "date", label: "Start Date" },
      { type: "date", label: "End Date" },
      { type: "number", label: "Duration" },
      { type: "number", label: "Percent Complete" },
      { type: "string", label: "Dependencies" }
    ],
    [
      "id_1",
      "HTML",
      "skeleton",
      new Date(2020, 2, 22),
      new Date(2020, 5, 20),
      null,
      80,
      null
    ],
    [
      "id_2",
      "CSS",
      "style",
      new Date(2020, 6, 1),
      new Date(2021, 3, 15),
      null,
      60,
      null
    ],
    [
      "id_3",
      "Javascript",
      "scripting",
      new Date(2021, 3, 1),
      new Date(2022, 3, 15),
      null,
      80,
      null
    ],
    [
      "id_4",
      "React",
      "Library",
      new Date(2022, 3, 1),
      new Date(2023, 3, 15),
      null,
      60,
      null
    ],
    [
      "id_5",
      "Node JS",
      "Backend",
      new Date(2022, 7, 1),
      new Date(2023, 5, 15),
      null,
      30,
      null
    ],
    [
      "id_6",
      "DSA",
      "aa",
      new Date(2023, 1, 1),
      new Date(2023, 5, 15),
      null,
      70,
      null
    ],
    [
      "id_7",
      "DBMS",
      "Database Management System",
      new Date(2022, 8, 1),
      new Date(2023, 5, 25),
      null,
      60,
      null
    ]
  ];

  const options = {
    height: 400,
    gantt: {
      trackHeight: 30
    },
    backgroundColor: {
        fill: 'black',
    } ,
    is3D: true
  };

  const handleClick = (event) => {
    console.log(event);
  };

  const handleSelect = (event) => {
    console.log("SELECT");
  };

export default function Progress() {
  return (
    <>
    <div className="box-3">

    <div className="mid">
    <div className="todo-nav">
                <span className="active">All Tasks</span>
                <span>Completed</span>
                <span>In Progress</span>
                <span>Pending</span>
            </div>
        <Chart
          width="100%"
          height="400px"
          color="red"
            background={'black'}
            chartType="ComboChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
              title: 'Performance',
              vAxis: { title: 'Percentage' },
              hAxis: { title: 'Subject' },
              seriesType: 'bars',
              series: { 5: { type: 'line' } },
              height: 400,
              gantt: {
                trackHeight: 30
              },
              backgroundColor: {
                  fill: 'black',
              } ,
              is3D: true
            }}
            rootProps={{ 'data-testid': '1' }}
        />        

        <Chart
              width="100%"
              height="400px"
              chartType="Gantt"
              loader={<div>Loading Chart</div>}
              data={data1}
              options={options}
              rootProps={{ "data-testid": "5" }}
              click={handleClick}
              select={handleSelect}
              chartEvents={[
                {
                  eventName: "select",
                  callback: ({ chartWrapper }) => {
                    const chart = chartWrapper.getChart();
                    const selection = chart.getSelection();
      
                    console.log(selection);
                  }
                }
              ]}
            />    
                             
    </div>

    </div>
    </>
  )
}
    

