const url_db = "http://localhost:3000/";

async function content() {
    try {
        const url_content = url_db + "content";
        const url_image = url_db + "image_content";

        const [response_content, response_image] = await Promise.all([
            fetch(url_content),
            fetch(url_image)
        ]);

        const content_json = await response_content.json();
        const image_json = await response_image.json();

        content_json.forEach((content_details, index) => {
            const image_details = image_json.find(img => img.id === content_details.image_id);

            if (image_details) {
                const data = {
                    id: content_details.id,
                    title: content_details.title,
                    description: content_details.description,
                    url_picture: image_details.url_picture,
                    url_link: image_details.url_link
                };

                content_html(data, index === 0);
                add_indicator(index, index === 0);
            }
        });

    } catch (error) {
        console.error("Não foi possível encontrar as imagens!");
    }
}

async function content_image() {
    const url_image = url_db + "image_content";

    try {
        const response = await fetch(url_image);
        const reponse_json = await response.json();

        return reponse_json;
    } catch (error) {
        console.error("Não foi possível encontrar as imagens!");
    }
}

function content_html(data, isActive) {
    const carousel_slide = document.getElementById("carousel_slide");

    const slide = `
        <div class="carousel-item ${isActive ? 'active' : ''}">
          <a target="_blanck" href="${data.url_link}">
            <img src=".${data.url_picture}" class="image__carrossel" alt="Capa App">
            <div class="carousel-text">
              <h3>${data.title}</h3>
              <p >${data.description}</p>
            </div >
          </a >
        </div >
        `;

    carousel_slide.insertAdjacentHTML('beforeend', slide);
}

function add_indicator(index, isActive) {
    const indicators = document.getElementById("carousel-indicators");

    const indicator = `
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" ${isActive ? 'class="active" aria-current="true"' : ''} aria-label="Slide ${index + 1}"></button>
    `;

    indicators.insertAdjacentHTML('beforeend', indicator);
}

async function coworkers() {

    const url_coworkers = url_db + "coworkers";

    try {
        const response = await fetch(url_coworkers);
        const response_url = await response.json();

        console.log(response_url);

        response_url.forEach(details => {
            const id = details.id;
            const name = details.name;
            const url_picture = details.url_picture;
            const url_git = details.url_git;
            const url_insta = details.url_insta;

            const data = {
                id: id,
                name: name,
                url_picture: url_picture,
                url_git: url_git,
                url_insta: url_insta
            }

            coworkers_html(data);
        });

    } catch (error) {
        console.error("Não foi possível acessar os colegas de trabalho")
    }
}

function coworkers_html(data) {
    const cards = document.getElementById("list_coworkers");

    const card = `
        <li class="persons__item">
        <img class="persons__item__image" src="${data.url_picture}" alt="${data.name}">
        <h5>${data.name}</h5>
            <div class="persons__item__icons">
                <a target="_blank" href="${data.url_insta}" class="persons__item__icons--instagram"><svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg></a>
                <a target="_blank" href="${data.url_git}" class="persons__item__icons--github"><svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg></a>
            </div>
      </li >
        `;

    cards.insertAdjacentHTML('beforeend', card);
}


content();
coworkers();
