import React from 'react';
import {Link} from "react-router-dom";
import {clsx} from "clsx";
import styles from './Header.module.scss'
import {useTheme} from "@/app/providers/ThemeProvider";

interface NavbarProps {
    className?: string;
}

export const Header = ({className}: NavbarProps) => {
    const { toggleTheme } = useTheme();

    return (
        <header className={clsx(styles.header, className)}>
            <div className={styles.container}>
                <img src="#" alt="логотип"/>
                <nav className={styles.nav}>
                    <Link to={'/'}>Главная</Link>
                    <Link to={'/projects'}>Проекты</Link>
                    <Link to={'/articles'}>Статьи</Link>
                </nav>
            </div>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
    );
};