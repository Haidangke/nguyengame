function useDeclareArray(length, item) {
    if (item) return Array(length).fill(item);

    const array = [];
    let i;
    for (i = 0; i < length; i++) {
        array[i] = i;
    }

    return array;

}

export default useDeclareArray;