import styles from "@/styles/CategoryList.module.css";
import { useEffect, useState } from "react";
import Category from "./Category";

const CategoryList = () => {

    const getCategoriesList = (categoriesListJSON) => {
        const categoriesList = [];
        categoriesListJSON.forEach(category => {
            categoriesList.push(
                <Category
                    key={category.id}
                    name={category.name}
                    color={category.color}
                    onClick={() => { }}
                />
            )
        })
        return categoriesList;
    }

    const [categoriesList, setCategoriesList] = useState([]);

    useEffect(() => {
        fetch('/api/categories')
            .then(res => res.json())
            .then(jsonData => setCategoriesList(getCategoriesList(jsonData)));
    }, [])

    return (
        <div className={styles.container}>
            <h1>Categories</h1>
            {categoriesList}
        </div>
    );
}

export default CategoryList;