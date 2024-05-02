import { useEffect, useState } from "react";

const BatchList = () => {
  const [batch, setBatch] = useState([]);

  useEffect(() => {
    const newset = Array.from(
      new Set(JSON.parse(sessionStorage.getItem("batch")))
    );
    if (newset.length > 0) {
      setBatch(newset);
    }
  }, []); // empty dependency array to run only once on mount

  return (
    <>
      {batch.map((item) => (
        <option key={item} value={item}>{item}</option>
      ))}
    </>
  );
};

export default BatchList;
