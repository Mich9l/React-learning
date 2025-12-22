

import useWindowScroll from "./useWindowScroll.js";

function Additional_task_1() {
    const { x, y } = useWindowScroll();

    return (
        <div>
            <p>
                Scroll position x: {x}, y: {y}
            </p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Scroll to top
            </button>
        </div>
    );
}

export default Additional_task_1;
