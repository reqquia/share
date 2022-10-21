import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function Reset() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6 bg-purple d-none d-lg-block"></div>
          <div className="col-12 col-lg-6 pt-5">
            <div className="card border-0 shadow-sm pb-5">
              <div className="card-body">
                <div className="text-center">
                  <img className="logo" src="/logo.png" alt="logo" />
                </div>
                <form>
                  <p className="col-12 col-lg-8 mx-auto mt-3">
                    Você receberá um email com o link para recuperar sua senha,
                    informe o email cadastrado ao fazer sua conta e aguarde a
                    confirmação.
                  </p>
                  <div className="col-12 col-lg-8 mx-auto form-floating mt-3 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      autoFocus
                    />
                    <label htmlFor="floatingInput">Informe seu email</label>
                  </div>

                  <div className="d-grid">
                    <button
                      className="col-12 col-lg-8 mx-auto p-3 btn-purple rounded btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Recuperar Senha
                    </button>
                  </div>
                  <div className="text-center mt-3">
                    <Link to="/login" className="linkResetPass">
                      Voltar ao login?
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
