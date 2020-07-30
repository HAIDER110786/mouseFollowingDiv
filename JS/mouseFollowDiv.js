const links =[...document.querySelectorAll('a')];
const lightup = document.createElement('span');
const mainContent = document.querySelector('.mainContent');
mainContent.classList.add('.followingSpan');
mainContent.append(lightup);

links.forEach(link => link.addEventListener('mouseenter', bringtheDiv));

function bringtheDiv(){

    const targetedLinkData = {
        linkWidth : this.getBoundingClientRect().width,
        linkHeight : this.getBoundingClientRect().height,
        linkXcoord : this.getBoundingClientRect().left + scrollX,
        linkYcoord : this.getBoundingClientRect().top + scrollY
    }

    lightup.classList.add('followingSpan');
    lightup.style.height = `${targetedLinkData.linkHeight}px`;
    lightup.style.width  = `${targetedLinkData.linkWidth}px`;
    lightup.style.transform = `translate(${targetedLinkData.linkXcoord}px, ${targetedLinkData.linkYcoord}px)`;
}