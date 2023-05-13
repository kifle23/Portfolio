const projects = [
  {
    id: 1,
    title: 'Software Development Summit',
    image: 'Images/portfolio/capstone-featured.png',
    description: `<p>On this project I tried to build an online website for a fictional Software Development Summit. The pages are also designed based on Behance design guidelines. Each page is designed to be responsive for all screen sizes.</p>
      
    <p>In this project, I build a two-page website using HTML, CSS, and JavaScript. The pages are responsive, meaning they look good on different screen sizes. I did also implement some basic interactions, such as links and a mobile menu.</p>`,
    technologyList: ['Html', 'CSS', 'Javascript'],
    live: 'https://kifle23.github.io/capstone-project-one/',
    source: 'https://github.com/kifle23/capstone-project-one',
  },
  {
    id: 2,
    title: 'Awesome Books',
    image: 'Images/portfolio/awsome-books-feature.png',
    description: `<p>This is a simple website that displays a list of books and allows you to add and remove books from that list. The goal is to make it more organized by using modules and practicing the ES6 syntax.</p>

      <p>I used a medium-fidelity wireframe to plan the layout of the pages. This helped me to communicate my design ideas to my partner and to ensure that the pages were well-organized. I also used a version control system (Git) to track my changes and to collaborate with my partner.</p>`,
    technologyList: ['Html', 'CSS', 'Javascript'],
    live: 'https://kifle23.github.io/Awesome-Books-ES6/',
    source: 'https://github.com/kifle23/Awesome-Books-ES6',
  },
  {
    id: 3,
    title: 'To do',
    image: 'Images/portfolio/to-do-feature.png',
    description: `<p>This is a TodoList web application, where users can add new todo, remove todo, edit todo, mark todo as completed, and remove all completed todo. Built with Webpack.</p>

      <p>I am proud of the work that I did on this project. I learned a lot about HTML, CSS, and JavaScript, and I also learned how to use a medium-fidelity wireframe and a version control system. I am confident that these skills will be valuable to me in my future career.</p>`,
    technologyList: ['Html', 'CSS', 'Javascript'],
    live: 'https://kifle23.github.io/To-Do-list/dist/',
    source: 'https://github.com/kifle23/To-Do-list',
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
              
            </ul>
          </div>
      </div>
      <div class="popup-content">
          <img class="img-snapshot" alt="Portfolio snapshot image">
          <div class="popup-lower">
              <div class="des"></div>
              <div class="modal-buttons">
                  <div class="btn-details"><a class="live" target="_blank">See Live</a> <i class="live-icon"></i></div>
                  <div class="btn-details"><a class="source" target="_blank">See Source</a> <i class="source-icon"></i> </div>
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
const techList = document.querySelector('.tech-list');
seeProjects.forEach((el) => {
  el.addEventListener('click', (e) => {
    id = e.target.id;
    document.querySelector('.popup-heading').textContent = projects[id.slice(-1) - 1].title;
    const techNames = projects[id.slice(-1) - 1].technologyList;
    techNames.forEach((techName) => {
      const li = document.createElement('li');
      li.textContent = techName;
      techList.appendChild(li);
    });
    document.querySelector('.des').innerHTML = projects[id.slice(-1) - 1].description;
    document.querySelector('.img-snapshot').src = projects[id.slice(-1) - 1].image;
    document.querySelector('.live').href = projects[id.slice(-1) - 1].live;
    document.querySelector('.source').href = projects[id.slice(-1) - 1].source;
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
  const techLis = document.querySelectorAll('.tech-list li');

  techLis.forEach((element) => {
    element.parentNode.removeChild(element);
  });
});
