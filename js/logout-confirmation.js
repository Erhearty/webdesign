document.addEventListener("DOMContentLoaded", () => {
    const logoutLink = document.getElementById('logout-link');
    const logoutModal = document.getElementById('logout-modal');
    const logoutPageModal = document.getElementById('logout-page-modal');
    const closeButton = document.querySelector('.close-button');
    const confirmLogoutButton = document.getElementById('confirm-logout');
    const cancelLogoutButton = document.getElementById('cancel-logout');

    function centerModal(modal) {
        modal.style.display = 'flex'; 
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        document.body.classList.add('modal-open'); 
    }


    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); 
    }

    logoutLink.addEventListener('click', (event) => {
        event.preventDefault();
        centerModal(logoutModal); 
    });

    closeButton.addEventListener('click', () => {
        closeModal(logoutModal);
    });

    cancelLogoutButton.addEventListener('click', () => {
        closeModal(logoutModal);
    });

    confirmLogoutButton.addEventListener('click', () => {
        closeModal(logoutModal);
        centerModal(logoutPageModal); 
    });

    window.addEventListener('click', (event) => {
        if (event.target === logoutModal || event.target === logoutPageModal) {
            closeModal(event.target);
        }
    });
});