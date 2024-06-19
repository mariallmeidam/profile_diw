const url = "https://api.github.com/";
const owner = "/marialmeida1";

async function user_git() {
    const url_user = url + "users" + owner;

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
            location: location
        };

        profile_info(data);
    } catch (error) {
        console.error("Erro ao buscar os dados do perfil", error);
    }
}

async function repos() {
    const url_repo = url + "users" + owner + "/repos";

    try {
        const response = await fetch(url_repo);
        const response_json = await response.json();

        response_json.forEach((details) => {
            const name = details.name;
            const description = details.description;
            const created = details.created_at;
            const language = details.language;
            const url = details.url;
            const stars = details.stargazers_count;

            // console.log(name + ": " + description + " " + created + " " + language + " " + url + " " + stars)
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

function repo_info(data) {
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

// Chamada das funções
user_git();
repos();
