import React from "react";
import { useRecoilValue } from "recoil";
import { todolistValues } from "../../atoms/todolist";
import useTodoList from "../../hooks/useTodoList";

export default function TodoList() {
  const { todolist, todolistCount, todolistCompleteCount } =
    useRecoilValue(todolistValues);
  const { loading, error } = useTodoList();

  return (
    <div style={{ padding: 30 }}>
      {todolist.map((el) => (
        <div key={el?.id}>
          <span>{el?.id + 1}번. </span>
          <input type="checkbox" checked={el?.isChecked} />
          <input type="text" value={el?.content} />
        </div>
      ))}
    </div>
  );
}
