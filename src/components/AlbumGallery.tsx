import { useState, useEffect } from 'react';
import { VinylAlbum } from './VinylAlbum';

interface Album {
  id: number;
  imageUrl: string;
  title: string;
  artist: string;
  route: string;
}

interface PositionedAlbum extends Album {
  position: { x: number; y: number; rotation: number; zIndex: number };
}

type AlbumState = 'original' | 'viewing' | 'aside';

interface AlbumWithState extends PositionedAlbum {
  state: AlbumState;
}

function AlbumGallery() {
  const albums: Album[] = [
    { id: 1, imageUrl: "/weezer.png", title: "Blue Album", artist: "Weezer", route: "/about" },
    { id: 2, imageUrl: "/album2.png", title: "Album 2", artist: "Artist 2", route: "/album2" },
    { id: 3, imageUrl: "/album3.png", title: "Album 3", artist: "Artist 3", route: "/album3" },
    // Add more albums
  ];

  const [allAlbums, setAllAlbums] = useState<AlbumWithState[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Generate random position for pile
  const getRandomPilePosition = (index: number, pileType: 'original' | 'aside') => {
    const baseX = pileType === 'original' ? 25 : 65;
    const baseY = 50;
    
    return {
      x: baseX + (Math.random() - 0.5) * 5,
      y: baseY + (Math.random() - 0.5) * 5,
      rotation: (Math.random() - 0.5) * 30,
      zIndex: index
    };
  };

  // Initialize albums with positions and state
  useEffect(() => {
    const initialAlbums = albums.map((album, index) => ({
      ...album,
      position: getRandomPilePosition(index, 'original'),
      state: 'original' as AlbumState
    }));
    setAllAlbums(initialAlbums);
  }, []);

  const handleNext = () => {
    const current = allAlbums[currentIndex];
    
    if (current.state === 'original') {
      // Move from original pile to viewing
      const updated = [...allAlbums];
      updated[currentIndex] = { ...current, state: 'viewing' };
      setAllAlbums(updated);
    } else if (current.state === 'viewing') {
      // Move from viewing to aside pile with new position
      const updated = [...allAlbums];
      updated[currentIndex] = {
        ...current,
        state: 'aside',
        position: getRandomPilePosition(
          allAlbums.filter(a => a.state === 'aside').length,
          'aside'
        )
      };
      setAllAlbums(updated);
      
      // Move to next album in original pile or viewing
      const nextIndex = allAlbums.findIndex((a, i) => 
        i > currentIndex && (a.state === 'original' || a.state === 'viewing')
      );
      if (nextIndex !== -1) {
        setCurrentIndex(nextIndex);
      }
    }
  };

  const handlePrevious = () => {
    const current = allAlbums[currentIndex];
    
    if (current.state === 'viewing') {
      // Move from viewing back to original pile
      const updated = [...allAlbums];
      updated[currentIndex] = { ...current, state: 'original' };
      setAllAlbums(updated);
    } else if (current.state === 'aside') {
      // Move from aside pile to viewing
      const updated = [...allAlbums];
      updated[currentIndex] = { ...current, state: 'viewing' };
      setAllAlbums(updated);
    }
  };

  // Get viewing position (centered and large)
  const getViewingPosition = () => ({
    x: 50,
    y: 50,
    rotation: 0,
    zIndex: 1000
  });

  const originalPile = allAlbums.filter(a => a.state === 'original');
  const viewingAlbum = allAlbums.find(a => a.state === 'viewing');
  const asidePile = allAlbums.filter(a => a.state === 'aside');

  return (
    <div className="relative z-20">
      {/* Original Pile */}
      {originalPile.map((album) => (
        <VinylAlbum
          key={`original-${album.id}`}
          {...album}
          position={album.position}
          isActive={false}
        />
      ))}

      {/* Viewing Album (Large and Centered) */}
      {viewingAlbum && (
        <VinylAlbum
          key={`viewing-${viewingAlbum.id}`}
          {...viewingAlbum}
          position={getViewingPosition()}
          isActive={true}
        />
      )}

      {/* Aside Pile */}
      {asidePile.map((album) => (
        <VinylAlbum
          key={`aside-${album.id}`}
          {...album}
          position={album.position}
          isActive={false}
        />
      ))}

      {/* Controls - ALWAYS visible */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex gap-4 items-center z-[1001]">
        <button
          onClick={handlePrevious}
          disabled={!viewingAlbum && asidePile.length === 0}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>

        <button
          onClick={handleNext}
          disabled={!viewingAlbum && originalPile.length === 0}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default AlbumGallery;