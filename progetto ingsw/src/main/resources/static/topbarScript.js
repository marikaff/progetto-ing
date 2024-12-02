function initTopBar() {

    const profile = document.getElementById('profile');
    const profileMenu = document.getElementById('profileMenu');

    profile.addEventListener('click', () => {
        profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        if (!profile.contains(event.target)) {
            profileMenu.style.display = 'none';
        }
    });

}