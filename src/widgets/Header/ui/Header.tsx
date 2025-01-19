import {Link} from "react-router-dom";
import {clsx} from "clsx";
import styles from './Header.module.scss'
import {Typography} from "@/shared/ui/Typography";
import {Button, VariantsButton} from "@/shared/ui/Button";
import {ThemeSwitcher} from "@/widgets/ThemeSwitcher";
import {RoutePath} from "@/shared/config/routeConfig";
import {LangSwitcher} from "@/widgets/LangSwitcher";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Header = ({className}: NavbarProps) => {
    const {t} = useTranslation();

    const classNames = clsx(styles.header, className);

    return (
        <header className={classNames}>
            <div className={styles.links}>
                {/*<img src="#" alt="логотип"/>*/}
                <nav>
                    <Button as={Link} to={RoutePath.main} variant={VariantsButton.LINK}>
                        <Typography className={styles.link}>{t('links.main')}</Typography>
                    </Button>

                    <Button as={Link} to={RoutePath.projects} variant={VariantsButton.LINK}>
                        <Typography className={styles.link}>{t('links.projects')}</Typography>
                    </Button>

                    <Button as={Link} to={RoutePath.articles} variant={VariantsButton.LINK}>
                        <Typography className={styles.link}>{t('links.articles')}</Typography>
                    </Button>
                </nav>
            </div>
            <div className={styles.controls}>
                <LangSwitcher/>
                <div className={styles.separator}></div>
                <ThemeSwitcher/>
            </div>
        </header>
    );
};