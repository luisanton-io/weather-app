import { useCallback } from "react";

export default () => useCallback((s: string | undefined) =>
    s ? s.split(' ').map(s => s[0].toLocaleUpperCase() + s.slice(1)).join(' ') : '',
    []
)