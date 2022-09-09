import React from "react";
import "./styles.css";

export function Card() {
  return (
    <>
      <div className="container p-4 mb-0">
        <div className="row">
          <div className="col-12 col-lg-5 mx-auto p-0">
            <div className="card shadow rounded p-3">
              <div className="card-body">
                <div className="text-center mb-4">
                  <img src="/logo.png" className="img-fluid" alt="logo" width={100}/>
                </div>
                
                <div className="ratio ratio-1x1 shadow rounded-circle overflow-hidden">
                  <img
                    className="img-fluid img-cover"
                    src="/profile.JPG"
                    alt="imagem"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-center">
                  <h1 className="display-5 mb-0">Lucas Réquia</h1>
                  <p className="fw-bold titulo--color--primary">Programador Fullstack</p>
                  <marquee>
                    “Programadores e artistas são os únicos profissionais que
                    tem como hobby a própria profissão.” – Rafael Lain
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
