import React from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from '@/entities/counter';

const ProjectsPage = () => {
    const { t } = useTranslation('projects');

    return (
        <div>
            <Counter />
            {t('title')}
        </div>
    );
};

export default ProjectsPage;
