import { useRef } from "react";

interface props {
  setToDos: (text: string) => void;
}
export default function NewTodo({ setToDos }: props) {
  const inputRef = useRef<HTMLInputElement>(null);

  function toDoSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    const value = inputRef.current!.value;
    setToDos(value);
  }
  return (
    <form onSubmit={toDoSubmitHandler}>
      <input type="text" ref={inputRef} />
      <button>Add</button>
    </form>
  );
}
