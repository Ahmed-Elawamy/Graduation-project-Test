import "./com.css";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="container-fluid d-flex nav-con">
        <a className="navbar-brand" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-activity"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"  // استخدم fillRule بدلاً من fill-rule
              d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"
            />
          </svg>{" "}
          MEDICAMO
        </a>

        <div className="links d-flex">
          <a href="#">Medicamo Blogs</a>
          <a href="#">Are You A Doctor?</a>
        </div>
      </div>
    </nav>
  );
}
