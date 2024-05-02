import React, { useState } from "react";

const RoleBased = ({ onRoleChange }) => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleChange = (event) => {
    const role = event.target.value;
    setSelectedRole(role);
    // Call the onRoleChange function passed from the parent component
    onRoleChange(role);
  };

  return (
    <div className="d-flex justify-content-center p-4 mt-2">
      <select aria-placeholder="Select User type"  className="form-select" value={selectedRole} onChange={handleChange}>
     
        <option value="Student">Student</option>
        <option value="Coaching institute">Coaching institute</option>
        <option value="Private Teacher">Private Teacher</option>
        <option value="Admin">Admin</option>
      </select>
    </div>
  );
};

export default RoleBased;
