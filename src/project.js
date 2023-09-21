'use strict';

const categories = document.querySelector('.categories');
const btnCategories = document.querySelectorAll('.category');
const projectsContainer = document.querySelector('.projects');
const projects = document.querySelectorAll('.project');

let prevCategory = 'all';

categories.addEventListener('click', (e) => {
  const filter = e.target.dataset.category;
  if (!filter || filter === prevCategory) return;

  handleActiveSelection(e.target);  
  filterProjects(filter);
  animationOut();

  prevCategory = filter;
});

function filterProjects(type) {
  projects.forEach((project) => {
    project.style.display = type === 'all' || type === project.dataset.category ? 'block' : 'none'; 
  });
}

function handleActiveSelection(target) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function animationOut() {
  projectsContainer.classList.add('anim-out');
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250);
}



