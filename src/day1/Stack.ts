type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const newNode: Node<T> = { value: item };
        this.length++;

        if (!this.head) {
            this.head = newNode;
        }

        newNode.prev = this.head;
        this.head = newNode;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        const newHead = this.head as Node<T>;

        if (this.length === 0) {
            this.head = undefined;
            return newHead?.value;
        }

        this.head = newHead.prev;
        return newHead.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
