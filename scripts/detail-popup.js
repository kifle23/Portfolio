const projects = [
  {
    id: 1,
    title: 'Multi-Post Stories',
    image: 'Images/portfolio/Snapshoot_Portfolio.png',
    description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>`,
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://kifle23.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/kifle23/Portfolio-setup-and-mobile-first',
  },
  {
    id: 2,
    title: 'Keeping track',
    image: 'Images/portfolio/Snapshoot_Portfolio.png',
    description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>`,
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://kifle23.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/kifle23/Portfolio-setup-and-mobile-first',
  },
  {
    id: 3,
    title: 'Card 3',
    image: 'Images/portfolio/Snapshoot_Portfolio.png',
    description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>`,
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://kifle23.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/kifle23/Portfolio-setup-and-mobile-first',
  },
  {
    id: 4,
    title: 'Card 4',
    image: 'Images/portfolio/Snapshoot_Portfolio.png',
    description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>`,
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://kifle23.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/kifle23/Portfolio-setup-and-mobile-first',
  },
  {
    id: 5,
    title: 'Card 5',
    image: 'Images/portfolio/Snapshoot_Portfolio.png',
    description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>`,
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://kifle23.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/kifle23/Portfolio-setup-and-mobile-first',
  },
  {
    id: 6,
    title: 'Card 6',
    image: 'Images/portfolio/Snapshoot_Portfolio.png',
    description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>`,
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://kifle23.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/kifle23/Portfolio-setup-and-mobile-first',
  },
  {
    id: 7,
    title: 'Card 7',
    image: 'Images/portfolio/Snapshoot_Portfolio.png',
    description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>`,
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://kifle23.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/kifle23/Portfolio-setup-and-mobile-first',
  },
];

projects.forEach((project) => {
  document.getElementById(
    'myPopup',
  ).innerHTML = `<div class="project-details-popup">
  <div class="project-details-inner">
      <div class="project-details-header">
          <div class="pop-head">
              <h3 class="popup-heading">${project.title}</h3>
              <i id="close-icon-detail" alt="icon"></i>
          </div>
          <div>
            <ul class="tech-list">
              <li>${project.technologyList[0]}</li>
              <li>${project.technologyList[1]}</li>
              <li>${project.technologyList[2]}</li>
            </ul>
          </div>
      </div>
      <div class="popup-content">
          <img src=${project.image} alt="Portfolio snapshot image">
          <div class="popup-lower">
              <p>${project.description}</p>
              <div class="modal-buttons">
                  <div class="btn-details"><a target="_blank" href=${project.live}>See Live</a> <i class="live-icon"></i></div>
                  <div class="btn-details"><a target="_blank" href=${project.source}>See Source</a> <i class="source-icon"></i> </div>
              </div>
          </div>
      </div>
  </div>
</div>
`;
});

const seeProjects = [];
projects.forEach((project, index) => seeProjects.push(document.getElementById(`projects-${index + 1}`)));
let id;
seeProjects.forEach((el) => {
  el.addEventListener('click', (e) => {
    id = e.target.id;
    document.querySelector('.popup-heading').textContent = projects[id.slice(-1) - 1].title;

    document.querySelector('.project-details-popup').classList.toggle('show');
    document.getElementById('headline').scrollIntoView();
    document
      .querySelector('#close-icon-detail')
      .classList.toggle('close-icon-detail');
  });
});

document.querySelector('#close-icon-detail').addEventListener('click', () => {
  document.querySelector('.project-details-popup').classList.toggle('show');
  document
    .querySelector('#close-icon-detail')
    .classList.toggle('close-icon-detail');
  if (id === 'projects-1') {
    document.getElementById(id).focus();
  } else {
    const section = document.querySelector('#card-section');
    section.scrollIntoView({ behavior: 'smooth' });
  }
});
