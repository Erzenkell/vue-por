import { defineStore } from "pinia";

export const ToastStatus = {
    SUCCESS: "success",
    ERROR: "error",
    WARNING: "warning",
};

const createToast = (message, status) => ({
    message,
    status,
    id: Date.now(),
});

export const useToasterStore = defineStore("toast-store",{
    state: () => ({
        toasts: [],
    }),
    actions: { 
        addToast(message, status) {
            const toast = createToast(message, status);
            this.toasts.push(toast);
            setTimeout(() => {
                this.toasts = this.toasts.filter((t) => t.id !== toast.id);
            }, 5000);
        },
        removeToast(toast) {
            this.toasts = this.toasts.filter((t) => t.id !== toast.id);
        },     
    },
});

export default useToasterStore;