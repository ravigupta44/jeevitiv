import React from "react";

const EmployeesCard = ({ testimony, image, name }) => {
  return (
    <div className="Employees-card">
      <div className="Employees-body">
        <div className="Employees-image">
          <img src={image} alt="employee" className='mb-md-4 mb-2'/>
          <div className="Employees-details">
            <p>{testimony}</p>
          </div>
        </div>  
        <p className='Employees-name'>{name}</p>
      </div>
    </div>
  );
};
export default EmployeesCard;
