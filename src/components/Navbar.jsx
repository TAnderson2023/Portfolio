const Navbar = () => {
  return (
    <nav className="flex justify-between gap-[2rem] p-[1rem] align-middle bg-primary-3 text-neutral-4 w-[100%]">
      <ul className="flex p-0 m-0 justify-evenly">
        <li>
          <a className="pl-[1rem] h5" href="/portfolio/skills">
            Skills
          </a>
        </li>
        <li>
          <a className="pl-[1rem] h5" href="/portfolio/projects">
            Projects
          </a>
        </li>
      </ul>
      <a href="/" className="pr-[1rem] h5">
        Tristan Anderson
      </a>
    </nav>
  );
};

export default Navbar;
