import {Link} from "react-router-dom";
import {clsx} from "clsx";
import styles from './Header.module.scss'
import {Typography} from "@/shared/ui/Typography";
import {Button, VariantsButton} from "@/shared/ui/Button";
import {ThemeSwitcher} from "@/widgets/ThemeSwitcher";
import {RoutePath} from "@/shared/config/routeConfig";

interface NavbarProps {
    className?: string;
}

export const Header = ({className}: NavbarProps) => {
    return (
        <header className={clsx(styles.header, className)}>
            <div className={styles.container}>
                <img src="#" alt="логотип"/>
                <nav>
                    <Button as={Link} to={RoutePath.main} variant={VariantsButton.LINK}>
                        <Typography className={styles.link}>Главная</Typography>
                    </Button>

                    <Button as={Link} to={RoutePath.projects} variant={VariantsButton.LINK}>
                        <Typography className={styles.link}>Проекты</Typography>
                    </Button>

                    <Button as={Link} to={RoutePath.articles} variant={VariantsButton.LINK}>
                        <Typography className={styles.link}>Статьи</Typography>
                    </Button>
                </nav>
            </div>
            <ThemeSwitcher/>
        </header>
    );
};