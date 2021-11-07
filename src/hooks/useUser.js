export default function useUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    const isLoggedIn = Boolean(user);
    const displayName = user?.displayName;
    const photoURL = user?.photoURL;
    const userId = user?.userId;
    const removeUser = () => localStorage.removeItem('user');

    return { isLoggedIn, displayName, photoURL, userId, removeUser };
}