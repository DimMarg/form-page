import Hero from "./Hero/Hero";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import PhotosGrid from "./PhotosGrid/PhotosGrid";
import UpperFooter from "../../Footer/UpperFooter";

const Home = () => {
    return (
        <>
            <Hero />
            <PhotoGallery />
            <PhotosGrid />
            <UpperFooter />
        </>
    )
};

export default Home;
