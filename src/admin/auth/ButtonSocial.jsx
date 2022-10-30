import React from "react";
import { Link } from "react-router-dom";

export function ButtonSocial() {
  return (
    <div className="d-grid">

      <Link to="/dash" className="btn btn-purple border mb-2 btn-lg text-uppercase rounded-pill col-12 col-lg-8 mx-auto">
        <i className="bi bi-google shadow-sm p-2 me-2"></i> logar com google
      </Link>
      
      <button
        className="btn btn-purple border border btn-lg text-uppercase rounded-pill 
                      col-12 col-lg-8 mx-auto"
        type="submit"
      >
        <i className="bi bi-facebook shadow-sm p-2"></i>
        logar com Facebook
      </button>
    </div>
  );
}
