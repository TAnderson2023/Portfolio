import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex justify-between gap-[2rem] px-[1rem] bg-primary-3 text-neutral-4 w-[100%] drop-shadow-lg">
      <ul className="flex gap-[1rem] justify-evenly">
        <li className="p-0 m-0">
          <a
            className={
              window.location.pathname == "/portfolio/skills"
                ? "active h5 block"
                : "h5 block"
            }
            href="/portfolio/skills"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            className={
              window.location.pathname == "/portfolio/projects"
                ? "active h5 block"
                : "h5 block"
            }
            href="/portfolio/projects"
          >
            Projects
          </a>
        </li>
      </ul>
      <div className="flex gap-[1rem]">
        <a className="h6" href="https://www.instagram.com/sf_asmodeous/">
          <FontAwesomeIcon icon={faInstagram} size="lg" className="h6" />
        </a>
        <p className="h6">|</p>
        <a href="/" className="h6">
          Tristan Anderson
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
