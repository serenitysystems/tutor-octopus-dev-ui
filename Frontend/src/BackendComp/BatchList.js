import { useEffect, useState } from "react";

const BatchList = () => {
  const [batch, setBatch] = useState([]);

  useEffect(() => {
    const newset = Array.from(
      new Set(JSON.parse(sessionStorage.getItem("batch")))
    );
    setBatch(newset);
  }, [batch]);

  return (
    <>
      {batch.map((item) => (
        <option value={item}>{item}</option>
      ))}
    </>
  );
};
export default BatchList;
