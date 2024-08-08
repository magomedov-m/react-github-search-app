import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [avatarUrl, setAvatarUrl] = useState();
  const [githubUserName, setGithubuserName] = useState();
  const [reposUrl, setReposUrl] = useState();

  const [dataRepo, setDataRepo] = useState();
  async function repoData () {
    await fetch("https://api.github.com/users/mojombo/repos")
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result);
        const list = result.map(item => (
          <div>
            <a href={item.svn_url}>{item.name}</a>
          </div>
        ));
        setDataRepo(list);
      });
  }
  useEffect(() => {
    fetch("https://api.github.com/users/mojombo")
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result);
        setAvatarUrl(result.avatar_url);
        setGithubuserName(result.login);
        setReposUrl(result.repos_url);
      });
  }, []);

  return (
    <>
      <img src={avatarUrl} alt="hi" />
      {githubUserName}
      {<a href={reposUrl}>ссылка на репо</a>}
      <button onClick={repoData}>Список моих репозиториев</button>
      {dataRepo}
    </>
  );
}

export default App;
