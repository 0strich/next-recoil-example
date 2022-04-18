import { useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import { countState, incrementCount, decrementCount } from "../atoms/counter";

export const useCounter = () => ({
  count: useRecoilValue(countState),
  increment: useSetRecoilState(incrementCount),
  decrement: useSetRecoilState(decrementCount),
  reset: useResetRecoilState(countState),
});
