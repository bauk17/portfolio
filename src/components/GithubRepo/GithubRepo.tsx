import { useEffect, useState } from "react";
import { GithubRepoWrapper, GithubRepoItem } from "./GithubRepoCss";

function GithubRepo() {
  const [repos, setRepos] = useState<any[]>([]);

  const repoList = ["bauk17/delivery", "bauk17/nORM-lib", "bauk17/todo-server"];
  useEffect(() => {
    Promise.all(
      repoList.map((repo) =>
        fetch(`https://api.github.com/repos/${repo}`).then((res) => res.json())
      )
    ).then((data) => setRepos(data));
  }, []);
  return (
    <GithubRepoWrapper>
      {repos.map((repo) => (
        <GithubRepoItem key={repo.id}>
          <h2>{repo.name.charAt(0).toUpperCase() + repo.name.slice(1)}</h2>
          <p>{repo.description || "Sem descrição"}</p>
          <a href={repo.html_url} target="_blank">
            Ver no GitHub
          </a>
        </GithubRepoItem>
      ))}
    </GithubRepoWrapper>
  );
}

export default GithubRepo;
