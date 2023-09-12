import { FC, useState } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [addTodo, setAddTodo] = useState<any>([]);
  const [value, setValue] = useState<string>('');
  const [editId, setEditId] = useState<string>('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (editId) {
      setAddTodo((prev) =>
        prev.map((x) => {
          if (x === editId) {
            return value;
          }
          return x;
        })
      );
      setEditId('');
    } else {
      setAddTodo([...addTodo, value]);
    }
    setValue('');
  };

  const handleDelete = (index: any) => {
    const d = addTodo.filter((x, i) => i !== index);
    setAddTodo([...d]);
  };

  const handleEdit = (index: any) => {
    setValue(index);
    setEditId(index);
  };

  return (
    <div>
      <h1>Todo </h1>
      <div>
        <input type="text" value={value} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </div>
      {addTodo.map((data, index) => {
        return (
          <div key={index}>
            <li>{data}</li>
            <button onClick={() => handleEdit(data)}>Update</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
