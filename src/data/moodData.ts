export const moods = [
  {
    id: 'happy',
    name: 'Joyeux',
    emoji: '😊',
    description: 'Plein d\'énergie positive et de bonne humeur',
    color: 'hsl(45 100% 65%)'
  },
  {
    id: 'calm',
    name: 'Calme',
    emoji: '😌',
    description: 'Paisible et serein, en harmonie',
    color: 'hsl(200 100% 70%)'
  },
  {
    id: 'energetic',
    name: 'Énergique',
    emoji: '🔥',
    description: 'Dynamique et prêt à tout affronter',
    color: 'hsl(0 100% 65%)'
  },
  {
    id: 'focused',
    name: 'Concentré',
    emoji: '🎯',
    description: 'Mental clair et objectifs précis',
    color: 'hsl(120 60% 55%)'
  },
  {
    id: 'relaxed',
    name: 'Détendu',
    emoji: '🌸',
    description: 'Doux moment de relaxation et de bien-être',
    color: 'hsl(280 80% 75%)'
  },
  {
    id: 'creative',
    name: 'Créatif',
    emoji: '🎨',
    description: 'Imagination débordante et inspiration',
    color: 'hsl(30 100% 60%)'
  }
];

export const playlists = {
  happy: {
    name: 'Bonheur',
    songs: [
      { title: 'Good as Hell', artist: 'Lizzo', duration: '3:52' },
      { title: 'Happy', artist: 'Pharrell Williams', duration: '3:53' },
      { title: 'Walking on Sunshine', artist: 'Katrina & The Waves', duration: '3:58' },
      { title: 'I Got You', artist: 'Jack Johnson', duration: '3:24' },
      { title: 'Three Little Birds', artist: 'Bob Marley', duration: '3:05' }
    ]
  },
  calm: {
    name: 'Sérénité',
    songs: [
      { title: 'Weightless', artist: 'Marconi Union', duration: '8:08' },
      { title: 'Clair de Lune', artist: 'Claude Debussy', duration: '5:02' },
      { title: 'Aqueous Transmission', artist: 'Incubus', duration: '7:49' },
      { title: 'Mad World', artist: 'Gary Jules', duration: '3:07' },
      { title: 'The Night We Met', artist: 'Lord Huron', duration: '3:28' }
    ]
  },
  energetic: {
    name: 'Énergie',
    songs: [
      { title: 'Thunder', artist: 'Imagine Dragons', duration: '3:07' },
      { title: 'Pump It', artist: 'Black Eyed Peas', duration: '3:33' },
      { title: 'Bangarang', artist: 'Skrillex', duration: '3:35' },
      { title: 'Titanium', artist: 'David Guetta ft. Sia', duration: '4:05' },
      { title: 'Stronger', artist: 'Kanye West', duration: '5:11' }
    ]
  },
  focused: {
    name: 'Focus',
    songs: [
      { title: 'Focus', artist: 'Hocus Pocus', duration: '3:30' },
      { title: 'Time', artist: 'Hans Zimmer', duration: '4:35' },
      { title: 'Ludovico Einaudi', artist: 'Nuvole Bianche', duration: '5:57' },
      { title: 'Experience', artist: 'Ludovico Einaudi', duration: '5:15' },
      { title: 'Mind Heist', artist: 'Zack Hemsey', duration: '3:44' }
    ]
  },
  relaxed: {
    name: 'Relaxation',
    songs: [
      { title: 'River', artist: 'Joni Mitchell', duration: '4:00' },
      { title: 'Mad About You', artist: 'Sting', duration: '4:25' },
      { title: 'Black', artist: 'Pearl Jam', duration: '5:43' },
      { title: 'The Sound of Silence', artist: 'Disturbed', duration: '4:08' },
      { title: 'Breathe', artist: 'Pink Floyd', duration: '2:49' }
    ]
  },
  creative: {
    name: 'Créativité',
    songs: [
      { title: 'Bohemian Rhapsody', artist: 'Queen', duration: '5:55' },
      { title: 'Imagine', artist: 'John Lennon', duration: '3:03' },
      { title: 'What a Wonderful World', artist: 'Louis Armstrong', duration: '2:20' },
      { title: 'Space Oddity', artist: 'David Bowie', duration: '5:18' },
      { title: 'Paint It Black', artist: 'The Rolling Stones', duration: '3:44' }
    ]
  }
};

export const quotes = {
  happy: {
    text: 'Le bonheur n\'est pas quelque chose de fait. Il vient de vos propres actions.',
    author: 'Dalaï Lama'
  },
  calm: {
    text: 'La paix ne peut être maintenue par la force. Elle ne peut être atteinte que par la compréhension.',
    author: 'Albert Einstein'
  },
  energetic: {
    text: 'L\'énergie et la persévérance conquièrent toutes les choses.',
    author: 'Benjamin Franklin'
  },
  focused: {
    text: 'La concentration est la racine de toutes les capacités supérieures de l\'homme.',
    author: 'Bruce Lee'
  },
  relaxed: {
    text: 'Parfois vous devez ralentir pour aller plus vite.',
    author: 'Proverbe japonais'
  },
  creative: {
    text: 'La créativité, c\'est l\'intelligence qui s\'amuse.',
    author: 'Albert Einstein'
  }
};