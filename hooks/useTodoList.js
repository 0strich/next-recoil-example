import { useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import { todolistState } from "../store/todolist";
import { getTodoList } from "../libs/todolist";

const useTodoList = (enabled = true) => {
  const [{ loading, data, error }, set] = useRecoilState(todolistState);

  // api 요청
  const fetchData = useCallback(async () => {
    set({ loading: true, data: [], error: null });
    try {
      const data = await getTodoList();
      set({ loading: false, data, error: null });
    } catch (error) {
      set({ loading: false, data: [], error });
    }
  }, [set]);

  useEffect(() => {
    enabled ? fetchData() : undefined;
  }, [enabled, fetchData]);

  return {
    loading,
    data,
    error,
    refetch: fetchData,
  };
};

export default useTodoList;
