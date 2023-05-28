import { useState, useEffect } from 'react';
import Icon from './Icon';

import { FaTag } from "react-icons/fa";

import styles from '../styles/Category.module.css'

const Category = ({ name }) => {

    const [category, setCategory] = useState({});

    useEffect(() => {

        fetch(`http://localhost:3000/api/categories?name=${name}`)
            .then(res => res.json())
            .then(jsonData => {

                console.log("jsonData[0]", jsonData[0]);
                setCategory(jsonData[0])
            });

    }, [])
    console.log("category", category);
    console.log("category.color", category.color);
    return (
        category &&
        <div className={styles.category}>
            <div className={styles.icon}>
                <Icon
                    style={{
                        fontSize: '20px',
                        color: category.color,
                    }}
                >
                    <FaTag />
                </Icon>
            </div>

            <div className={styles.name}>
                {name}
            </div>
        </div>
    );
}

export default Category;