import { useCallback, useState } from 'react';

export const useRequestStack = () => {
    const [requestTimeout, setRequestTimeout] = useState<NodeJS.Timeout | null>(null)

    return useCallback((request: () => Promise<unknown>) => {
        requestTimeout && clearTimeout(requestTimeout)

        setRequestTimeout(
            setTimeout(request, 250)
        );
    }, [requestTimeout])
}