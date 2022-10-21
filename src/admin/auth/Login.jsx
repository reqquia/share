import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function Login() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6 bg-purple d-none d-lg-block"></div>
          <div className="col-12 col-lg-6 pt-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="text-center">
                  <img className="logo" src="/logo.png" alt="logo" />
                </div>
                <form>
                  <div className="col-12 col-lg-8 mx-auto form-floating mt-3 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      autoFocus
                    />
                    <label htmlFor="floatingInput">Email ou Usuário</label>
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

                  <div className="col-8 mx-auto mt-3 mb-3 form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberPasswordCheck"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="rememberPasswordCheck"
                    >
                      Lembrar minha senha
                    </label>
                  </div>
                  <div className="d-grid">
                    <button
                      className="col-12 col-lg-8 mx-auto p-3 btn-purple rounded btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Acessar
                    </button>
                  </div>
                  <hr className="my-4" />
                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-outline-dark btn-lg text-uppercase fw-bold col-12 col-lg-8 mx-auto"
                      type="submit"
                    >
                      <i className="bi bi-google me-2"></i> Sign in with Google
                    </button>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-outline-primary btn-lg text-uppercase fw-bold col-12 col-lg-8 mx-auto"
                      type="submit"
                    >
                      <i className="bi bi-facebook me-2"></i> Sign in with
                      Facebook
                    </button>
                  </div>
                  <div className="text-center mt-3">
                    <Link to="/resetar-senha" className="linkResetPass">
                      Esqueceu sua senha?
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
