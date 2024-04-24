import { useState } from "react";




const SelectDate = ({ data,onDateSelect }) => {

    const [selectedBatch,setSelectedBatch]=useState();


    const today2 = new Date();
    const [calenderDate, setcalenderDate] = useState(today2);
    const handleDateChange = (event) => {
        const newdate = event.target.value;
        setcalenderDate(newdate);
        //console.log(calenderDate);
        onDateSelect(calenderDate);
    };



    return (
        <div>
            <input
                type="date"
                className='batch89'
                id="calendar"
                name="calendar"
                value={calenderDate}
                onChange={handleDateChange}
                pattern="\d{4}-\d{2}-\d{2}"
            />
        </div>

    )

}
export default SelectDate





