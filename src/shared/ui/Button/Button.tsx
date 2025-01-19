import {clsx} from 'clsx';
import styles from './Button.module.scss';
import {ComponentPropsWithoutRef, ElementType} from "react";

export enum VariantsButton {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    LINK = 'link',
    CLEAR = 'clear'
}

export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T
    variant?: VariantsButton
    className?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
    props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
    const { variant = VariantsButton.PRIMARY, className, as: Component = 'button', withIcon, ...rest } = props
    const classNames = clsx(styles.button, styles[variant], className)

    return <Component className={classNames} {...rest} />
}