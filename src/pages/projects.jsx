import Left from "../assets/Images/Left.jpg";
import Middle from "../assets/Images/Middle.jpg";
import Right from "../assets/Images/Right.jpg";

const Projects = () => {
  return (
    <a href="/portfolio/projects/dae">
      <div className="mx-4 my-4 pt-2 rounded shadow-lg bg-primary-4 w-[50%]">
        <div className="flex justify-center items-center gap-1">
          <img src={Left} alt="" className="w-[%32]" />
          <img src={Middle} alt="" className="w-[32%]" />
          <img src={Right} alt="" className="w-[32%]" />
        </div>
        <h1 className="text-center align-middle text-[16px] pt-2">
          2024 Duluth Air Expo
        </h1>
      </div>
    </a>
  );
};

export default Projects;
