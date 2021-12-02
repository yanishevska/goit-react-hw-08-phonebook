import { toast } from 'react-toastify';

export function NotificationSuccess(message) {
    return toast.success(`${message}`);
}

export function NotificationError(message) {
    return toast.error(`${message}`);
}