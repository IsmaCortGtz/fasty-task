import ErrorIcon from "../../icons/ErrorIcon/ErrorIcon";

import "./NotFoundPage.css"

function NotFoundPage() {
  return (
    <div className="NotFoundPage-container page-container">

      <ErrorIcon className="NotFoundPage-icon" />
      <h2 className="NotFoundPage-title" >Error 404</h2>
      <p className="NotFoundPage-message" >La pagina que buscas no existe</p>

    </div>
  );
}

export default NotFoundPage;