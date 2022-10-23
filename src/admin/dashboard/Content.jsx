import React from "react";

export function Content() {
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-12 col-lg-8 pt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-3"> Meus Links </h5>
            <button className="btn btn-success mb-3">
              <i class="bi bi-plus-circle"></i> Adicionar
            </button>
          </div>
          <ul className="list-group">
            <li className="list-group-item p-3">An item</li>
            <li className="list-group-item p-3">A second item</li>
            <li className="list-group-item p-3">A third item</li>
            <li className="list-group-item p-3">A fourth item</li>
            <li className="list-group-item p-3">And a fifth one</li>
          </ul>
        </div>
        <div className="col-12 col-lg-4 pt-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <img
                className="img-fluid rounded-circle shadow-sm w-25"
                src="/profile.JPG"
                alt="logo"
              />
              <h4 className="fw-bold mt-2">Lucas Réquia</h4>
              <p>@reqquia</p>
              <p>💻 Programming every day!</p>
              <hr className="text-muted"/>
              <a href="#" className="text-decoration-none fw-bold">
                https://dominio.com.br/reqquia
              </a>
              <div className="row pt-3">
                <div className="col-12 col-lg-6">
                  <h6 className="card-title">Seguidores</h6>
                  <p className="lead">
                    <a href="#" className="text-decoration-none">
                      10.000
                    </a>
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <h6 className="card-title">Seguindo</h6>
                  <p className="lead">
                    <a href="#" className="text-decoration-none">
                      2.300
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
