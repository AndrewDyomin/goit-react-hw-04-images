import Modal from 'react-modal';
import { ImageGalleryItemImage } from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import { Component } from 'react';
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

export class GalleryItem extends Component {
    state = {
        isModalOpen: false,
        };

    openModal = () => this.setState({ isModalOpen: true });

    closeModal = () => this.setState({ isModalOpen: false });

    render () {
        const { item } = this.props;
    return (
        <div>
            <ImageGalleryItemImage src={item.webformatURL} alt={item.tags} onClick={this.openModal} />
            <Modal
                isOpen={this.state.isModalOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
            >
                <ImageModal src={item.largeImageURL} alt={item.tags} />
            </Modal>
        </div>
    )};
};