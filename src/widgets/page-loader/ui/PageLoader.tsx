import { clsx } from 'clsx';

import { Loader } from '@/shared/ui/loader';

import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={clsx(styles.pageLoader, className)}>
        <Loader />
    </div>
);
