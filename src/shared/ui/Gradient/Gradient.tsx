import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';
import styles from './Gradient.module.scss';
import MainGradientImage from '@/shared/assets/images/main-gradient.webp';

export enum PositionsGradient {
    TOP = 'top',
    BOTTOM = 'bottom'
}

interface GradientProps {
    className?: string;
    position?: PositionsGradient;
}

export const Gradient = ({ className, position = PositionsGradient.TOP }: GradientProps) => {
    const { t } = useTranslation();
    const classNames = clsx(styles[position], styles.root, className);

    return (
        <div className={classNames}>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img src={MainGradientImage} alt={t('gradient')} className={styles.gradient} />
                </div>
            </div>
        </div>
    );
};
