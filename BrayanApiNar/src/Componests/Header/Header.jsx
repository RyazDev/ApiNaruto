import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState(''); 
    const handleSearch = () => {
        console.log(searchTerm); 
    };

    return (
        <header className="header">
            <div className="header-section title">
                <h1>Api Naruto</h1> 
            </div>
            <div className="header-section nav-buttons">
                <Link to="/" className="nav-btn">Home</Link>
                <Link to="/about" className="nav-btn">About</Link>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button className="nav-btn" onClick={handleSearch}>Search</button>
            </div>
        </header>
    );
};

export default Header;

