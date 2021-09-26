import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <h1>Student <span className="highlight">Scholarship</span> Management System</h1>
            <p>Scholarship is financial support awarded to a student, based on academic achievement that may include financial need, for the purpose of schooling.</p>
            <h2>Total Budget: 10 Million</h2>
        </div>
    );
};

export default Header;