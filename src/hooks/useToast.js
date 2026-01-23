import { useState } from "react";

export function useToast() {
    const [toast, setToast] = useState({
        message: '',
        type: 'success'
    })

    function showToast(message, type = 'success') {
        setToast({ message, type })
    }

    function closeToast() {
        setToast(prev => ({
            ...prev,
            message: '',
            }))
    }

    return ({
        toast,
        showToast,
        closeToast
    })
}