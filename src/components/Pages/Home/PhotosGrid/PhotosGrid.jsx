import space1 from '../../../../assets/images/Group-9.png';
import space2 from '../../../../assets/images/Mask-Group-8.png';

const PhotosGrid = () => {
    return (
        <div className="photos-grid">
            <div className="row">
                <div className="col">
                    <img src={space1} className="photo" alt="Photo Space 1" width={720} height={720} />
                </div>
                <div className="col">
                    <img src={space2} className="photo" alt="Photo Space 2" width={720} height={720} />
                </div>
            </div>
        </div>
    )
}

export default PhotosGrid;

