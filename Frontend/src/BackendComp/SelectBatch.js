import { useState } from "react";

const SelectBatch = ({ register, BATCH }) => {
  return (
    <div>
      <select
        className="batch89"
        style={{ margin: "0rem" }}
        id="batch"
        {...register("batch", {})}
      >
        <option value="">Select Batch</option>
        {BATCH.map((item) => (
          <option value={item}>{item}</option>
        ))}

        <option value="Add_New_Batch">Add New Batch</option>
      </select>
    </div>
  );
};
export default SelectBatch;
