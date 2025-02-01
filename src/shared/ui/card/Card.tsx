import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

import styles from './card.module.scss';

export type CardProps = ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...restProps }, ref) => {
    const classNames = clsx(styles.card, className);

    return <div ref={ref} className={classNames} {...restProps} />;
});
