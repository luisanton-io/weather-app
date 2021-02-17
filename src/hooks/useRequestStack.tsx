import { useState } from 'react';

export const useRequestStack = () => {

    const [requestTimeout, setRequestTimeout] = useState<NodeJS.Timeout | null>(null)

    return (request: () => Promise<unknown>) => {
        requestTimeout && clearTimeout(requestTimeout)

        setRequestTimeout(
            setTimeout(() => {
                request().finally(() => {
                    setRequestTimeout(null)
                });
            }, 250)
        );
    }
}