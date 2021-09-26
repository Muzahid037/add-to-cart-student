import React from 'react';

const Cart = (props) => {
    //console.log(props.cart.length);
    const { cart } = props;
    let sum=0;
    for(const student of cart)
    {
        sum+=student.ScholarshipAmount;
    }
    return (
        <div className="cart">
            <h2>Student Added: {cart.length}</h2>
            <h4>Total Schol. Amount: ${sum}</h4>
            {
                cart.map(student=> <p key={student.id}>{student.name}</p> )
            }
        </div>
    );
};

export default Cart;