import { clsx } from 'clsx';

import styles from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    const classNames = clsx(styles.ellipsis, className);

    return (
        <div className={classNames}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
