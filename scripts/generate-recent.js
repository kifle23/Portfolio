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
image.setAttribute('src', 'Images/portfolio/internal-6.jpg');
image.setAttribute('alt', 'recent');

const multiDiv = document.createElement('div');
multiDiv.classList.add('multi');

const multiHeading = document.createElement('h3');
multiHeading.textContent = 'Property Dealing';

const multiPara = document.createElement('p');
multiPara.textContent = `Property Dealing App is built using Angular, .net Core, and Bootstrap. It provides a range of features including login and registration, photo upload, and pagination, making it an ideal solution for managing property listings.
The application is designed to be user-friendly and responsive, with a clean and modern interface that makes it easy to use.`;

const skillsDiv = document.createElement('div');
skillsDiv.classList.add('skills');

const angularButton = document.createElement('button');
angularButton.setAttribute('type', 'button');
angularButton.textContent = 'Angular';

const dotnetButton = document.createElement('button');
dotnetButton.setAttribute('type', 'button');
dotnetButton.textContent = '.NET API';

const bootstrapButton = document.createElement('button');
bootstrapButton.setAttribute('type', 'button');
bootstrapButton.textContent = 'Bootstrap';

const dockerButton = document.createElement('button');
dockerButton.setAttribute('type', 'button');
dockerButton.textContent = 'Docker';

skillsDiv.appendChild(angularButton);
skillsDiv.appendChild(dotnetButton);
skillsDiv.appendChild(bootstrapButton);
skillsDiv.appendChild(dockerButton);

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
