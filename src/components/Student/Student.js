import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


import './Student.css'
const Student = (props) => {
    //console.log(props.student);
    const addIcon = <FontAwesomeIcon icon={faUserPlus} />
    const { name, img, id, _class, ScholarshipAmount, weight } = props.student;

    return (
        <div className="student">
            <img className="student-pic" src={img} alt="" />
            <h2>{name}</h2>
            <p>Class: {_class}</p>
            <p>Student Id: {id}</p>
            <p>Weight: {weight}</p>
            <p>Scholarship Amount: ${ScholarshipAmount}</p>


            <button
                onClick={() => props.handleAddStudentToCart(props.student)}
                className="add-btn">{addIcon} Add Student
            </button>

        </div>
    );
};

export default Student;