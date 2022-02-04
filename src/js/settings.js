const settingsWrapperElement = document.querySelector('.settings__wrapper-box');
function showSettings() {
    document.querySelector('.settings').addEventListener('click', event => {
        settingsWrapperElement.classList.toggle('settings__wrapper-box_active');
    })
}

showSettings();