import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Login from './Login';
import { Link } from 'react-router-dom';


type Category = {
    id: number;
    name: string;
};

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/category/')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => console.error(`Error: ${error}`));
    }, []);

    return (
        <nav className="navbar">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => navigate(`/products/${category.id}`)}
                >
                    {category.name}
                </button>
            ))}
            <Link to="/" className="navbar-red-text"><h4>סוּפרוֹי</h4></Link>
        </nav>
    );
};

export default Navbar;
