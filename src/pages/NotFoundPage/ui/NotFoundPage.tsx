import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';

import { Typography, VariantsTypography } from '@/shared/ui/Typography';

import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    const classNames = clsx(styles.notFoundPage, className);

    return (
        <div className={classNames}>

            <div className={styles.container}>
                <Typography
                    className={styles.title}
                    as="h1"
                    variant={VariantsTypography.LARGE}
                >
                    404
                </Typography>
                <Typography
                    as="h2"
                    variant={VariantsTypography.H2}
                >
                    {t('pageNotFound')}
                </Typography>
            </div>
        </div>
    );
};
