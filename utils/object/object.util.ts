export const jsonToFormData = (json: { [key: string]: any }): FormData => {
    const formData = new FormData();
    Object.entries(json).forEach((item) => {
        const [key, value] = item;
        const isArray = Array.isArray(value)
        formData.append(key, isArray ? JSON.stringify(value) : value)
    });
    return formData;
}