import React from 'react';

const CommonAllTable = ({ head, data, isButton , fn }) => {
  // Define the styles for table cells
  const cellStyle = {
    maxWidth: '200px', // Adjust the width as needed
    wordWrap: 'break-word',
    whiteSpace: 'normal',
    
    // Ensures that text wraps normally
  };

  return (
    <div className="container mt-4 ">
      <div className="table-responsive">
        <table className="table table-striped word-wrap">
          <thead className="head56  ">
            <tr className="th78 bg-primary">
              {head.map((item, index) => (
                <th className='bg-primary border border-white' key={index}>{item}</th>
              ))}
              {/* <th>Reminder</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((rowData, rowIndex) => (
              <tr key={rowIndex}>
                {head.map((key, colIndex) => (
                  <td key={colIndex} style={cellStyle} className={`${data[rowIndex].css}`}>
                    {/* <td key={colIndex} style={{ ...cellStyle, background: data[rowIndex].css }}></td> */}
                    {/* {Array.isArray(rowData[key])
                      ? rowData[key].join(', ')
                      : rowData[key]} */}
                      {
                        isButton ? <button onClick={fn}>submit</button> : Array.isArray(rowData[key])
                        ? rowData[key].join(', ')
                        : rowData[key]
                      }

                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommonAllTable;
