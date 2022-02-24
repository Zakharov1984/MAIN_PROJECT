let socialTextElement = document.querySelector('.social-connect__text');
let socialDelimiterElement = document.querySelector('.social-connect__delimiter')
let socialConnectGitElement = document.querySelector('.social-connect__link[data-social="git"]');
let socialConnectInstElement = document.querySelector('.social-connect__link[data-social="inst"]');
let socialConnectVkElement = document.querySelector('.social-connect__link[data-social="vk"]');

window.addEventListener('scroll', event => {

    if (window.pageYOffset > 2607 && window.pageYOffset < 4492) {
        socialTextElement.classList.add('social-connect__text_active-scroll');
    } else {
        socialTextElement.classList.remove('social-connect__text_active-scroll');
    } 

     if (window.pageYOffset > 2764 && window.pageYOffset < 4577) {
        socialDelimiterElement.classList.add('social-connect__delimiter_active-scroll');
    } else {
        socialDelimiterElement.classList.remove('social-connect__delimiter_active-scroll');
    }

    if (window.pageYOffset > 2851 && window.pageYOffset < 4612) {
        socialConnectGitElement.classList.add('social-connect__link_active-scroll');
    } else {
        socialConnectGitElement.classList.remove('social-connect__link_active-scroll');
    }

    if (window.pageYOffset > 2851 && window.pageYOffset < 4612) {
        socialConnectInstElement.classList.add('social-connect__link_active-scroll');
    } else {
        socialConnectInstElement.classList.remove('social-connect__link_active-scroll');
    }

    if (window.pageYOffset > 2851 && window.pageYOffset < 4612) {
        socialConnectVkElement.classList.add('social-connect__link_active-scroll');
    } else {
        socialConnectVkElement.classList.remove('social-connect__link_active-scroll');
    }

})