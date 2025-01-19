import React from 'react';
import {useTranslation} from "react-i18next";

const ProjectsPage = () => {
    const {t} = useTranslation('projects');

    return (
        <div>
            {t('title')}
        </div>
    );
};

export default ProjectsPage;