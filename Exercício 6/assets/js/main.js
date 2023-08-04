const container = document.querySelector('.paragrafos');
const paragrafos = container.querySelectorAll('p');
const styleBody = getComputedStyle(document.body);
for (let i of paragrafos) {
    i.style.background = styleBody.background;
    i.style.color = "#fff";
}