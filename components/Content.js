import TaskList from '@/components/TaskList';
import CategoryList from "@/components/CategoryList";

import styles from '@/styles/Content.module.css';

const Content = () => {
    return (
        <main className={styles.container}>
            <CategoryList />
            <TaskList
            // category={"Work"}
            />
        </main>
    );
}

export default Content;