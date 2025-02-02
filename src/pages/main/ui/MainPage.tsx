import React from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from '@/entities/counter';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <Counter />
            {t('title')}
        </div>
    );
};

export default MainPage;
