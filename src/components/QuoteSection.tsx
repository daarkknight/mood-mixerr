import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface QuoteSectionProps {
  mood: string;
  quote: {
    text: string;
    author: string;
  };
}

export const QuoteSection = ({ mood, quote }: QuoteSectionProps) => {
  return (
    <Card className="mood-card bg-card/80 p-8 text-center animate-slide-up">
      <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-60" />
      <blockquote className="text-lg md:text-xl font-medium leading-relaxed mb-4 italic">
        "{quote.text}"
      </blockquote>
      <cite className="text-muted-foreground font-medium">— {quote.author}</cite>
    </Card>
  );
};