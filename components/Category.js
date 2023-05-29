import { useState, useEffect } from 'react';
import Icon from './Icon';

import { FaTag } from "react-icons/fa";

import styles from '../styles/Category.module.css'

const Category = ({ name }) => {

    const [category, setCategory] = useState({
        name,
        color: "black",
    });

    useEffect(() => {

        fetch(`http://localhost:3000/api/categories?name=${name}`)
            .then(res => res.json())
            .then(jsonData => {
                const jsonCategory = jsonData[0];
                if (jsonCategory) {
                    if (jsonCategory.name) {
                        setCategory({ category, name: jsonCategory.name });
                    }
                    if (jsonCategory.color) {
                        setCategory({ category, color: jsonCategory.color });
                    }
                }
            });

    }, [])

    return (
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