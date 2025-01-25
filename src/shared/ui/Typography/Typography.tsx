import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ElementType } from 'react';

import styles from './Typography.module.scss';

export enum VariantsTypography {
    LARGE = 'large',
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    BODY1 = 'body1',
    BODY2 = 'body2',
    SUBTITLE1 = 'subtitle1',
    SUBTITLE2 = 'subtitle2',
    CAPTION = 'caption',
    OVERLINE = 'overline',
    LINK1 = 'link1',
    LINK2 = 'link2',
}

export type TypographyProps<T extends ElementType = 'p'> = {
    as?: T
    variant?: VariantsTypography
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
    props: TypographyProps<T> & ComponentPropsWithoutRef<T>,
) => {
    const {
        variant = VariantsTypography.BODY1, className, as: Component = 'p', ...rest
    } = props;
    const classNames = clsx(styles[variant], className);

    return <Component className={classNames} {...rest} />;
};
