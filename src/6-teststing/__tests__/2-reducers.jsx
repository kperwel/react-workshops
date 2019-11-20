import { counter } from "../2-reducers";

test("should increase value", () => {
    const state = 0;
    const newState = counter(state, { type: "INCREMENT" });

    expect(newState).toBe(1);
});

test("should decrease value", () => {
    const state = 0;
    const newState = counter(state, { type: "DECREMENT" });

    expect(newState).toBe(-1);
});

test("non existing one", () => {
    const state = 0;
    const newState = counter(state, { type: Symbol() });

    expect(newState).toBe(0);
});