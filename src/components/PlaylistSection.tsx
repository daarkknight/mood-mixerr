import { Card } from "@/components/ui/card";
import { Music, Play } from "lucide-react";

interface PlaylistSectionProps {
  mood: string;
  playlist: {
    name: string;
    songs: Array<{
      title: string;
      artist: string;
      duration: string;
    }>;
  };
}

export const PlaylistSection = ({ mood, playlist }: PlaylistSectionProps) => {
  return (
    <Card className="mood-card bg-card/80 p-6 animate-slide-up">
      <div className="flex items-center gap-3 mb-6">
        <Music className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold">Playlist {mood}</h2>
      </div>
      
      <div className="space-y-3">
        {playlist.songs.map((song, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Play className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="font-medium">{song.title}</div>
                <div className="text-sm text-muted-foreground">{song.artist}</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">{song.duration}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};