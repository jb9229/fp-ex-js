class Wrapper {
    constructor(value) {
        this._value = value;
    }

    // map :: (A -> B) -> A -> B
    map(f) {
        return f(this._value);
    };

    toString() {
        return `Wrapper (${this._value})`;
    }
}

// wrap :: A -> Wrapper(A)
const wrap = (value) => new Wrapper(val);