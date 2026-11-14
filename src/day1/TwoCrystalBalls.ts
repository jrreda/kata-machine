export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpSize = Math.floor(Math.sqrt(breaks.length));

    // jump ahead by √n steps
    let floor = jumpSize;
    for (; floor < breaks.length; floor += jumpSize) {
        if (breaks[floor]) {
            break;
        }
    }

    // scan linearly across the last jump
    floor -= jumpSize;
    for (
        let step = 0;
        step <= jumpSize && floor < breaks.length;
        ++step, ++floor
    ) {
        if (breaks[floor]) {
            return floor;
        }
    }

    // not found index
    return -1;
}
