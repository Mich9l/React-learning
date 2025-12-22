import {useToggle} from "./useToggle.js";


function Additional_task_2() {
    const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

    return (
        <button onClick={() => toggle()}>
            {value}
        </button>
    );
}

export default Additional_task_2;