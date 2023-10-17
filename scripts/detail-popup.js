const projects = [
  {
    id: 1,
    title: 'Property Dealing',
    image: 'Images/portfolio/housing-detail.png',
    description: `<p>Property Dealing App is built using Angular, .net Core, and Bootstrap. It provides a range of features including login and registration, photo upload, and pagination, making it an ideal solution for managing property listings. </p>
      
    <p>The application is designed to be user-friendly and responsive, with a clean and modern interface that makes it easy to use.</p>`,
    technologyList: ['Angular', '.net Core API', 'Bootstrap'],
    live: 'https://housing-app-ang.web.app/',
    source: 'https://github.com/kifle23/property-dealing',
  },
  {
    id: 2,
    title: 'Vespa Rental',
    image: 'Images/portfolio/VespaDetails.png',
    description: `<p>This project is for reserving motorcycles. Whether you're gearing up for a special occasion or event and need a trendy scooter, or if you own a luxurious Vespa and want to earn extra income by renting it out, our website is your ideal destination.</p>
      
    <p>Here are some key advantages of using our platform:<br>
        - Providing users with comprehensive information about all available motorcycles. <br>
        - Enabling users to make reservations for a Vespa for their special occasions. <br>
        - Allowing users to list their own Vespas for rent and manage their listings as needed.</p>`,
    technologyList: ['React', 'Rails', 'Postgresql'],
    live: 'https://rent-motorcycles.onrender.com/',
    source: 'https://github.com/kifle23/vespa-rentals-frontend',
  },
  {
    id: 3,
    title: 'Quiz App',
    image: 'Images/portfolio/quiz-app.png',
    description: '<p>Quiz App is a web application built using React, Context API for state managment, Asp.Net Core API, and Material UI. The Quiz App allows users to take quizzes on a variety of topics, with questions and answers being served from the Asp.Net Core API.</p>',
    technologyList: ['React', 'Context API for state managment', '.Net Core API', 'Material UI'],
    live: 'https://quiz-app-2w0q.onrender.com/',
    source: 'https://github.com/kifle23/quiz-app',
  },
  {
    id: 4,
    title: 'Metrics Webapp',
    image: 'Images/portfolio/weatherdetail.jpg',
    description: `<p> This react project is a mobile web application that allows users to check a list of metrics (numeric values) for the weather in different cities. </p>

  <p>The application is built using React and Redux, and it has three pages: The Home page displays a list of countries that can be filtered by region. The Cities page displays a list of cities for the selected country. The Details page displays the weather details for the selected city. The application retrieves the weather data from the [OpenWeather](https://openweathermap.org/api) API. Users can filter the list of countries by region and select a country and a city to see the weather details.</p>`,
    technologyList: ['React', 'Redux', 'CSS'],
    live: 'https://metrics-webapp-rq4s.onrender.com/',
    source: 'https://github.com/kifle23/metrics-webapp',
  },
  {
    id: 5,
    title: 'RaKi Book Store',
    image: 'Images/portfolio/raki-desk.PNG',
    description: `<p> Rakibook store is an online bookstore that offers a wide variety of books across multiple genres. The store provides a convenient and user-friendly platform for customers to browse and purchase books from the comfort of their homes. </p>

  <p> Rakibook store has an extensive collection of books, including bestsellers, new releases, classic literature.</p>`,
    technologyList: ['Html', 'CSS', 'Javascript'],
    live: 'https://kifle23.github.io/RaKi-book-store/dist/',
    source: 'https://github.com/kifle23/RaKi-book-store',
  },
  {
    id: 6,
    title: 'Blog App',
    image: 'Images/portfolio/Snapshoot_Portfolio.png',
    description: `<p>Discover the blog app website, developed to provide a fully functional online experience. It enables users to explore into a world of enriching content. </p>

      <p>Empowering readers to actively engage with the material, by facilitating seamless interaction through the addition of comments and the ability to express appreciation by liking posts.</p>`,
    technologyList: ['CSS', 'Ruby on Rails', 'Javascript', 'Postgres'],
    live: 'https://expense-tracker-tv8d.onrender.com/',
    source: 'https://github.com/kifle23/blog-app',
  },
  {
    id: 7,
    title: 'Expense Tracker',
    image: 'Images/portfolio/expensedetail.jpg',
    description: `<p>The Expense Tracker is a ROR application that provides users with a secure platform to manage their personal finances. </p>

      <p>The application allows users to create and track transactions associated with different categories, providing them with a clear overview of their spending habits.</p>`,
    technologyList: ['Html', 'Ruby on Rails', 'Postgres', 'Bootstrap'],
    live: 'https://expense-tracker-tv8d.onrender.com/',
    source: 'https://github.com/kifle23/expense-tracker',
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
