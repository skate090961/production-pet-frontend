import { clsx } from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button, VariantsButton } from '@/shared/ui/button';
import { Typography, VariantsTypography } from '@/shared/ui/typography';

import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const langSelected = i18n.language === 'ru' ? 'en' : 'ru';
    const classNames = clsx(styles.langSwitcher, className);

    const toggleLang = () => {
        i18n.changeLanguage(langSelected);
    };

    return (
        <div className={classNames}>
            <Button onClick={toggleLang} variant={VariantsButton.CLEAR}>
                <Typography variant={VariantsTypography.SUBTITLE1}>{langSelected}</Typography>
            </Button>
        </div>
    );
};
