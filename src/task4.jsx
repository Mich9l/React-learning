import useViewportSize from "./useViewportSize.js";


function Demo4() {
    const { height, width } = useViewportSize()

    return (
        <>
            Width: {width}, height: {height}
        </>
    );
}

export default Demo4