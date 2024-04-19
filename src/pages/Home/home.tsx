import { Link } from "react-router-dom";

import { getLogements, Logement } from "../../data/services";

import { MainContainer, GalleryContainer } from "./home.style";
import Banniere from "../../components/Banniere/banniere";
import Image from "../../assets/images/banniereAccueil.png";
import Gallery from "../../components/Gallerie/gallery";

const Home = () => {
  const logements: Logement[] = getLogements();

  return (
    <MainContainer>
      <Banniere image={Image} />
      <GalleryContainer>
        {logements.map((logement) => (
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            <Gallery
              cover={logement.cover}
              title={logement.title}
              id={logement.id}
            />
          </Link>
        ))}
      </GalleryContainer>
    </MainContainer>
  );
};

export default Home;
