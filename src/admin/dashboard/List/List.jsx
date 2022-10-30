import React from "react";
import "./styles.css";

const database = [
  {
    Icon: "bi bi-browser-chrome bibi",
    Title: "Website",
    Link: "https://reqquia.com.br",
    LinkShort: "reqquia.com.br",
  },
  {
    Icon: "bi bi-facebook bibi",
    Title: "Facebook",
    Link: "https://facebook.com/reqquia",
    LinkShort: "facebook.com/reqquia",
  },
  {
    Icon: "bi bi-twitter bibi",
    Title: "Twitter",
    Link: "https://twitter.com/reqquia",
    LinkShort: "twitter.com/reqquia",
  },
  {
    Icon: "bi bi-github bibi",
    Title: "Github",
    Link: "https://github.com/reqquia",
    LinkShort: "github.com/reqquia",
  },
  {
    Icon: "bi bi-telegram bibi",
    Title: "Telegram",
    Link: "https://t.me/reqquia",
    LinkShort: "telegram.com/reqquia",
  },
  {
    Icon: "bi bi-whatsapp bibi",
    Title: "WhatsApp",
    Link: "https://api.whatsapp.com/send?phone=5551995118280",
    LinkShort: "(51) 99511-8280",
  },
];

export function List() {
  return (
    <>
      <ul className="list-group">
        {database.map((list, index) => (
          <a href={list.Link} className="myLink" key={index}>
            <li className="list-group-item d-flex rounded  mb-3">
              <i className={list.Icon}></i>
              <div className="ms-4 me-auto">
                <div className="fw-bold mt-3">{list.Title}</div>
                <a href={list.Link} className="myLink">
                  {list.LinkShort}
                </a>
              </div>
              <div>
                <small className="text-muted smallHour me-3">15:35</small>
                <i className="bi bi-three-dots text-muted"></i>
              </div>
            </li>
          </a>
        ))}
      </ul>
    </>
  );
}
