import Portrait from "../assets/portrait.jpg";
import Landscape from "../assets/landscape.jpg";
import Card from "../components/card";
const Home = () => {
  return (
    <>
      <div className="px-6 py-4 flex gap-4">
        <Card horizontal={true} imgpath={Portrait}>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque arcu urna, lobortis nec efficitur sit amet, finibus nec
            purus. Cras.{" "}
          </h1>
        </Card>
        <Card horizontal={false} imgpath={Landscape}>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque arcu urna, lobortis nec efficitur sit amet, finibus nec
            purus. Cras.{" "}
          </h1>
        </Card>
      </div>
    </>
  );
};

export default Home;
