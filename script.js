const username = "RoisTech";

fetch(`https://api.github.com/users/${username}/repos`)
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("repos");

    container.innerHTML = "";

    data.forEach((repo) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description"}</p>
      `;

      card.onclick = () => {
        window.open(repo.html_url, "_blank");
      };

      container.appendChild(card);
    });
  })
  .catch((err) => {
    console.error(err);
    document.getElementById("repos").innerHTML =
      "❌ Erro ao carregar repositórios";
  });
