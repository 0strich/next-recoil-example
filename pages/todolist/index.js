import React from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { todolistValues } from "../../store/todolist";
import useTodoList from "../../hooks/useTodoList";

export default function TodoList() {
  const router = useRouter();
  const { todolist, todolistCount, todolistCompleteCount } =
    useRecoilValue(todolistValues);
  const { loading, error } = useTodoList();

  const moveToMain = () => router.push("/");

  const onChange = () => {};

  // 로딩 컴포넌트
  if (loading) return <div style={{ padding: 80 }}>로딩중...</div>;

  return (
    <div style={{ padding: 30 }}>
      <button onClick={moveToMain}>메인으로</button>

      <div style={{ padding: 10 }}>총 갯수: {todolistCount}</div>
      <div style={{ padding: 10 }}>완료 갯수: {todolistCompleteCount}</div>
      {todolist.map((el) => (
        <div key={el?.id} style={{ padding: 10 }}>
          <span>{el?.id + 1}번. </span>
          <input type="checkbox" checked={el?.isChecked} onChange={onChange} />
          <input type="text" value={el?.content} onChange={onChange} />
        </div>
      ))}
    </div>
  );
}
