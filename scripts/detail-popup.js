const projects = [
  {
    id: 1,
    title: 'Course Marketplace ETH',
    image: 'Images/portfolio/largeScreen.png',
    description: `<p style="padding-bottom: 1rem">Welcome to course-marketplace-eth! This decentralized application (dApp) is built on the Ethereum blockchain, enabling users to purchase, manage, and verify ownership of courses. It leverages smart contracts to handle course purchases, repurchases, and ownership verification. </p>
    <p>A live demo of the application is available here. You can explore the features of the course-marketplace-eth application, including purchasing courses, verifying ownership, and managing courses as an admin. Make sure to connect your MetaMask wallet to interact with the demo.</p>`,
    technologyList: ['React', 'Next.js', 'Ethereum', 'Solidity', 'Truffle', 'Web3.js', 'MetaMask', 'Tailwind', 'React Hooks', 'SWR', 'React Toastify'],
    live: 'https://course-marketplace-eth-seven.vercel.app/',
    source: 'https://github.com/kifle23/course-marketplace-eth',
  },
  {
    id: 2,
    title: 'Property Dealing',
    image: 'Images/portfolio/housing-detail.png',
    description: `<p style="padding-bottom: 1rem">Property Dealing App is built using Angular, .net Core, and Bootstrap. It provides a range of features including login and registration, photo upload, and pagination, making it an ideal solution for managing property listings. </p>
    <p>The application is designed to be user-friendly and responsive, with a clean and modern interface that makes it easy to use.</p>`,
    technologyList: ['Angular', '.NET API', 'Bootstrap', 'PostgreSQL', 'Docker'],
    live: 'https://housing-app-ang.web.app/',
    source: 'https://github.com/kifle23/property-dealing',
  },
  {
    id: 3,
    title: 'Vespa Rental',
    image: 'Images/portfolio/VespaDetails.png',
    description: `<p style="padding-bottom: 1rem">This project is for reserving motorcycles. Whether you're gearing up for a special occasion or event and need a trendy scooter, or if you own a luxurious Vespa and want to earn extra income by renting it out, our website is your ideal destination.</p>
    <p>Here are some key advantages of using our platform:<br>
        - Providing users with comprehensive information about all available motorcycles. <br>
        - Enabling users to make reservations for a Vespa for their special occasions. <br>
        - Allowing users to list their own Vespas for rent and manage their listings as needed.</p>`,
    technologyList: ['React', 'Rails API', 'Postgresql'],
    live: 'https://rent-motorcycles.onrender.com/',
    source: 'https://github.com/kifle23/vespa-rentals-frontend',
  },
  {
    id: 4,
    title: 'Quiz App',
    image: 'Images/portfolio/quiz-app.png',
    description: '<p style="padding-bottom: 1rem">Quiz App is a web application built using React, Context API for state managment, Asp.Net Core API, and Material UI. The Quiz App allows users to take quizzes on a variety of topics, with questions and answers being served from the .Net API.</p>',
    technologyList: ['React', 'Context API for state managment', '.Net API', 'Material UI'],
    live: 'https://quiz-app-2w0q.onrender.com/',
    source: 'https://github.com/kifle23/quiz-app',
  },
  {
    id: 5,
    title: 'Metrics Webapp',
    image: 'Images/portfolio/weatherdetail.jpg',
    description: `<p style="padding-bottom: 1rem">This react project is a mobile web application that allows users to check a list of metrics (numeric values) for the weather in different cities. </p>
<p>The application is built using React and Redux, and it has three pages: The Home page displays a list of countries that can be filtered by region. The Cities page displays a list of cities for the selected country. The Details page displays the weather details for the selected city. The application retrieves the weather data from the [OpenWeather](https://openweathermap.org/api) API. Users can filter the list of countries by region and select a country and a city to see the weather details.</p>`,
    technologyList: ['React', 'Redux', 'CSS'],
    live: 'https://metrics-webapp-rq4s.onrender.com/',
    source: 'https://github.com/kifle23/metrics-webapp',
  },
  {
    id: 6,
    title: 'RaKi Book Store',
    image: 'Images/portfolio/raki-desk.png',
    description: `<p style="padding-bottom: 1rem"> Rakibook store is an online bookstore that offers a wide variety of books across multiple genres. The store provides a convenient and user-friendly platform for customers to browse and purchase books from the comfort of their homes. </p>
<p> Rakibook store has an extensive collection of books, including bestsellers, new releases, classic literature.</p>`,
    technologyList: ['Html', 'CSS', 'Javascript'],
    live: 'https://kifle23.github.io/RaKi-book-store/dist/',
    source: 'https://github.com/kifle23/RaKi-book-store',
  },
  {
    id: 7,
    title: 'Software Dev Summit',
    image: 'Images/portfolio/teck-summit-detail.png',
    description: `<p style="padding-bottom: 1rem">Discover the Software Dev Summit website, developed to provide an online experience. It enables users to explore into a world of enriching content. </p>
<p>This is an online website for a fictional Software Development Summit. The pages are also designed based on Behance design guidelines. Each page is designed to be responsive for all screen sizes.</p>`,
    technologyList: ['HTML', 'CSS', 'Javascript'],
    live: 'https://kifle23.github.io/software-dev-summit/',
    source: 'https://github.com/kifle23/software-dev-summit',
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
    const headline = document.querySelector('.headline');
    headline.style.position = 'relative';
    headline.style.zIndex = '';
    document.querySelector('.project-details-popup').classList.toggle('show');
    headline.scrollIntoView();
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

  const headline = document.querySelector('.headline');
  headline.style.position = 'fixed';
  headline.style.zIndex = '1000';
});
