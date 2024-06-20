const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const url_api = "https://api.github.com/repositories/" + id;

async function repo_git() {
    try {

        const response = await fetch(url_api);
        const response_json = await response.json();

        const id = response_json.id;
        const name = response_json.name;
        const description = response_json.description;
        const created = response_json.created_at;
        const language = response_json.language;
        const stars = response_json.stargazers_count;
        const html_url = response_json.html_url;

        const data = {
            id: id,
            name: name,
            description: description,
            created: created,
            language: language,
            stars: stars,
            url: html_url
        };

        repo_info(data);
    } catch (error) {
        console.error("Erro ao buscar os dados do perfil", error);
    }
}

function repo_info(data) {
    const name_html = document.getElementById("name");
    const description_html = document.getElementById("description");
    const created_html = document.getElementById("created");
    const language_html = document.getElementById("language");
    const urlgit_html = document.getElementById("url_git");
    const star = document.getElementById("star");

    console.log(data)

    name_html.innerHTML = data.name;
    description_html.innerHTML = data.description;
    created_html.innerHTML = data.created;
    language_html.innerHTML = data.language;
    urlgit_html.innerHTML = data.url;
    urlgit_html.href = data.url;
    star.innerHTML = data.stars;
}

async function fetchReadme() {
    const url = `https://api.github.com/repos/marialmeida1/dentro_ou_fora/readme`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            content = "Erro ao encontrar README.md!"
        }
        const response_json = await response.json();
        const content = atob(response_json.content);

        console.log(content)
        document.getElementById('readme').textContent = content;
    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('readme').textContent = 'Erro ao carregar o README.md';
    }
}

// Substitua 'owner' e 'repo' pelos valores reais
fetchReadme();
repo_git();