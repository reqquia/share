import React from "react";

export function Footer() {
  return (
    <>
      <footer className="footer container-fluid bg-dark text-white text-center p-2">
        <small className="text-white">
          2022 © ShareMyLinks - Todos os direitos reservados.{" "}
          <span className="footer-creator">
            Desenvolvido por{" "}
            <a href="https://reqquia.com.br" target="_blank">
              Réqquia
            </a>
          </span>
        </small>
      </footer>
    </>
  );
}
