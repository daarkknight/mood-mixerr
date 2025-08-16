import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MoodCard } from '@/components/MoodCard';
import { PlaylistSection } from '@/components/PlaylistSection';
import { QuoteSection } from '@/components/QuoteSection';
import { moods, playlists, quotes } from '@/data/moodData';
import { ArrowLeft, Sparkles } from 'lucide-react';

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
  };

  const handleBackToMoods = () => {
    setSelectedMood(null);
  };

  const selectedMoodData = selectedMood ? moods.find(m => m.id === selectedMood) : null;

  return (
    <div className={`min-h-screen transition-all duration-1000 ${
      selectedMood ? `mood-bg-${selectedMood} mood-bg-animated` : 'bg-background'
    }`}>
      {/* Header */}
      <header className="p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {selectedMood ? (
            <Button 
              variant="secondary" 
              onClick={handleBackToMoods}
              className="bg-white/20 text-white border-white/30 hover:bg-white/30"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Mood Mixer
              </h1>
            </div>
          )}
        </div>
      </header>

      <main className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          {!selectedMood ? (
            /* Mood Selection View */
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Comment te sens-tu aujourd'hui ?
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Découvre la playlist parfaite et trouve l'inspiration avec des citations qui correspondent à ton humeur.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {moods.map((mood) => (
                  <MoodCard
                    key={mood.id}
                    mood={mood}
                    isSelected={false}
                    onClick={() => handleMoodSelect(mood.id)}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* Selected Mood View */
            <div className="animate-slide-up">
              <div className="text-center mb-12">
                <div className="text-8xl mb-4 animate-float">
                  {selectedMoodData?.emoji}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Mood {selectedMoodData?.name}
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  {selectedMoodData?.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Playlist Section */}
                <PlaylistSection 
                  mood={selectedMoodData?.name || ''} 
                  playlist={playlists[selectedMood as keyof typeof playlists]}
                />

                {/* Quote Section */}
                <QuoteSection 
                  mood={selectedMoodData?.name || ''} 
                  quote={quotes[selectedMood as keyof typeof quotes]}
                />
              </div>

              {/* Floating background elements */}
              <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/10 floating" />
                <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-white/10 floating" />
                <div className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-white/10 floating" />
                <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full bg-white/10 floating" />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
