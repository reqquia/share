import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function Reset() {
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
          <div className="col-12 col-lg-6 pt-5">
            <div className="card border-0 shadow-sm pb-5">
              <div className="card-body">
                <div className="text-center dd-block d-lg-none">
                  <img className="logo" src="/logo.png" alt="logo" />
                </div>
                <form>
                  <h3 className="col-12 col-lg-8 text-center mx-auto mt-3 fw-bold  pt-md-5">
                    Recuperar Senha
                  </h3>
                  <p className="col-12 col-lg-8 text-center mx-auto mt-3">
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
                      className="col-12 col-lg-8 mx-auto p-3 btn-purple rounded-pill btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Receber E-mail
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
