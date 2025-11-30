export function formatHeight(height){
    return ((height / 100) - 132.1).toFixed(1);
}

export const FLOOR_HEIGHTS = [
    0,      // Ground floor (1)
    40,     // Floor 2 height
    80,     // Floor 3 height
    120,    // Floor 4 height
    160,    // Floor 5 height
    200,    // Floor 6 height
    240,    // Floor 7 height
    280,    // Floor 8 height
    320,    // Floor 9 height (Sedri)
    360,    // Floor 10 height (DoggieBoo)
    400,    // Floor 11 height (LadyLinQ)
    480,    // Floor 12 height (SeaShark)
    520,    // Floor 13 height (PM477)
    580,    // Floor 14 height (Van Thias)
    620,    // Floor 15 height (Rosati)
    700,    // Floor 16 height (Nether Bat)
    740,    // Floor 17 height (Rock Monster)
    780,    // Floor 18 height (COUQ)
    911,    // Floor 19 height (Another User)
    940,    // Floor 20 height (Skarbels)
    980,    // Floor 21 Height (Roof)
];

export function calculateFloor(height) {
    for (let i = FLOOR_HEIGHTS.length - 1; i >= 0; i--) {
        if (height >= FLOOR_HEIGHTS[i]) {
            return i + 1;
        }
    }
    return 1;
}

export function formatDate(iso) {
    if (!iso) return '-';
    try {
        const d = new Date(iso);
        return d.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' }) + ' ' +
               d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true });
    } catch (e) {
        return iso;
    }
}
