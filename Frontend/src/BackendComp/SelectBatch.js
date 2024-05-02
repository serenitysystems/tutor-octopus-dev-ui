import { useState } from "react";

const SelectBatch = ({ data, onBatchSelect }) => {
    
    const [selectedBatch, setSelectedBatch] = useState('');
   const batch= Array.from(new Set(JSON.parse(sessionStorage.getItem('batch'))));

   const handleBatchChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedBatch(selectedValue);
    // Pass the updated selected batch to the parent component
    onBatchSelect(selectedValue);
};



    return (
        <div> 
            <select className='batch89 ' id="batch" value={selectedBatch} onChange={handleBatchChange}>
                <option value="">Select Batch</option>
                {
                    batch.map((item) => (
                        <option value={item}>{item}</option>
                    ))
                }

                <option value="Add_New_Batch" >Add New Batch</option>
            </select>
        </div>

    )

}
export default SelectBatch