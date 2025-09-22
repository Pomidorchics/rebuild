import React, { useState, useRef, useEffect } from 'react';
import '../styles/Block5.css';
import logo from "../assets/logo_header.png";
import photo_1_1 from "../assets/services_1.png";
import photo_1_2 from "../assets/services_2.png";
import photo_3_1 from "../assets/portfolio_3.png";
import photo_4_1 from "../assets/portfolio_2.png";
import photo_4_2 from "../assets/portfolio_1.png";
import photo_4_3 from "../assets/portfolio_4.png";
import volumeHigh from "../assets/volumeHigh.png";
import volumeMuted from "../assets/volumeMuted.png";

function Reviews() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const videoRef = useRef(null);
  const volumeTimeoutRef = useRef(null);

  const reviews = [
    {
      id: 1,
      type: "text",
      photos: [photo_1_1, photo_1_2],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      type: "circle",
      circle: "/videos/circle2.mp4"
    },
    {
      id: 3,
      type: "text",
      photos: [photo_3_1],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 4,
      type: "text",
      photos: [photo_4_1, photo_4_2, photo_4_3],
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 5,
      type: "circle",
      circle: "/videos/circle1.mp4"
    },
    {
      id: 6,
      type: "text",
      photos: [],
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
  ];

  const VolumeIcon = ({ isMuted, volume }) => {
    if (isMuted || volume === 0) {
      return <img src={volumeMuted} alt="Выкл. звук" className="volume-icon" />;
    }
    
    return <img src={volumeHigh} alt="Вкл. звук" className="volume-icon" />;
  };

  const openMediaModal = (reviewId, mediaType, mediaIndex) => {
    const review = reviews.find(r => r.id === reviewId);
    if (!review) return;

    let mediaArray = [];
    if (mediaType === 'photo') {
      mediaArray = review.photos;
    } else if (mediaType === 'video') {
      mediaArray = [review.circle];
    }

    setSelectedMedia({
      reviewId,
      mediaType,
      mediaArray,
      currentIndex: mediaIndex
    });
    setCurrentMediaIndex(mediaIndex);
    setIsVideoPlaying(true);
    setIsVideoMuted(false);
    setVolume(1);
  };

  const closeMediaModal = () => {
    setSelectedMedia(null);
    setCurrentMediaIndex(0);
    setIsVideoPlaying(true);
    setIsVideoMuted(false);
    setVolume(1);
    setVideoProgress(0);
    setShowVolumeSlider(false);
    
    if (volumeTimeoutRef.current) {
      clearTimeout(volumeTimeoutRef.current);
    }
  };

  const nextMedia = () => {
    if (selectedMedia && currentMediaIndex < selectedMedia.mediaArray.length - 1) {
      setCurrentMediaIndex(currentMediaIndex + 1);
    }
  };

  const prevMedia = () => {
    if (selectedMedia && currentMediaIndex > 0) {
      setCurrentMediaIndex(currentMediaIndex - 1);
    }
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('media-modal')) {
      closeMediaModal();
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const handleProgressChange = (e) => {
    if (videoRef.current) {
      const time = (e.target.value / 100) * videoRef.current.duration;
      videoRef.current.currentTime = time;
      setVideoProgress(e.target.value);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsVideoMuted(videoRef.current.muted);
      
      if (!videoRef.current.muted) {
        setShowVolumeSlider(true);
        if (volumeTimeoutRef.current) {
          clearTimeout(volumeTimeoutRef.current);
        }
        volumeTimeoutRef.current = setTimeout(() => {
          setShowVolumeSlider(false);
        }, 2000);
      }
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      
      if (newVolume > 0 && videoRef.current.muted) {
        videoRef.current.muted = false;
        setIsVideoMuted(false);
      }
      
      setShowVolumeSlider(true);
      
      if (volumeTimeoutRef.current) {
        clearTimeout(volumeTimeoutRef.current);
      }
      volumeTimeoutRef.current = setTimeout(() => {
        setShowVolumeSlider(false);
      }, 2000);
    }
  };

  const handleVolumeMouseEnter = () => {
    setShowVolumeSlider(true);
    if (volumeTimeoutRef.current) {
      clearTimeout(volumeTimeoutRef.current);
    }
  };

  const handleVolumeMouseLeave = () => {
    volumeTimeoutRef.current = setTimeout(() => {
      setShowVolumeSlider(false);
    }, 1000);
  };

  useEffect(() => {
    if (selectedMedia?.mediaType === 'video' && videoRef.current) {
      setIsVideoMuted(videoRef.current.muted);
      setVolume(videoRef.current.volume);
    }
  }, [selectedMedia]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || selectedMedia?.mediaType !== 'video') return;

    const updateProgress = () => {
      if (video.duration) {
        setVideoProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', updateProgress);
    
    return () => {
      video.removeEventListener('timeupdate', updateProgress);
    };
  }, [selectedMedia]);

  return (
    <section className="chat-section" id="reviews">
      <h2 className="chat-title">Отзывы</h2>
      
      <div className="telegram-chat">
        <div className="chat-header">
          <div className="chat-avatar">
            <div className="avatar-placeholder">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="chat-info">
            <h3 className="chat-name">СК "Перестройка"</h3>
            <p className="chat-status">онлайн</p>
          </div>
        </div>

        <div className="chat-messages">
          <div className="message-container">
            <div className="message question-message">
              <div className="message-content">
                <p>Напишите, пожалуйста, отзыв</p>
                <span className="message-time">12:30</span>
                <div className="message-status">✓✓</div>
              </div>
            </div>
          </div>

          {reviews.map((review) => {
            const totalMedia = review.type === "circle" ? -1 : review.photos.length;
            const mediaCountClass = 
              totalMedia === -1 ? 'circle-media' : 
              totalMedia === 1 ? 'single-media' : 
              totalMedia === 2 ? 'double-media' : 
              totalMedia > 2 ? 'multiple-media' : '';

            return (
              <div key={review.id} className="message-container">
                <div className={`message answer-message ${mediaCountClass}`}>
                  <div className="message-content">
                    {review.type === "text" && (review.photos.length > 0) && (
                      <div 
                        className="review-media-grid"
                        data-count={totalMedia}
                      >
                        {review.photos.map((photo, index) => (
                          <img
                            key={index}
                            src={photo}
                            alt={`Отзыв ${review.id} фото ${index + 1}`}
                            className="review-media-item"
                            onClick={() => openMediaModal(review.id, 'photo', index)}
                          />
                        ))}
                      </div>
                    )}

                    {review.type === "circle" && (
                      <div className="circle-video-container">
                        <video
                          className="circle-video"
                          onClick={() => openMediaModal(review.id, 'video', 0)}
                          autoPlay
                          muted
                          loop
                          playsInline
                        >
                          <source src={review.circle} type="video/mp4" />
                        </video>
                      </div>
                    )}

                    {review.type === "text" && review.text && (
                      <p>{review.text}</p>
                    )}

                    <span className="message-time">12:31</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedMedia && (
        <div className="media-modal" onClick={handleModalClick}>
          <div className="media-modal-content">
            <button className="modal-close" onClick={closeMediaModal}>×</button>
            
            {selectedMedia.mediaType === 'photo' ? (
              <img
                src={selectedMedia.mediaArray[currentMediaIndex]}
                alt="Увеличенное фото"
                className="modal-image"
              />
            ) : (
              <div className="video-modal-wrapper">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isVideoMuted}
                  className="modal-video-circle"
                  onClick={togglePlayPause}
                >
                  <source src={selectedMedia.mediaArray[currentMediaIndex]} type="video/mp4" />
                </video>
                <div className="custom-video-controls">
                  <button onClick={togglePlayPause} className="control-btn">
                    {isVideoPlaying ? '❚❚' : '▶'}
                  </button>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={videoProgress}
                    onChange={handleProgressChange}
                    className="progress-slider"
                  />
                  <div 
                    className="volume-control"
                    onMouseEnter={handleVolumeMouseEnter}
                    onMouseLeave={handleVolumeMouseLeave}
                  >
                    <button onClick={toggleMute} className="control-btn volume-btn">
                      <VolumeIcon isMuted={isVideoMuted} volume={volume} />
                    </button>
                    <div className={`volume-slider-container ${showVolumeSlider ? 'visible' : ''}`}>
                      <input 
                        type="range" 
                        min="0" 
                        max="1" 
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="volume-slider"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedMedia.mediaArray.length > 1 && (
              <>
                <button 
                  className="modal-nav modal-prev"
                  onClick={prevMedia}
                  disabled={currentMediaIndex === 0}
                >
                  ‹
                </button>
                <button 
                  className="modal-nav modal-next"
                  onClick={nextMedia}
                  disabled={currentMediaIndex === selectedMedia.mediaArray.length - 1}
                >
                  ›
                </button>
              </>
            )}

            <div className="media-counter">
              {currentMediaIndex + 1} / {selectedMedia.mediaArray.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Reviews;