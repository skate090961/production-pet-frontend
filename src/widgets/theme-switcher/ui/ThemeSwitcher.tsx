import { clsx } from 'clsx';

import { Theme, useTheme } from '@/app/providers/theme-provider';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import SunIcon from '@/shared/assets/icons/sun.svg';
import { Button, VariantsButton } from '@/shared/ui/Button';

import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const classNames = clsx(styles.themeSwitcher, className);
    const ThemeIcon = theme === Theme.DARK ? SunIcon : MoonIcon;

    return (
        <Button
            onClick={toggleTheme}
            className={classNames}
            variant={VariantsButton.CLEAR}
        >
            <ThemeIcon />
        </Button>
    );
};
