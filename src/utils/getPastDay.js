export default function getPastDay(day) {
    return Math.floor(Date.now() / 1000 - 60 * 60 * 24 * day);
}