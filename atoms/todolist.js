import { atom, selector } from "recoil";

/**
 * id, content. ischecked
 */

// 기본 상태값
export const todolistState = atom({
  key: "todolistState",
  default: {
    loading: false,
    data: [],
    error: null,
  },
});

// 변수 설정
export const todolistValues = selector({
  key: "todolistValues",
  get: ({ get }) => {
    const state = get(todolistState);
    const todolist = [...state?.data];
    const todolistCount = todolist.length;
    const todolistCompleteCount = todolist.filter((el) => el.isChecked).length;

    return { todolist, todolistCount, todolistCompleteCount };
  },
});
