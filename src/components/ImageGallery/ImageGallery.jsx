import { List, ImageGalleryItem } from './ImageGallery.styled';
import { GalleryItem } from 'components/ImageGalleryItem/GalleryItem';


export const ImageGallery = ({ imageList }) => {
    return (
        <List className="gallery">
            {imageList.map(photo => (
                <ImageGalleryItem key={photo.id}>
                    <GalleryItem item={photo} />
                </ImageGalleryItem>
            ))}
        </List>
    );
};