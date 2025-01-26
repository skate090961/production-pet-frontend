import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { RoutePath } from '@/shared/config/route-config';
import { Button, VariantsButton } from '@/shared/ui/button';
import { Typography } from '@/shared/ui/typography';
import { LangSwitcher } from '@/widgets/lang-switcher';
import { ThemeSwitcher } from '@/widgets/theme-switcher';

import styles from './Header.module.scss';

interface NavbarProps {
    className?: string;
}

export const Header = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const classNames = clsx(styles.header, className);

    return (
        <header className={classNames}>
            <div className={styles.links}>
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
                <LangSwitcher />
                <div className={styles.separator} />
                <ThemeSwitcher />
            </div>
        </header>
    );
};
