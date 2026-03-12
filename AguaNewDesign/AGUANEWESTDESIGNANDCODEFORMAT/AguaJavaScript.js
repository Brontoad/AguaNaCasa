// Mobile menu toggle
$('.menu-trigger').click(function() {
    $('.nav').slideToggle(300);
});

// Smooth scroll
$('a[href*="#"]').click(function(e) {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        const target = $(this.hash);
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 600);
        }
    }
});

// Active menu highlight
$(window).scroll(function() {
    const scrollDistance = $(window).scrollTop();
    $('section, div[id]').each(function(i) {
        if ($(this).position().top <= scrollDistance + 100) {
            $('.nav a.active').removeClass('active');
            $('.nav a').eq(i).addClass('active');
        }
    });
});

// Cart functionality
function updateCartBadge(count) {
    $('.cart-badge').text(count);
}

// Toggle Services Dropdown
function toggleServicesDropdown() {
    $('#servicesDropdownMenu').toggleClass('show');
}

// Toggle profile dropdown
function toggleProfileDropdown() {
    $('#profileDropdown').toggleClass('show');
}

// Close dropdowns when clicking outside
$(document).click(function(event) {
    if (!$(event.target).closest('.profile-button').length) {
        $('#profileDropdown').removeClass('show');
    }
    if (!$(event.target).closest('#servicesDropdown').length) {
        $('#servicesDropdownMenu').removeClass('show');
    }
});

// Check login state from localStorage
function checkLoginState() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (isLoggedIn) {
        // Show profile button, hide sign in
        $('#signInLi').hide();
        $('#profileLi').show();
    } else {
        // Show sign in, hide profile button
        $('#signInLi').show();
        $('#profileLi').hide();
    }
}

// Check before order - redirect to login if not logged in
function checkBeforeOrder() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (isLoggedIn) {
        // If logged in, go to order page
        window.location.href = 'order.html';
    } else {
        // If not logged in, redirect to login page with return URL
        window.location.href = 'login.html?redirect=order.html';
    }
}

// Login function (call this from your login page)
function login() {
    localStorage.setItem('isLoggedIn', 'true');
    checkLoginState();
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    checkLoginState();
    window.location.href = 'index.html';
}

// Initialize on page load
$(document).ready(function() {
    checkLoginState();
    
    // Get cart count from localStorage
    const cartCount = localStorage.getItem('cartCount') || 0;
    updateCartBadge(cartCount);
});