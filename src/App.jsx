import useFetchz from "./useFetch.js";
import Demos from "./my-app.jsx";


function Demo() {
    const {
        data,
        isLoading,
        error,
        refetch,
    } = useFetchz('https://jsonplaceholder.typicode.com/posts');

    return (
        <div>
            <button onClick={() => refetch({
                params: {
                    _limit: 3,
                },
            })}>
                Перезапросить
            </button>

            {isLoading && <div>Загрузка...</div>}
            {error && <div>Произошла ошибка</div>}

            {data && !isLoading && data.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
            <div>
              <Demos data={data} />
            </div>
        </div>
    );
}

export default Demo;
