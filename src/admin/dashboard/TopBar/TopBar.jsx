import React from "react";
import { Link } from "react-router-dom";

export function TopBar() {
  return (
    <>
      <div className="navbar navbar-expand-lg bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <div>
            <Link to="/admin/dash">
              <img className="w-50" src="/logo.png" alt="logo" />
            </Link>
          </div>
          <div>
            <span className="navbar-text text-white">
              <Link to="/login" className="text-decoration-none text-white">
                <i class="bi bi-box-arrow-in-right"></i> Sair
              </Link>
            </span>
          </div>
        </div>
      </div>
      <nav className="nav bg-white shadow-sm" aria-label="Secondary navigation">
        <div className="container text-center p-2">
          <a href="#" className="text-decoration-none text-muted me-3"> Dashboard</a>
          <a href="#" className="text-decoration-none text-muted me-3"> Dashboard</a>
          <a href="#" className="text-decoration-none text-muted me-3"> Dashboard</a>
        </div>
      </nav>
    </>
  );
}
