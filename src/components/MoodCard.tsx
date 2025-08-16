import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface MoodCardProps {
  mood: {
    id: string;
    name: string;
    emoji: string;
    description: string;
    color: string;
  };
  isSelected: boolean;
  onClick: () => void;
}

export const MoodCard = ({ mood, isSelected, onClick }: MoodCardProps) => {
  return (
    <Card 
      className={`mood-card p-6 cursor-pointer transition-all duration-300 ${
        isSelected 
          ? `mood-bg-${mood.id} border-white/40 shadow-2xl` 
          : 'bg-card/80 hover:bg-card/90'
      }`}
      onClick={onClick}
    >
      <div className="text-center space-y-4">
        <div className={`text-6xl animate-pulse-glow ${isSelected ? 'animate-float' : ''}`}>
          {mood.emoji}
        </div>
        <h3 className={`text-xl font-bold ${isSelected ? 'text-white' : 'text-foreground'}`}>
          {mood.name}
        </h3>
        <p className={`text-sm ${isSelected ? 'text-white/90' : 'text-muted-foreground'}`}>
          {mood.description}
        </p>
        {isSelected && (
          <Button 
            variant="secondary" 
            className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors"
          >
            Explorer ce mood
          </Button>
        )}
      </div>
    </Card>
  );
};