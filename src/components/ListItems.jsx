import { useState, useEffect } from 'react';

function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Исправленная версия: эффект выполняется один раз — при монтировании.
  // Было (намеренная ошибка): useEffect(..., [items]) — лог при каждом добавлении.
  useEffect(() => {
    console.log('Компонент ListItems обновлен');
  }, []);

  const addItem = () => {
    const value = inputValue.trim();
    if (!value) return;
    setItems([...items, value]);
    setInputValue('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem();
  };

  return (
    <div className="list">
      <h1>Мой список</h1>
      <form className="list__form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Новый элемент"
        />
        <button type="submit">Добавить</button>
      </form>
      {items.length === 0 ? (
        <p className="list__empty">Список пока пуст</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListItems;
