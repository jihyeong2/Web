import React, { useState,useEffect } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos,setVideos] = useState([]);
  const search = query => {
    youtube
    .search(query)
    .then(videos => setVideos(videos));
  };
  useEffect(()=>{
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
  },[]);
  //  빈 리스트를 전달하면 처음 마운트 될 때만 실행
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
