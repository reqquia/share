import React from "react";

export function Activites() {
  return (
    <>
      <div className="d-flex align-items-center mt-3">
        <small className="smallHour me-3">
          <i className="bi bi-clock"></i> 12/05
        </small>
        <small className="text-muted m-0">
          <h6 className="m-0">@fulano seguiu você</h6>
        </small>
      </div>
      <div className="d-flex align-items-center mt-3">
        <small className="smallHour me-3">
          <i className="bi bi-clock"></i> 12/05
        </small>
        <small className="text-muted m-0">
          <h6 className="m-0">@fulano enviou uma mensagem</h6>
          lorem ipsum domain lorem ipsum domain lorem ipsum..
        </small>
      </div>
      <div className="d-flex align-items-center mt-3">
        <small className="smallHour me-3">
          <i className="bi bi-clock"></i> 12/05
        </small>
        <small className="text-muted m-0">
          <h6 className="m-0">
            <i className="bi bi-check"></i> Sua conta foi verificada
          </h6>
        </small>
      </div>
    </>
  );
}
