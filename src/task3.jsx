import useHover from "./useHover.js";

function Demo3() {
    const { ref, hovered } = useHover()
    return (
        <div ref={ref}>
            {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
        </div>
    )
}
export default Demo3