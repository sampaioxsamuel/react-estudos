import React from 'react';
import useFetch from './useFetch';

const App = () => {
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        '',
        );
        console.log(json, response)
    }
    fetchData();
  }, [request]);

  if (loading) return <h1>Carregando...</h1>;
  if (data) {
    return (
      <div>
        {data.map((item) => (
          <ul key={item.id}>
            <li>{item.nome}</li>
          </ul>
        ))}
      </div>
    );
  } else return null;
};

export default App;
