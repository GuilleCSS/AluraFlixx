// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoCard from '../components/VideoCard';
import Modal from '../components/Modal';

function Home() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/videos')
      .then(response => setVideos(response.data))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  const handleEditClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (id) => {
    axios.delete(`http://localhost:3000/videos/${id}`)
      .then(() => {
        setVideos(videos.filter(video => video.id !== id));
      })
      .catch(error => console.error('Error deleting video:', error));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="page">
      <Header />
      <div className="banner">
        <img src="banner-image-url.jpg" alt="Banner" />
      </div>
      <div className="video-cards">
        {videos.map(video => (
          <VideoCard
            key={video.id}
            video={video}
            onEditClick={() => handleEditClick(video)}
            onDeleteClick={() => handleDeleteClick(video.id)}
          />
        ))}
      </div>
      {isModalOpen && (
        <div className="overlay">
          <Modal video={selectedVideo} onClose={closeModal} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Home;
