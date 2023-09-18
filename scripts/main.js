'use strict'

window.addEventListener('load', (event) => {
    let works = [
        {
            title: 'Trabajo1',
            img: 'images/test.jpg',
            github: '#',
            page: '#'
        },
        {
            title: 'Trabajo2',
            img: 'images/test2.jpg',
            github: '#',
            page: '#'
        },
        {
            title: 'Trabajo3',
            img: 'images/test.jpg',
            github: '#',
            page: '#'
        },
        {
            title: 'Trabajo4',
            img: 'images/test.jpg',
            github: '#',
            page: '#'
        },
        {
            title: 'Trabajo5',
            img: 'images/test2.jpg',
            github: '#',
            page: '#'
        }
    ];

    renderGrids();
    renderWorks(works);
    toggleNavMenu();

    window.addEventListener("resize", () => {
        renderGrids();
        renderWorks(works);
        setActiveMenu();
    });

    let scrollY = window.scrollY;
    const headerElement = document.querySelector('.header');
    const dropdownElement = document.querySelector('.menu-dropdown');
    if (scrollY > 75) {
        headerElement.style.backgroundColor = 'var(--gris)';
        dropdownElement.style.backgroundColor = 'var(--gris)';
    } else {
        headerElement.style.backgroundColor = 'transparent';
        dropdownElement.style.backgroundColor = 'transparent';
    };
    window.addEventListener('scroll', ()=> {
        scrollY = window.scrollY;
        if (scrollY > 75) {
            headerElement.style.backgroundColor = 'var(--gris)';
            dropdownElement.style.backgroundColor = 'var(--gris)';
        } else {
            headerElement.style.backgroundColor = 'transparent';
            dropdownElement.style.backgroundColor = 'transparent';
        };
    });
    event.stopPropagation();
});

function renderGrids() {
    removeResponsiveElements();

    let filaElements = document.querySelectorAll('.fila');
    const screenWidth = window.innerWidth;

    filaElements.forEach((element) => {
        if (screenWidth >=992) {
            for (let i = 0; i < 3; i++) {
                if (i == 0 && element.classList.contains('inicio')) {
                    renderMediaRowItem();
                    renderPictureRowItem();
                    renderContactRowItem();
                };
                if (element.classList.contains('less-items') && i == 0) {
                        i++;
                };
                createResponsiveGrid(element);
            };
        } else if (screenWidth >= 768) {
            for (let i = 0; i < 2; i++) {
                if (i == 0 && element.classList.contains('inicio')) {
                    renderMediaRowItem();
                    renderPictureRowItem();
                    renderContactRowItem();
                };
                if (element.classList.contains('less-items') && i == 0) {
                    i++;
                };
                if (!element.classList.contains('rrss')) {
                    createResponsiveGrid(element);
                }
            };
        } else if (screenWidth >= 576) {
            for (let i = 0; i < 1; i++) {
                if (element.classList.contains('inicio')) {
                    appendMediaLinks('.inicio .text-section');
                    appendMediaLinks('.footer .logo-small');
                    appendPicture();
                    appendEmail();
                };
                if (element.classList.contains('less-items') && i == 0) {
                    i++;
                };
                if (!element.classList.contains('header') && !element.classList.contains('rrss')) {
                    createResponsiveGrid(element);
                }
            };
        } else {
            if (element.classList.contains('inicio')) {
                appendMediaLinks('.inicio .text-section');
                appendMediaLinks('.footer .logo-small');
                appendPicture();
                appendEmail();
            };
        };
    });
    footerLogoRef(screenWidth);
};

function removeResponsiveElements() {
    const existingResponsiveElements = document.querySelectorAll('.responsive-item');
    existingResponsiveElements.forEach((element) => {
        element.remove();
    });

    const existingWorkElements = document.querySelectorAll('.fila-trabajos');
    existingWorkElements.forEach((element) => {
        element.remove();
    });

    const existingRRSSElements = document.querySelectorAll('.rrss');
    existingRRSSElements.forEach((element) => {
        element.remove();
    });
    const existingLinkElements = document.querySelectorAll('.links');
    existingLinkElements.forEach((element) => {
        element.remove();
    });
    const existingPictureElements = document.querySelectorAll('.foto');
    existingPictureElements.forEach((element) => {
        element.remove();
    });
    const existingContactElements = document.querySelectorAll('.contact-item');
    existingContactElements.forEach((element) => {
        element.remove();
    });
    const existingEmailElements = document.querySelectorAll('.email-small');
    existingEmailElements.forEach((element) => {
        element.remove();
    });
};

function renderMediaRowItem() {
    let parentElement;
    let siblingElement;
    let mediaElement;
    parentElement = document.querySelector('.inicio');
    siblingElement = document.querySelector('.inicio .first-item');
    mediaElement = document.createElement('div');
    mediaElement.classList.add('fila-item');
    mediaElement.classList.add('rrss');

    mediaElement.innerHTML = `
        <div></div>
        <div class="links-col">
            <ul>
                <li class="li">
                    <a href="https://www.linkedin.com/in/sergipaya/" class="a" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
                <li class="li">
                    <a href="https://github.com/sergipaya" class="a" title="GitHub" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </li>
            </ul>
        </div>
        <div></div>
    `;
    parentElement.insertBefore(mediaElement, siblingElement.nextSibling);
};

function renderPictureRowItem() {
    const parentElement = document.querySelector('.about-content');
    const siblingElement = document.querySelector('.about-content .first-item');
    const rowItem = document.createElement('div');
    rowItem.classList.add('fila-item');
    rowItem.classList.add('foto');
    const pictureElement = document.createElement('img');
    pictureElement.src = 'images/foto.jpg';
    pictureElement.alt = 'Sergi Payà';

    rowItem.appendChild(pictureElement);
    parentElement.insertBefore(rowItem, siblingElement.nextSibling);
};

function renderContactRowItem() {
    const parentElement = document.querySelector('.footer');
    const siblingElement = document.querySelector('.footer .first-item');
    const rowItem = document.createElement('div');
    rowItem.classList.add('contact-item');
    rowItem.classList.add('fila-item');

    const emailElement = document.createElement('div');
    emailElement.classList.add('email');
    const emailTextlement = document.createElement('h3');
    emailTextlement.textContent = 'Contacto'
    const emailLinkelement = document.createElement('a');
    emailLinkelement.href = 'mailto:info@sergipaya.com';
    emailLinkelement.textContent = 'info@sergipaya.com';
    emailElement.appendChild(emailTextlement);
    emailElement.appendChild(emailLinkelement);

    const linkElements = document.createElement('div');
    linkElements.classList.add('footer-links');
    const listElement = document.createElement('ul');
    listElement.innerHTML = `
        <li class="li">
            <a href="https://www.linkedin.com/in/sergipaya/" class="a" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                LinkedIn
            </a>
        </li>
        <li class="li">
            <a href="https://github.com/sergipaya" class="a" title="GitHub" target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
        </li>
    `;
    linkElements.appendChild(listElement);
    rowItem.appendChild(emailElement);
    rowItem.appendChild(linkElements);
    parentElement.insertBefore(rowItem, siblingElement.nextSibling);
};

function appendMediaLinks(selector) {
    const parentElement = document.querySelector(selector);
    const listElement = document.createElement('ul');
    listElement.classList.add('links');
    listElement.innerHTML = `
        <li class="li">
            <a href="https://www.linkedin.com/in/sergipaya/" class="a" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <img src="images/linkedin.png" alt="linkedin">
            </a>
        </li>
        <li class="li">
            <a href="https://github.com/sergipaya" class="a" title="GitHub" target="_blank" rel="noopener noreferrer">
                <img src="images/github.png" alt="github">
            </a>
        </li>
    `;
    parentElement.appendChild(listElement);
};

function appendPicture() {
    const parentElement = document.querySelector('.about-content .text-section');
    const pictureElement = document.createElement('img');
    pictureElement.src = 'images/foto.jpg';
    pictureElement.alt = 'Sergi Payà';
    pictureElement.classList.add('foto');
    parentElement.appendChild(pictureElement);
};

function appendEmail() {
    const parentElement = document.querySelector('.footer .logo-small');
    const emailElement = document.createElement('a');
    emailElement.classList.add('email-small');
    emailElement.href = 'mailto:info@sergipaya.com';
    emailElement.textContent = 'info@sergipaya.com';
    parentElement.appendChild(emailElement);
};

function createResponsiveGrid(element) {
    let firstItem = element.querySelector('.first-item');
    let newGrid = document.createElement('div');
    newGrid.classList.add('fila-item');
    newGrid.classList.add('responsive-item');
    if (element.classList.contains('header')) {
        newGrid.classList.add('header-item');
    };
    if (element.classList.contains('footer')) {
        newGrid.classList.add('footer-item');
    };
    element.insertBefore(newGrid, firstItem.nextSibling);
};

function renderWorks(works) {
    const screenWidth = window.innerWidth;
    if (screenWidth >=992) {
        renderWorkSections(works, 4);
    } else if (screenWidth >= 768) {
        renderWorkSections(works, 3);
    } else if (screenWidth >= 576) {
        renderWorkSections(works, 2);
    } else {
        renderWorkSections(works, 1)
    };
};

function renderWorkSections(works, rowElements) {
    const mainElement = document.querySelector('main');
    const worksHeader = document.getElementById('trabajos');
    const emptyElements = getEmptyElements(works.length, rowElements);
    const totalSections = works.length + emptyElements;
    for (let i = totalSections; i > 0; i -= rowElements){
        const workSection = document.createElement('section');
        workSection.classList.add('trabajos', 'fila-trabajos');
        const borderDiv = document.createElement('div');
        borderDiv.classList.add('fila-item');
        workSection.appendChild(borderDiv);

        const rowWorks = works.slice(i - rowElements, i);
        rowWorks.forEach((work) => {
            renderWork(work, workSection);
        });
        if (i > works.length) {
            for (let j = 0; j < emptyElements; j++) {
                const emptyItem = document.createElement('article');
                emptyItem.classList.add('fila-item');
                workSection.appendChild(emptyItem);
            };
        };

        const borderDiv2 = document.createElement('div');
        borderDiv2.classList.add('fila-item');
        workSection.appendChild(borderDiv2);
        mainElement.insertBefore(workSection, worksHeader.nextSibling);
    };
};

function getEmptyElements(worksLength, multiple) {
    const lastingElements = multiple - (worksLength % multiple);
    return lastingElements === multiple ? 0 : lastingElements;
};

function renderWork(work, workSection) {
    const workItem = document.createElement('article');
    workItem.classList.add('trabajo-item');

    const card = document.createElement('div');
    card.classList.add('card');

    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    const cardLinks = document.createElement('div');
    cardLinks.classList.add('card-links');

    const link = document.createElement('a');
    link.href = work.github;

    const image = document.createElement('img');
    image.src = work.img;
    image.alt = work.title;
    image.classList.add('img');
    image.setAttribute('loading', 'lazy');

    const h3 = document.createElement('h3');
    h3.classList.add('h3');
    h3.textContent = work.title;

    const githubLink = document.createElement('a');
    githubLink.href = work.github;
    githubLink.classList.add('github');
    githubLink.textContent = 'GitHub';

    const gitPagesLink = document.createElement('a');
    gitPagesLink.href = work.page;
    gitPagesLink.classList.add('git-pages');
    gitPagesLink.textContent = 'Ver';

    link.appendChild(image);
    cardImage.appendChild(link);
    cardImage.appendChild(h3);
    cardLinks.appendChild(githubLink);
    cardLinks.appendChild(gitPagesLink);
    card.appendChild(cardImage);
    card.appendChild(cardLinks);
    workItem.appendChild(card);

    workSection.appendChild(workItem);
};

function footerLogoRef (screenWidth) {
    const logoElement = document.querySelector('.logo-small .img');
    if (screenWidth >= 768) {
        logoElement.src = 'images/logo-small.png';
    } else {
        logoElement.src = 'images/logo.png';
    }
};

function toggleNavMenu() {
    const buttonElement = document.getElementById('menu-button');
    const dropdownElement = document.querySelector('.menu-dropdown');
    const navListElement = document.getElementById('nav-list');

    buttonElement.addEventListener('click', () => {
        navListElement.classList.toggle('active');
        dropdownElement.classList.toggle('active');
    });
};

function setActiveMenu() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 767) {
        const activeElement = document.querySelector('.active');
        if (activeElement) {
            activeElement.classList.remove('active');
        };
    };
};