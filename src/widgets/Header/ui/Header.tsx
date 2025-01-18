import {Link} from "react-router-dom";
import {clsx} from "clsx";
import styles from './Header.module.scss'
import {useTheme} from "@/app/providers/ThemeProvider";
import {Typography} from "@/shared/ui/Typography/Typography";
import {Button} from "@/shared/ui/Button/Button";

interface NavbarProps {
    className?: string;
}

export const Header = ({className}: NavbarProps) => {
    const { toggleTheme } = useTheme();

    return (
        <header className={clsx(styles.header, className)}>
            <div className={styles.container}>
                <img src="#" alt="логотип"/>
                <nav>
                    <Button as={Link} to={'/'} variant={"link"}>
                        <Typography className={styles.link}>Главная</Typography>
                    </Button>

                    <Button as={Link} to={'/projects'} variant={"link"}>
                        <Typography className={styles.link}>Проекты</Typography>
                    </Button>

                    <Button as={Link} to={'/articles'} variant={"link"}>
                        <Typography className={styles.link}>Статьи</Typography>
                    </Button>
                </nav>
            </div>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
    );
};