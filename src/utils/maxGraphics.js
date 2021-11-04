export default function maxGraphics(artworks) {
    if(artworks?.length === 0 ||!Array.isArray(artworks)) return;
    let maxHeight = 0;
    let indexReasult = 0;
    artworks.forEach((artworks, index) => {
        if(artworks?.height > maxHeight) {
            maxHeight = artworks.height;
            indexReasult = index;
        }
    })

    return artworks[indexReasult]?.image_id;
}