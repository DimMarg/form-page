import planet1 from '../../../../assets/images/planet1.png';
import planet2 from '../../../../assets/images/planet2.png';
import wallpaper from '../../../../assets/images/hd-wallpaper.png';
import Button from '../../../Button/Button';

const PhotoGallery = () => {
    return (
        <div className="photo-gallery">
            <div className="container">
                <div className="row">
                    <div className="col gallery">
                        <h3 className="gallery-title">Photo Gallery</h3>
                        <div className="row">
                            <div className="col">
                                <img src={planet1} className="photo" alt="Photo Gallery 1" width={282} height={385} />
                            </div>
                            <div className="col">
                                <img src={planet2} className="photo" alt="Photo Gallery 2" width={282} height={385} />
                            </div>
                        </div>
                    </div>
                    <div className="col cta">
                        <img src={wallpaper} className="photo" alt="Photo Gallery Wallpaper" width={656} height={633} />
                        <Button text={"Συμπλήρωσε τη φόρμα"} link="contact" cls={"light corner-rounded"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoGallery;

