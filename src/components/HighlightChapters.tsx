
import { Card, CardContent } from '@/components/ui/card';
import { HighlightChapter } from '../types/JournalTypes';

interface HighlightChaptersProps {
  chapters: HighlightChapter[];
  onChapterSelect: (chapterId: string) => void;
}

const HighlightChapters = ({ chapters, onChapterSelect }: HighlightChaptersProps) => {
  if (chapters.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-3">
      {chapters.map((chapter) => {
        const IconComponent = chapter.icon;
        return (
          <Card 
            key={chapter.id}
            className="mineral-card mineral-hover cursor-pointer border-2 border-mineral hover:border-primary transition-all duration-200 h-32"
            onClick={() => onChapterSelect(chapter.id)}
          >
            <CardContent className="p-4 h-full flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className={`${chapter.color} p-2 rounded-lg flex-shrink-0 mineral-shadow-soft`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-end">
                <h3 className="font-semibold text-mineral-primary text-sm mb-1 leading-tight">
                  {chapter.title}
                </h3>
                <p className="text-mineral-secondary text-xs line-clamp-2">
                  {chapter.description}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default HighlightChapters;
