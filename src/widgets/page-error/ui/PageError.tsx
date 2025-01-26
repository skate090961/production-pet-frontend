import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { RoutePath } from '@/shared/config/route-config';
import { Button } from '@/shared/ui/button';
import { Gradient, PositionsGradient } from '@/shared/ui/gradient';
import { Typography, VariantsTypography } from '@/shared/ui/typography';

import styles from './PageError.module.scss';

export const PageError = () => {
    const { t } = useTranslation();
    const reloadPage = () => window.location.reload();

    return (
        <div className="app">
            <div className="container">
                <Gradient />
                <div className={styles.content}>
                    <Typography
                        as="h1"
                        variant={VariantsTypography.LARGE}
                        className={styles.title}
                    >
                        {t('pageError.title')}
                    </Typography>
                    <Button
                        onClick={reloadPage}
                    >
                        {t('pageError.refreshButton')}
                    </Button>
                    <Button
                        onClick={reloadPage}
                        as={Link}
                        to={RoutePath.main}
                    >
                        {t('pageError.backButton')}
                    </Button>
                </div>
                <Gradient position={PositionsGradient.BOTTOM} />
            </div>
        </div>
    );
};
