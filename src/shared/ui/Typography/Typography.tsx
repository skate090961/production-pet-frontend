import {clsx} from 'clsx';
import styles from './Typography.module.scss';
import {ComponentPropsWithoutRef, ElementType} from "react";

export type TypographyProps<T extends ElementType = 'p'> = {
    as?: T
    variant?:
        | 'large'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'body1'
        | 'subtitle1'
        | 'body2'
        | 'subtitle2'
        | 'caption'
        | 'overline'
        | 'link1'
        | 'link2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
    props: TypographyProps<T> & ComponentPropsWithoutRef<T>
) => {
    const { variant = 'body1', className, as: Component = 'p', ...rest } = props
    const classNames = clsx(styles[variant], className)

    return <Component className={classNames} {...rest} />
}