'use strict'

window.addEventListener('load', () => {
    let works = [
        {
            title: 'Trabajo1',
            img: '#',
            github: '#',
            page: '#'
        },
        {
            title: 'Trabajo2',
            img: '#',
            github: '#',
            page: '#'
        },
        {
            title: 'Trabajo3',
            img: '#',
            github: '#',
            page: '#'
        },
        {
            title: 'Trabajo4',
            img: '#',
            github: '#',
            page: '#'
        },
        {
            title: 'Trabajo5',
            img: '#',
            github: '#',
            page: '#'
        }
    ];
    renderGrids();
    renderWorks(works);

    window.addEventListener("resize", () => {
        renderGrids();
        renderWorks(works);
    });
});

function renderGrids() {
    let filaElements = document.querySelectorAll('.fila');
    const screenWidth = window.innerWidth;

    const existingResponsiveElements = document.querySelectorAll('.responsive-item');
    existingResponsiveElements.forEach((element) => {
        element.remove();
    });

    const existingWorkElements = document.querySelectorAll('.fila-trabajos');
    existingWorkElements.forEach((element) => {
        element.remove();
    });

    filaElements.forEach((element) => {
        if (screenWidth >=992) {
            for (let i = 0; i < 3; i++) {
                if (element.classList.contains('less-items') && i == 0) {
                        i++;
                };
                createResponsiveGrid(element);
            };
        } else if (screenWidth >= 768) {
            for (let i = 0; i < 2; i++) {
                if (element.classList.contains('less-items') && i == 0) {
                    i++;
                };
                createResponsiveGrid(element);
            };
        } else if (screenWidth >= 576) {
            for (let i = 0; i < 1; i++) {
                if (element.classList.contains('less-items') && i == 0) {
                    i++;
                } else {
                    createResponsiveGrid(element);
                };
            };
        };
    });
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
        borderDiv.classList.add('trabajo-item');
        workSection.appendChild(borderDiv);

        const rowWorks = works.slice(i - rowElements, i);
        rowWorks.forEach((work) => {
            renderWork(work, workSection);
        });
        if (i > works.length) {
            for (let j = 0; j < emptyElements; j++) {
                const emptyItem = document.createElement('article');
                emptyItem.classList.add('trabajo-item');
                workSection.appendChild(emptyItem);
            };
        };

        const borderDiv2 = document.createElement('div');
        borderDiv2.classList.add('trabajo-item');
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

    const link = document.createElement('a');
    link.href = work.github;
    link.title = work.title;

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
    link.appendChild(h3);
    workItem.appendChild(link);
    workItem.appendChild(githubLink);
    workItem.appendChild(gitPagesLink);

    workSection.appendChild(workItem);
};