export function getUser() {
    const item = localStorage.getItem('user');
    if (item) {
        return JSON.parse(item);
    } else {
        return null;
    }
}