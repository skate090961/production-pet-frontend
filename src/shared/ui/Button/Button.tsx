import {clsx} from 'clsx';
import styles from './Button.module.scss';
import {ComponentPropsWithoutRef, ElementType} from "react";

export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T
    variant?: 'primary' | 'secondary' | 'link'
    className?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
    props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
    const { variant = 'primary', className, as: Component = 'button', ...rest } = props
    const classNames = clsx(styles.button, styles[variant], className)

    return <Component className={classNames} {...rest} />
}