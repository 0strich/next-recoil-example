import { atom, selector } from "recoil";

export const countState = atom({
  key: "countState",
  default: 0,
});

export const incrementCount = selector({
  key: "incrementCount",
  get: () => {},
  set: ({ set }) => set(countState, (currCount) => currCount + 1),
});

export const decrementCount = selector({
  key: "decrementCount",
  get: () => {},
  set: ({ set }) => set(countState, (currCount) => currCount - 1),
});
