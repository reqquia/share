import React from "react";
import "./styles.css";

export function Header() {
  return (
    <>
      <div className="card container p-0 border-0 shadow-sm rounded-0">
        <canvas className="banner-hero"></canvas>
        <div className="card-body">
          <canvas className="profile-hero"></canvas>
          <div className="d-flex justify-content-between mt-5">
            <div>
              <h5 className="card-title mb-0">Lucas Réquia</h5>
              <small>@reqquia</small>
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
