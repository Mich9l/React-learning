import useFetchz from "./useFetch.js";
import Demos from "./my-app.jsx";
import Demo3 from "./task3.jsx";
import Demo4 from "./task4.jsx";
import Additional_task_1 from "./additional_task_1.jsx";
import Additional_task_2 from "./additional_task_2.jsx";

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
            <div>
                <Demo3/>
            </div>
            <div>
                <Demo4/>
            </div>
            <div>
                <Additional_task_1/>
            </div>
            <div>
                <Additional_task_2/>
            </div>
        </div>
    );
}

export default Demo;
