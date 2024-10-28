// src/components/PhotoAlbum.js
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// src/components/PhotoAlbum.js
import './PhotoAlbum.css';
import photo1 from '../images/photo1.jpg'


// Sample photo data
const photos = [
    photo1,
    "https://wpcontent.anytimeastro.com/blog_anytimeastro/blogimages/525/4896-Happy-Diwali-Wishes-images.jpg?text=Photo+1",
    "https://png.pngtree.com/thumb_back/fh260/background/20220921/pngtree-happy-celebration-deepavalior-diwali-indian-festival-festive-holiday-light-photo-image_33870526.jpg?text=Photo+2",
    "https://media.geeksforgeeks.org/wp-content/uploads/20231102193011/diwali-2023-date.png?text=Photo+3",
    "https://img.freepik.com/free-vector/happy-diwali-greeting-wallpaper-social-media-post_1017-55619.jpg?text=Photo+4",
    "https://bsmedia.business-standard.com/_media/bs/img/article/2022-10/21/full/1666324835-4224.jpg?im=FeatureCrop,size=(826,465)/600x400?text=Photo+5",
    "https://wallpapers.com/images/featured/happy-diwali-pictures-so9gshqqc2v7suhs.jpg?text=Photo+6"
];

const PhotoAlbum = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Functions to handle navigation
    const goToNextPhoto = () => {
        setCurrentIndex((currentIndex + 1) % photos.length);
    };

    const goToPreviousPhoto = () => {
        setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
    };

    return (
        <div className="photo-album">
            <div className="photo-display">
                <img src={photos[currentIndex]} alt={`Photo ${currentIndex + 1}`} />
            </div>
            <div className="controls">
                <button onClick={goToPreviousPhoto} aria-label="Previous Photo">
                    <FaArrowLeft />
                </button>
                <span>
                    {currentIndex + 1} / {photos.length}
                </span>
                <button onClick={goToNextPhoto} aria-label="Next Photo">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default PhotoAlbum;
