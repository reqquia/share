import React from "react";

const list = [
  {
    logo: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/web-icon.png",
    name: "Website",
    link: "https://reqquia.com.br",
    sub: "Orçamentos para sites e sistemas.",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    name: "GitHub",
    link: "https://github.com/reqquia",
    sub: "Comunidade dev, projetos e ideias.",
  },
  {
    logo: "https://img.icons8.com/ios-glyphs/480/instagram-new.png",
    name: "Instagram",
    link: "https://instagram.com/reqquia",
    sub: "Minha vida e contato via direct.",
  },
  {
    logo: "https://thumbs.dreamstime.com/b/logotipo-social-dos-meios-de-whatsapp-do-vetor-preto-vers%C3%A3o-edit%C3%A1vel-141895998.jpg",
    name: "Whatsapp",
    link: "https://api.whatsapp.com/send?phone=5551995118280&text=Ol%C3%A1%20Lucas!%20Preciso%20de%20uma%20informa%C3%A7%C3%A3o%2C%20pode%20me%20ajudar%3F",
    sub: "Contato direto via whatsapp.",
  },
];

export function List() {
  return (
    <>
      <div className="container px-4">
        <div className="row">
          {list.map((list, index) => (
            <a href={list.link} target="_blank" className="nav-link">
              <div className="col-12 mb-2" key={index}>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-start">
                      <div className="p-2">
                        <img
                          className="img-fluid"
                          width={50}
                          src={list.logo}
                          alt={list.name}
                        />
                      </div>
                      <div className="pt-3">
                        <h2 className="card-title fw-bold">{list.name}</h2>
                        <p className="text-muted">{list.sub}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
          ;
        </div>
      </div>
    </>
  );
}
