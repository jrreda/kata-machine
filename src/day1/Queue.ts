type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node: Node<T> = { value: item };
        this.length++;

        const currentTail = this.tail
        if (!this.head || !currentTail) {
            this.tail = this.head = node;
            return;
        }

        currentTail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        const oldHead = this.head;
        this.head = oldHead.next;

        // free space
        oldHead.next = undefined;

        return oldHead.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
