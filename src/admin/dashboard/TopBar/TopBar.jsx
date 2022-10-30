import React from "react";

export function TopBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="bi bi-house"></i> Início
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-bell"></i> Notificações
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-chat-square-dots"></i> Mensagens
                </a>
              </li>
            </ul>
            <button className="btn btn-success rounded-pill me-3" type="submit">
              <i class="bi bi-plus"></i> Criar Link
            </button>
            <div className="profile text-muted dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="rounded-circle me-2"
                  src="/profile.JPG"
                  alt="profile"
                />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-person"></i> Perfil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i class="bi bi-gear"></i> Configurações
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    <i class="bi bi-box-arrow-right"></i> Sair
                  </a>
                </li>

                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li>
                  <div className="container d-flex justify-content-between">
                    <a href="#">
                      <i class="bi bi-moon-stars"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-qr-code-scan"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-clipboard"></i>
                    </a>
                  </div>
                </li>
              </ul>
              <span
                className="position-absolute translate-start p-1 
              bg-success border border-2 border-light rounded-circle alert"
              >
                <span className="visually-hidden">New alerts</span>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
