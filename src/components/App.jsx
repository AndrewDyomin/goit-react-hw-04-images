
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { FallingLines } from 'react-loader-spinner';
import { GlobalStyle } from './Global-style';
import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

axios.defaults.baseURL = 'https://pixabay.com/api';
const notify = () => toast('Please, enter your query.');

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
  };



submitHandler = (newQuery) => {
  if (newQuery !== '') {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    })
  } else { 
    notify();
  }
};

async componentDidUpdate(prevProps, prevState) {
  if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
    this.setState({ loading: true, })
    const response = await axios.get(`?q=${this.state.query.slice(this.state.query.indexOf('/') + 1)}&page=${this.state.page}&key=38182493-8ca9f9673ab94459449d03b1c&image_type=photo&orientation=horizontal&per_page=12`);
    this.setState(prevState => ({ 
      images: prevState.images.concat(response.data.hits), 
      loading: false,
    }));
  } else { 
    return; 
  };
};

loadMoreHendler = () => {
  this.setState(prevState => ({ page: prevState.page + 1 }));
};

 render() {
  return (
    <>
      <GlobalStyle />
      <Toaster />
      <Searchbar changeQuery={this.submitHandler} />
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={this.state.loading}
        ariaLabel='falling-lines-loading'
      />
      <ImageGallery imageList={this.state.images}/>
      {this.state.images.length !== 0 ? (
          <Button onClick={this.loadMoreHendler} value={'Load more'} />
        ) : (
          <p />
        )}
    </>
  );
 };
};
