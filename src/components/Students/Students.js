import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Student from '../Student/Student';
import './Students.css';

const Students = () => {
    const [students, setStudents] = useState([]);

    const [cart, setCart] = useState([]);

    const handleAddStudentToCart = (student) => {
        //console.log(student.id);

        if (cart.indexOf(student) === -1) {
            const newStudentCart = [...cart, student];
            setCart(newStudentCart);
        }
    }

    useEffect(() => {
        fetch('./students.json')
            .then(res => res.json())
            .then(data => setStudents(data));
    }, [])
    return (
        <div className="students-container">
            <div className="students">
                {
                    students.map(student => <Student
                        key={student.id}
                        handleAddStudentToCart={handleAddStudentToCart}
                        student={student}
                    />)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Students;