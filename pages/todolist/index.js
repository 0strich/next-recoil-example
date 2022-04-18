import React from "react";
import { useRecoilValue } from "recoil";
import { todolistValues } from "../../atoms/todolist";
import useTodoList from "../../hooks/useTodoList";

export default function TodoList() {
  const { todolist, todolistCount, todolistCompleteCount } =
    useRecoilValue(todolistValues);
  const { loading, error } = useTodoList();

  console.log("todolist: ", todolist);
  console.log("todolistCount: ", todolistCount);
  console.log("todolistCompleteCount: ", todolistCompleteCount);

  return (
    <div>
      {todolist.map((el) => (
        <div key={el?.id}>
          <div>id: {el?.id}</div>
          <div>content: {el?.content}</div>
          <div>isChecked: {el?.isChecked}</div>
        </div>
      ))}
    </div>
  );
}
