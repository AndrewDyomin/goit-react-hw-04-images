
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { FallingLines } from 'react-loader-spinner';
import { GlobalStyle } from './Global-style';
import { useEffect, useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

axios.defaults.baseURL = 'https://pixabay.com/api';
const notify = () => toast('Please, enter your query.');

export const App = () => {

  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const submitHandler = (newQuery) => {
    if (newQuery !== '') {
      setQuery(`${Date.now()}/${newQuery}`);
      setImages([]);
      setPage(1);
    } else { 
      notify();
    }
  };

  useEffect(() => {
    async function getResponse () {
        setLoading(true);
        const response = await axios.get(`?q=${query.slice(query.indexOf('/') + 1)}&page=${page}&key=38182493-8ca9f9673ab94459449d03b1c&image_type=photo&orientation=horizontal&per_page=12`);
        setImages(prevState => prevState.concat(response.data.hits));
        setLoading(false);
    };
    if (query !== '') {
      getResponse();
    };
  }, [query, page]);

  // next page
  // useEffect(() => {
  //   async function getResponse () {
  //       setLoading(true);
  //       const response = await axios.get(`?q=${query.slice(query.indexOf('/') + 1)}&page=${page}&key=38182493-8ca9f9673ab94459449d03b1c&image_type=photo&orientation=horizontal&per_page=12`);
  //       setImages(prevState => prevState.concat(response.data.hits));
  //       setLoading(false);
  //   };
  //   getResponse();
  // }, [page]);

  const loadMoreHendler = () => {
    setPage(prevState => prevState + 1);
  };

return (
  <>
    <GlobalStyle />
    <Toaster />
    <Searchbar changeQuery={submitHandler} />
    <FallingLines
      color="#4fa94d"
      width="100"
      visible={loading}
      ariaLabel='falling-lines-loading'
    />
    <ImageGallery imageList={images}/>
    {images.length !== 0 ? (
        <Button onClick={loadMoreHendler} value={'Load more'} />
      ) : (
        <p />
      )}
  </>
)
};
