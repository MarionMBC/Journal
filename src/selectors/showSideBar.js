export const hide = () => {
    const sideBar = document.getElementById('sideBar');
    //add animation to hide
    sideBar.classList.add('animate__fadeOutLeft');
    sideBar.classList.remove('animate__fadeInLeft');
        sideBar.classList.add('hidden');
        //add close button
        const closeSideBar = document.getElementById('closeSideBar');
        closeSideBar.classList.remove('hidden');

}

export const show = () => {
    const sideBar = document.getElementById('sideBar');
    sideBar.classList.add('animate__fadeInLeft');
    sideBar.classList.remove('animate__fadeOutLeft');
    sideBar.classList.remove('hidden');
    //remove close button
    const closeSideBar = document.getElementById('closeSideBar');
    closeSideBar.classList.add('hidden');
}
