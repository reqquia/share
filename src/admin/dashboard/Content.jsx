import React from "react";
import { List } from "../dashboard/List/List";
import { Activites } from "./Activites/Activites";

export function Content() {
  return (
    <div className="container pt-3 pb-5">
      <div className="row">
        <div className="col-12 col-lg-6 d-none d-lg-block">
          <div className="card">
            <div className="card-body">
              <div className="profile text-muted">
                <img
                  className="rounded-circle me-3"
                  src="/profile.JPG"
                  alt="profile"
                />
                <span
                  className="position-absolute translate-start p-1 
              bg-success border border-2 border-light rounded-circle alert"
                >
                  <span className="visually-hidden">New alerts</span>
                </span>
              </div>
              <h4 className="card-title m-0">Lucas Réquia</h4>
              <small className="text-muted">@reqquia</small>
              <div className="row mt-3">
                <div className="col-12 col-lg-3">
                  <p className="fw-bold m-0">Seguidores</p>
                  <h5 className="card-title text-primary">0</h5>
                </div>
                <div className="col-12 col-lg-3">
                  <p className="fw-bold m-0">Seguindo</p>
                  <h5 className="card-title text-primary">0</h5>
                </div>
              </div>
              <ul className="nav nav-tabs mt-3" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    <i className="bi bi-clock-history"></i> Atividades
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    <i className="bi bi-bookmark"></i> Marcadores
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="contact-tab-pane"
                    aria-selected="false"
                  >
                    <i className="bi bi-graph-up-arrow"></i> Estátisticas
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="disabled-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#disabled-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="disabled-tab-pane"
                    aria-selected="false"
                  >
                    <i className="bi bi-question-circle"></i> Ajudar
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabindex="0"
                >
                  <Activites />
                </div>
                <div
                  className="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabindex="0"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="contact-tab-pane"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                  tabindex="0"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="disabled-tab-pane"
                  role="tabpanel"
                  aria-labelledby="disabled-tab"
                  tabindex="0"
                >
                  ...
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-2">
            <a
              href="#"
              className="text-decoration-none text-muted me-3 fw-bold"
            >
              Termos
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted me-3 fw-bold"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted me-3 fw-bold"
            >
              Ajuda e Contatos
            </a>
            <a
              href="#"
              className="text-decoration-none text-muted me-3 fw-bold"
            >
              ShareMyLinks.com
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <List />
        </div>
      </div>
    </div>
  );
}
