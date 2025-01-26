import { useEffect, useState } from 'react';

import { Button } from '@/shared/ui/button';

// test error boundary
export const BugButton = () => {
    const [error, setError] = useState(false);

    const onError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={onError}>
            throw error
        </Button>
    );
};
