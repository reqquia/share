import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function Register() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6 bg-purple p-5 d-none d-lg-block">
            <div className="text-center pt-5">
              <img className="logo" src="/logo.png" alt="logo" />
            </div>
            <h1 className="display-6 fw-bold text-white text-center pt-4">
              Todos os seus links <br /> em um único lugar!
            </h1>
            <p className="lead text-white text-center justify-text mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              officia quod quo, ullam consequatur non ut ipsa enim. Harum a
              explicabo magni vitae libero cumque neque pariatur, quasi fugit.
              Placeat.
            </p>
            <div className="text-center fw-bold">
              <Link
                to="/termos"
                className="text-white text-decoration-none me-4"
              >
                Termos
              </Link>
              <Link
                to="/privacidade"
                className="text-white text-decoration-none me-4"
              >
                Privacidade
              </Link>
              <Link to="/ajuda" className="text-white text-decoration-none">
                Ajuda e Contato
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-6 pt-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="text-center d-block d-lg-none pt-5">
                  <img className="logo" src="/logo.png" alt="logo" />
                </div>
                <h1 className="display-6 text-center mt-3 fw-bold">
                  Registre-se é gratuito!
                </h1>
                <form>
                  <div className="col-12 col-lg-8 mx-auto form-floating mt-3 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      autoFocus
                    />
                    <label htmlFor="floatingInput">Nome e Sobrenome</label>
                  </div>
                  <div className="col-12 col-lg-8 mx-auto form-floating mt-3 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email</label>
                  </div>
                  <div className="col-12 col-lg-8 mx-auto form-floating mt-3 mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Senha</label>
                  </div>

                  <div className="d-grid">
                    <button
                      className="col-12 col-lg-8 mx-auto p-3 btn-purple rounded btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Criar minha conta
                    </button>
                  </div>
                  <hr className="my-4" />

                  <div className="d-grid mb-2 text-center">
                    <button
                      className="btn btn-custom border btn-lg text-uppercase fw-bold col-12 col-lg-8 mx-auto mb-3"
                      type="submit"
                    >
                      <i className="bi bi-google me-2"></i> logar com google
                    </button>
                    <div className="d-grid">
                      <button
                        className="btn btn-custom border border btn-lg text-uppercase fw-bold col-12 col-lg-8 mx-auto"
                        type="submit"
                      >
                        <i className="bi bi-facebook text-dark me-2"></i> logar
                        com Facebook
                      </button>
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <Link to="/login" className="linkResetPass">
                      Tem uma conta? Faça o login.
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
