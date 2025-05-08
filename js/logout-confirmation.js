document.addEventListener("DOMContentLoaded", () => {
    const logoutLink = document.getElementById('logout-link');
    const logoutModal = document.getElementById('logout-modal');
    const logoutPageModal = document.getElementById('logout-page-modal');
    const closeButton = document.querySelector('.close-button');
    const confirmLogoutButton = document.getElementById('confirm-logout');
    const cancelLogoutButton = document.getElementById('cancel-logout');

    // Function to center the modal
    function centerModal(modal) {
        modal.style.display = 'flex'; // Ensure the modal is visible
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        document.body.classList.add('modal-open'); // Blur the background
    }

    // Function to close the modal
    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); // Remove blur effect
    }

    logoutLink.addEventListener('click', (event) => {
        event.preventDefault();
        centerModal(logoutModal); // Show the confirmation modal
    });

    closeButton.addEventListener('click', () => {
        closeModal(logoutModal);
    });

    cancelLogoutButton.addEventListener('click', () => {
        closeModal(logoutModal);
    });

    confirmLogoutButton.addEventListener('click', () => {
        closeModal(logoutModal);
        centerModal(logoutPageModal); // Show the logout page modal
    });

    window.addEventListener('click', (event) => {
        if (event.target === logoutModal || event.target === logoutPageModal) {
            closeModal(event.target);
        }
    });
});