import * as Dialog from '@radix-ui/react-dialog';
import { clsx } from 'clsx';
import { FC } from 'react';

import { Theme } from '@/app/providers/theme-provider';
import CloseIcon from '@/shared/assets/icons/close.svg';
import { Button, VariantsButton } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { Typography, VariantsTypography } from '@/shared/ui/typography';

import styles from './Modal.module.scss';

type ModalProps = {
    open: boolean
    setOpen: (value: boolean) => void
    title: string
    theme: Theme
}

export const Modal: FC<ModalProps> = ({
    open, setOpen, title, children, theme,
}) => {
    const themeStyle = theme === Theme.LIGHT ? styles.light : styles.dark;

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.overlay} />
                <div className={styles.modal}>
                    <Dialog.Content className={styles.window} forceMount>
                        <Card className={clsx(styles.card, themeStyle)}>
                            <div className={styles.header}>
                                <Dialog.Title asChild>
                                    <Typography
                                        variant={VariantsTypography.H2}
                                        as="h2"
                                        className="DialogTitle"
                                    >
                                        {title}
                                    </Typography>
                                </Dialog.Title>
                                <Dialog.Close asChild>
                                    <Button variant={VariantsButton.CLEAR}>
                                        <CloseIcon className={themeStyle} />
                                    </Button>
                                </Dialog.Close>
                            </div>
                            <div className={styles.content}>{children}</div>
                        </Card>
                    </Dialog.Content>
                </div>
            </Dialog.Portal>
        </Dialog.Root>
    );
};
