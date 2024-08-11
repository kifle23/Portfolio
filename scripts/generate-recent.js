const recentDiv = document.createElement('div');
recentDiv.classList.add('recent');

const lineDiv = document.createElement('div');
lineDiv.classList.add('line');

const heading = document.createElement('h2');
heading.textContent = 'My Recent Works';

const hr = document.createElement('hr');

lineDiv.appendChild(heading);
lineDiv.appendChild(hr);

const imgTxtDiv = document.createElement('div');
imgTxtDiv.classList.add('img-txt');

const image = document.createElement('img');
image.setAttribute('src', 'Images/portfolio/mediumScreen.png');
image.setAttribute('alt', 'recent');

const multiDiv = document.createElement('div');
multiDiv.classList.add('multi');

const multiHeading = document.createElement('h3');
multiHeading.textContent = 'Course Marketplace ETH';

const multiPara = document.createElement('p');
multiPara.innerHTML = `
  <p style="padding-bottom: 1rem; text-align: justify;">This decentralized application (dApp) is built on the Ethereum blockchain, enabling users to purchase, manage, and verify ownership of courses. It leverages smart contracts to handle course purchases, repurchases, and ownership verification.</p>
  <p style="padding-bottom: 1rem; text-align: justify;">A live demo of the application is available here. You can explore the features of the course-marketplace-eth application, including purchasing courses, verifying ownership, and managing courses as an admin.</p>
  <p style="text-align: justify;">The application is designed to be user-friendly and responsive, with a clean and modern interface that makes it easy to use.</p>
`;

const skillsDiv = document.createElement('div');
skillsDiv.classList.add('skills');

const reactButton = document.createElement('button');
reactButton.setAttribute('type', 'button');
reactButton.textContent = 'React/Next.js';

const ethereumButton = document.createElement('button');
ethereumButton.setAttribute('type', 'button');
ethereumButton.textContent = 'Ethereum';

const solidityButton = document.createElement('button');
solidityButton.setAttribute('type', 'button');
solidityButton.textContent = 'Solidity';

skillsDiv.appendChild(reactButton);
skillsDiv.appendChild(ethereumButton);
skillsDiv.appendChild(solidityButton);

const projectButton1 = document.createElement('button');
projectButton1.setAttribute('id', 'projects-1');
projectButton1.setAttribute('type', 'button');
projectButton1.classList.add('projects');
projectButton1.textContent = 'See project';

multiDiv.appendChild(multiHeading);
multiDiv.appendChild(multiPara);
multiDiv.appendChild(skillsDiv);
multiDiv.appendChild(projectButton1);

imgTxtDiv.appendChild(image);
imgTxtDiv.appendChild(multiDiv);

recentDiv.appendChild(lineDiv);
recentDiv.appendChild(imgTxtDiv);

const resentWorks = document.querySelector('#resent-works');
resentWorks.appendChild(recentDiv);
