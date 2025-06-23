
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart, Sparkles } from 'lucide-react';

interface HighlightChapter {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  entryCount: number;
}

interface HighlightChaptersProps {
  chapters: HighlightChapter[];
  onChapterSelect: (chapterId: string) => void;
}

const HighlightChapters = ({ chapters, onChapterSelect }: HighlightChaptersProps) => {
  if (chapters.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-white mb-4 px-4">Highlights</h2>
      <div className="px-4">
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {chapters.map((chapter) => {
              const IconComponent = chapter.icon;
              return (
                <CarouselItem key={chapter.id} className="pl-2 md:pl-4 basis-4/5 md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors cursor-pointer"
                    onClick={() => onChapterSelect(chapter.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className={`${chapter.color} p-2 rounded-lg`}>
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-white text-sm mb-1 truncate">
                            {chapter.title}
                          </h3>
                          <p className="text-gray-400 text-xs line-clamp-2 mb-2">
                            {chapter.description}
                          </p>
                          <span className="text-gray-500 text-xs">
                            {chapter.entryCount} {chapter.entryCount === 1 ? 'entry' : 'entries'}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </div>
  );
};

export default HighlightChapters;
