interface props {
  items: { text: string; id: string }[];
  onTodoDelete: (id: string) => void;
}

function ToDoList({ items, onTodoDelete }: props) {
  return (
    <ul>
      {items.map((e) => (
        <li key={e.id}>
          <span>{e.text}</span>
          <button onClick={() => onTodoDelete(e.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
