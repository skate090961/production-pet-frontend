import React from 'react';
import { useTranslation } from 'react-i18next';

import { BugButton } from '@/app/providers/error-boundary';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <BugButton />
            {t('title')}
        </div>
    );
};

export default MainPage;
