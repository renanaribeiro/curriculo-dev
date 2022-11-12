import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Index';
import Section from '../../components/Section/Index';
// import FakeAPI from '../../service/dados.json';

const Home = () => {
  // const [dados] = useState(FakeAPI);

  const [dados, setDados] = useState();

  useEffect(async () => {
    const response = await fetch(
      'https://curriculo-dev-backend-rribeiro.herokuapp.com/api/v1/data-curriculo'
    );

    setDados(await response.json());
  }, []);

  return (
    <body>
      {dados ? (
        <>
          <Header img={dados.profile.img} />
          <main>
            <Section profile={dados.profile} />
          </main>
        </>
      ) : (
        <></>
      )}
    </body>
  );
};

export default Home;
