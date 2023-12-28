export class Memory<T, V> {

    private readonly memory: Map<T, V>;

    constructor() {
        this.memory = new Map<T, V>();
    }

    protected get(key: T): V | undefined {
        return this.memory.get(key);
    }

    protected add(key: T, value: V): void {
        this.memory.set(key, value);
    }

    protected remove(key: T): void {
        this.memory.delete(key);
    }

    protected clear(): void {
        this.memory.clear();
    }

    protected size(): number {
        return this.memory.size;
    }

    protected has(key: T): boolean {
        return this.memory.has(key);
    }

    protected keys(): IterableIterator<T> {
        return this.memory.keys();
    }

    protected values(): IterableIterator<V> {
        return this.memory.values();
    }

    protected entries(): IterableIterator<[T, V]> {
        return this.memory.entries();
    }

}