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
image.setAttribute('src', 'Images/portfolio/card-one.svg');
image.setAttribute('alt', 'yoga');

const multiDiv = document.createElement('div');
multiDiv.classList.add('multi');

const multiHeading = document.createElement('h3');
multiHeading.textContent = 'Multi-Post Stories';

const multiPara = document.createElement('p');
multiPara.textContent = `A daily selection of privately personalized reads; no accounts or
                        sign-ups required. has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a standard
                        dummy text.`;

const skillsDiv = document.createElement('div');
skillsDiv.classList.add('skills');

const cssButton = document.createElement('button');
cssButton.setAttribute('type', 'button');
cssButton.textContent = 'CSS';

const htmlButton = document.createElement('button');
htmlButton.setAttribute('type', 'button');
htmlButton.textContent = 'HTML';

const bootstrapButton = document.createElement('button');
bootstrapButton.setAttribute('type', 'button');
bootstrapButton.textContent = 'Bootstrap';

const rubyButton = document.createElement('button');
rubyButton.setAttribute('type', 'button');
rubyButton.textContent = 'Ruby';

skillsDiv.appendChild(cssButton);
skillsDiv.appendChild(htmlButton);
skillsDiv.appendChild(bootstrapButton);
skillsDiv.appendChild(rubyButton);

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
