const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: Boolean[][],
    path: Point[],
): Boolean {
    // Base Case
    // off the map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // On a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // Reach the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }

    // Seen before
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // ---- 3 recursion steps
    // 1. pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // 2. recurese
    for (let i = 0; i < direction.length; i++) {
        const [x, y] = direction[i];
        if (
            walk(
                maze,
                wall,
                {
                    x: curr.x + x,
                    y: curr.y + y,
                },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }

    // 3. post
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: Boolean[][] = [];
    const path: Point[] = [];

    for (let row = 0; row < maze.length; row++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
