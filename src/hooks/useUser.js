import { encode as base64_encode } from 'base-64';
export default function useUser() {
    const keyEncode = base64_encode('user');

    const user = JSON.parse(localStorage.getItem(keyEncode));

    const isLoggedIn = Boolean(user);
    const displayName = user?.displayName;
    const photoURL = user?.photoURL;
    const userId = user?.userId;
    const removeUser = () => localStorage.removeItem(keyEncode);

    return { isLoggedIn, displayName, photoURL, userId, removeUser };
}