export default function randomArray(array, quantity) {
    if (array.length === 0) return;
    if (array.length < quantity) return array;
    
    const length = array.length;
    const result = [];
    const listRandomIdx = [];
    while (result.length < quantity) {
        const randomIdx = Math.floor(Math.random() * length);
        if (!listRandomIdx.includes(randomIdx)) {
            listRandomIdx.push(randomIdx);
            result.push(array[randomIdx]);
        }
    }
    return result;
}
