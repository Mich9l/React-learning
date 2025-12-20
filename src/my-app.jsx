import { useLocalStorage } from './useLocalStorage.js';

function Demos() {
    const [value, setItem, removeItem] = useLocalStorage("some-key");

    return (
        <div>
            <p>Значение из LocalStorage: {value}</p>
            <button onClick={() => setItem("new storage value")}>
                Задать значение
            </button>
            <button onClick={removeItem}>
                Удалить значение
            </button>
        </div>
    );
}

export default Demos;
