let menu = document.querySelector('.menu-atas');
let adsense = document.querySelector('.adsense');

menu.innerHTML = `
<nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container-fluid ">
                <a class="navbar-brand text-info" href="/">EMSYA</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 200px;">
                        <li class="nav-item ">
                            <a class="nav-link text-light-emphasis" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light-emphasis" href="template.html
                            ">Template</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-light-emphasis" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Tutorial
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Mikrotik</a></li>
                                <li>
                                <hr class="dropdown-divider">
                            </li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                <hr class="dropdown-divider">
                            </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light-emphasis" href="/qrcodee">QR-Code</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light-emphasis" href="hotspot.html">Live Chat</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light-emphasis" href="hotspot.html">Hotspot</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-info" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

`;

adsense.innerHTML = `

`;






