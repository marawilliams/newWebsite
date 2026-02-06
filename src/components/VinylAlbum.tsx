// src/components/VinylAlbum.tsx
import { useNavigate } from 'react-router-dom';
//import './VinylAlbum.css';

// src/components/VinylAlbum.tsx
interface VinylAlbumProps {
  imageUrl: string;
  title: string;
  artist: string;
  route: string;
  position?: { x: number; y: number; rotation: number; zIndex: number };
  onClick?: () => void;
  isActive?: boolean;
}

export const VinylAlbum = ({ 
  imageUrl, 
  title, 
  artist, 
  route, 
  position,
  onClick,
  isActive = false
}: VinylAlbumProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(route);
    }
  };

  const style = position ? {
    left: `${position.x}vw`,  // Changed to vw
    top: `${position.y}vh`,   // Changed to vh
    transform: `rotate(${position.rotation}deg) ${isActive ? 'scale(1.2)' : 'scale(1)'}`,
    zIndex: position.zIndex,
  } : {};

  return (
    <button 
      className={`absolute w-[10vw] p-0 border-0 bg-transparent cursor-pointer transition-all duration-300 outline-none focus:outline-none ${
        isActive ? 'shadow-2xl' : 'hover:scale-105'
      }`}
      style={style}
      onClick={handleClick}
      aria-label={`View ${title} by ${artist}`}
    >
      <img 
        src={imageUrl} 
        alt={`${title} album cover`}
        className="w-full h-full object-cover rounded-sm"
      />
    </button>
  );
};