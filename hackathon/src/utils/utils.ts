export function getUser() {
    const item = localStorage.getItem('user');
    if (item) {
        return JSON.parse(item);
    } else {
        return null;
    }
}

export function capitalize(str: string) {
    if (str.length === 0) {
        return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
}