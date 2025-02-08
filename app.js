const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav__menu'); // For the other HTML file
const menuLinks2 = document.querySelector('.navbar__menu'); // For this HTML file
const closeMenuButton = document.querySelector('#close-menu'); // First close button
const closeMenuButton2 = document.querySelector('#close-menu2'); // Second close button

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("backButton").onclick = function() {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = 'index.html'; // Fallback URL
        }
    };
});

// Toggle the mobile menu and menu links
menu.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click event from propagating to the document
    menu.classList.toggle('is-active');
    
    if (menuLinks) {
        menuLinks.classList.toggle('active');
    }
    
    if (menuLinks2) {
        menuLinks2.classList.toggle('active');
    }
});

// Close the menu when the close button is clicked
function closeMenu() {
    if (menuLinks && menuLinks.classList.contains('active')) {
        menuLinks.classList.remove('active');
    }
    if (menuLinks2 && menuLinks2.classList.contains('active')) {
        menuLinks2.classList.remove('active');
    }
    menu.classList.remove('is-active');
}

// Attach event listeners to both close buttons
if (closeMenuButton) {
    closeMenuButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click event from propagating to the document
        closeMenu();
    });
}

if (closeMenuButton2) {
    closeMenuButton2.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click event from propagating to the document
        closeMenu();
    });
}

// Close the menu if clicking outside the navbar menu
document.addEventListener('click', function(event) {
    const isClickInsideNavMenu = menuLinks && menuLinks.contains(event.target);
    const isClickInsideNavbarMenu = menuLinks2 && menuLinks2.contains(event.target);
    const isClickInsideToggle = menu.contains(event.target);

    // If the click is outside the menu and the toggle button, close the menu
    if (!isClickInsideNavMenu && !isClickInsideNavbarMenu && !isClickInsideToggle) {
        closeMenu();
    }
});



function playVideo(videoId, buttonId) {
    var video = document.getElementById(videoId);
    var button = document.getElementById(buttonId);
    var overlay = document.getElementById('video-overlay');
    var enlargedVideo = document.getElementById('enlarged-video');
    var closeButton = document.getElementById('close-button');
    
    // Hide the play button and show the overlay
    button.style.display = 'none';
    enlargedVideo.src = video.src;
    enlargedVideo.poster = video.poster;
    enlargedVideo.play();
    overlay.style.display = 'flex';
    
    // Add event listener for the close button
    closeButton.addEventListener('click', function() {
        enlargedVideo.pause();
        overlay.style.display = 'none';
        button.style.display = 'block'; // Show the play button again
    }, { once: true }); // Ensure the listener is only added once
}

// Attach event listeners to play buttons
document.getElementById('play-button-one').addEventListener('click', function() {
    playVideo('concertfilms__video__one', 'play-button-one');
});
document.getElementById('play-button-two').addEventListener('click', function() {
    playVideo('concertfilms__video__two', 'play-button-two');
});
document.getElementById('play-button-three').addEventListener('click', function() {
    playVideo('concertfilms__video__three', 'play-button-three');
});

