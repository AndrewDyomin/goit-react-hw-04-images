import Modal from 'react-modal';
import { ImageGalleryItemImage } from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import { useState } from 'react';
import { ImageModal } from 'components/Modal/Modal';


const customStyles = {
    content: {
      top: '55%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '70%',
    },
  };
  
  Modal.setAppElement('#root');

export const GalleryItem = ({item}) => {

const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <ImageGalleryItemImage src={item.webformatURL} alt={item.tags} onClick={() => {setIsModalOpen(true)}} />
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => {setIsModalOpen(false)}}
                style={customStyles}
            >
                <ImageModal src={item.largeImageURL} alt={item.tags} />
            </Modal>
        </div>
    )
};