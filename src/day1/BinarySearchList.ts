// pnpm exec jest BinarySearchList

// CS50
export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;                    // inclusive
    let high = haystack.length;     // exclusive

    while (low - high) {
        const midpoint = Math.floor(low + (high - low) / 2);
        const value = haystack[midpoint];

        if (needle === value) {
            return true;
        } else if (value > needle) {
            high = midpoint;
        } else {
            low = midpoint + 1;
        }
    }

    return false;
}
