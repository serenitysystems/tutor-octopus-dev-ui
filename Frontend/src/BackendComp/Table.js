const Table=({data})=>{

    const calendarData=data;
    // const keys=Object.keys(calendarData);
    let key=Object.keys(data)
    console.log(key)
    

    return(
        <table className="table table-striped">
        {/* <thead className='head56'>
            <tr className='head56'>
            <th className='th78'>Sl no.</th>
               {
                Object.keys(calendarData).map((item)=>(
                    <th className='th78'>{item}</th>
                ))
               }
            </tr>
        </thead>
        <tbody>
            {
                calendarData.map((value, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{value.eventTitle}</td>
                        <td>{value.desciption}</td>
                        <td>{value.time}</td>
                        <td>{value.time}</td>
                        <td>
                            <button onClick={()=>handleShow(value.email)} className="btn btn- bnnbtn" >
                                <FaRegEdit style={{color:"green"}} />
                            </button>
                            <button onClick={() => handleShowdeleteStudent(value.email)} className="bnnbtn">
                                <RiDeleteBin5Line style={{color:"red"}}  />
                            </button>
                        </td>
                    </tr>
                ))
            }
        </tbody> */}
    </table>
    )

}
export default Table