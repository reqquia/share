import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <div className="card container col-12 col-lg-6 mx-auto p-0 border-0 shadow-sm rounded">
        <canvas className="banner-hero"></canvas>
        <div>
          <Link
            to="/login"
            className="btn btn-outline-light btn-guest rounded-pill"
          >
            <i className="bi bi-box-arrow-in-right"></i> Login
          </Link>
        </div>
        <div className="card-body">
          <canvas className="profile-hero"></canvas>
          <div className="d-flex justify-content-between mt-5">
            <div>
              <h5 className="card-title mb-0">
                Lucas Réquia{" "}
                <i className="bi bi-patch-check-fill text-primary"></i>
              </h5>
              <small className="text-muted">@reqquia</small>
              <p>💻 Programming every day!</p>
            </div>
            <div>
              <a href="#" className="btn btn-primary rounded-pill">
                <i className="bi bi-person-plus"></i> Seguir
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
