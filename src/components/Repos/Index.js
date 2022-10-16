import React, { useEffect, useState } from 'react';
import {
  Content,
  PageCard,
  PageContent,
  RepoBtn,
  RepoDesc,
  RepoTitle,
} from './styles';

const Repo = ({ url }) => {
  const [repositorios, setRepo] = useState();

  useEffect(async () => {
    const response = await fetch(url);

    setRepo(await response.json());
  }, []);

  return (
    <>
      {repositorios ? (
        <div>
          <h1>Total: {repositorios.length}</h1>
          <PageContent>
            {repositorios.map((repo) => (
              <PageCard key={repo.id}>
                <Content>
                  <RepoTitle>{repo.name}</RepoTitle>
                  <RepoDesc>{repo.description}</RepoDesc>
                  <RepoBtn target="_blank" href={repo.html_url}>
                    Ver Repositório
                  </RepoBtn>
                </Content>
              </PageCard>
            ))}
          </PageContent>
        </div>
      ) : (
        <h1>Nenhum repositório encontrado!</h1>
      )}
    </>
  );
};

export default Repo;
