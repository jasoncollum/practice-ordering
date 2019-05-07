// Render navbar

const navbar = document.querySelector('#navbar');

function renderNavbar() {
    const navDiv = document.createElement('div');
    navDiv.className = 'container nav-div';
    navDiv.innerHTML = `
        <div class="company-name">BETSIFY</div>
        <div>
            <ul class="container">
                <li><a href="">Categories</a></li>
                <li><a href="">Orders</a></li>
                <li><a href="">Log Out</a></li>
            </ul>
        </div>
    `

    navbar.append(navDiv);
}

export default renderNavbar;