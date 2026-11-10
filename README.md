# React ДЗ 8 — DevTools, ESLint, список элементов

Приложение со списком: вводишь текст, нажимаешь «Добавить» — элемент появляется в списке.

## Запуск

```
npm install
npm run dev
```

## ESLint

Проект создан на Vite (create-react-app устарел), ESLint настроен вручную в `eslint.config.js`:
`@eslint/js` (recommended), `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`.

```
npm run lint
```

Ошибок и предупреждений нет.

## Компонент ListItems

`src/components/ListItems.jsx`:

- `items` — массив элементов списка (`useState`)
- `inputValue` — текущее значение поля ввода (`useState`)
- `addItem` — добавляет `inputValue` в `items` и очищает поле

## Намеренная ошибка и исправление

**Было:**

```js
useEffect(() => {
  console.log('Компонент ListItems обновлен');
}, [items]);
```

Эффект запускается при каждом изменении `items`: в консоли появляется новое сообщение после каждого добавленного элемента,
а в React DevTools (Profiler, «Highlight updates») видно, что `ListItems` перерисовывается и эффект срабатывает каждый раз.

**Стало:**

```js
useEffect(() => {
  console.log('Компонент ListItems обновлен');
}, []);
```

С пустым массивом зависимостей эффект выполняется один раз — при монтировании компонента.
Сообщение в консоли появляется только при первом рендере.

> В режиме разработки React StrictMode специально монтирует компоненты дважды,
> поэтому при старте сообщение может появиться 2 раза — это нормально и в production-сборке не происходит.
