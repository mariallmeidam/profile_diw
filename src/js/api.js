const url_api = "https://api.github.com/";
const owner = "/marialmeida1";

async function user_git() {
    const url_user = url_api + "users" + owner;

    try {
        const response = await fetch(url_user);
        const response_json = await response.json();

        const name = response_json.name;
        const company = response_json.company;
        const bio = response_json.bio;
        const avatar = response_json.avatar_url;
        const location = response_json.location;

        const data = {
            name: name,
            company: company,
            bio: bio,
            avatar: avatar,
            location: location,
        };

        profile_info(data);
    } catch (error) {
        console.error("Erro ao buscar os dados do perfil", error);
    }
}

async function repos() {
    const url_repo = url_api + "users" + owner + "/repos";

    try {
        const response = await fetch(url_repo);
        const response_json = await response.json();

        response_json.forEach((details) => {
            const id = details.id;
            const name = details.name;
            const description = details.description;
            const created = details.created_at;
            const language = details.language;
            const url_api = details.url;
            const stars = details.stargazers_count;
            const url = link_page(id);

            const data = {
                id: id,
                name: name,
                description: description,
                created: created,
                language: language,
                url: url,
                stars: stars
            };

            repo_info_home(data);
            define_color(name, language);

        });
    } catch (error) {
        console.error("Erro ao buscar os dados dos repositórios", error);
    }
}

function profile_info(data) {
    const name_html = document.getElementById("name");
    const name_mob_html = document.getElementById("name--mobile");

    const bio_html = document.getElementById("bio");
    const location_html = document.getElementById("location");

    const avatar_html = document.getElementById("avatar");
    const avatar_mob_html = document.getElementById("avatar--mobile");

    const company_html = document.getElementById("company");
    const company_mob_html = document.getElementById("company--mobile");

    name_html.innerHTML = data.name;
    name_mob_html.innerHTML = data.name;

    bio_html.innerHTML = data.bio;
    location_html.innerHTML = data.location;

    company_html.innerHTML = data.company;
    company_mob_html.innerHTML = data.company;

    avatar_html.style.backgroundImage = `url(${data.avatar})`;
    avatar_mob_html.style.backgroundImage = `url(${data.avatar})`;
}

function repo_info_home(data) {
    const list_repo = document.getElementById("list_repo");

    const card = `
        <li class="repo__item">
            <a href="${data.url}">
                <div>
                    <h5 class="repo__item__title">${data.name}</h5>
                    <p>${data.description || "Repositório sem descrição"}</p>
                </div>
                <div class="repo__item__lang">
                    <div id="icon_language_${data.name}" class="repo__item__lang__icon"></div>${data.language}
                </div>
            </a>
        </li>
    `;

    list_repo.innerHTML += card; // Adiciona o novo card ao final da lista
}

function define_color(repoName, language) {
    let color;
    const icon_language = document.getElementById(`icon_language_${repoName}`);

    if (language == "C") {
        color = "#bcbdac";
    } else if (language == "C++") {
        color = "#cfbe27";
    } else if (language == "Dart") {
        color = "#f27435";
    } else if (language == "HTML") {
        color = "#3b2d38";
    } else if (language == "JavaScript") {
        color = "#6cc4b9";
    } else if (language == "CSS") {
        color = "#ed4c57";
    } else if (language == "TypeScript") {
        color = "#a7ebc9";
    } else if (language == "PHP") {
        color = "#4e8b6f";
    } else {
        color = "#c97ba5";
    }

    icon_language.style.backgroundColor = color;
}

function link_page(id) {
    const url_page = "/src/pages/repository.html?id=" + id;
    return url_page
}

// Chamada das funções
user_git();
repos();
