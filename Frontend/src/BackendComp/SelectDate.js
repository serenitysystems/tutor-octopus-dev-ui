const SelectDate = ({ register }) => {
  return (
    <div>
      <input
        type="date"
        className="batch89"
        style={{ margin: "0rem" }}
        id="calendar"
        name="calendar"
        pattern="\d{4}-\d{2}-\d{2}"
        {...register("date", {})}
      />
    </div>
  );
};
export default SelectDate;
