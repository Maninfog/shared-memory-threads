
import { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
import { useJournalEntries } from '../hooks/useJournalEntries';
import { useChat } from '../hooks/useChat';
import { useNavigate } from 'react-router-dom';
import BottomNav from '@/components/BottomNav';

const CreateEntry = () => {
  const [inputValue, setInputValue] = useState('');
  const [isAiMode, setIsAiMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { addEntry } = useJournalEntries();
  const { messages, isLoading, error, sendMessage, addUserMessage, clearChat } = useChat();
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const messageToSend = inputValue;
    setInputValue('');
    
    if (isAiMode) {
      await sendMessage(messageToSend);
    } else {
      // In normal mode, just add the text as a user message without AI response
      addUserMessage(messageToSend);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSaveAsEntry = () => {
    const userMessages = messages.filter(m => m.role === 'user');
    if (userMessages.length > 0) {
      const combinedText = userMessages.map(m => m.content).join('\n\n');
      addEntry(combinedText, 'private');
      navigate('/home');
    }
  };

  const handleToggleChange = (checked: boolean) => {
    setIsAiMode(checked);
    if (!checked) {
      // When turning off AI mode, clear the chat to avoid confusion
      clearChat();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-foreground">
              {isAiMode ? 'Tagebuch Chat' : 'Tagebuch Eintrag'}
            </h1>
            <div className="flex items-center space-x-4">
              {/* AI Toggle */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">AI Chat</span>
                <Switch
                  checked={isAiMode}
                  onCheckedChange={handleToggleChange}
                />
              </div>
              
              {isAiMode && (
                <>
                  <Button 
                    onClick={clearChat}
                    variant="outline"
                    size="sm"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Zurücksetzen
                  </Button>
                  <Button 
                    onClick={handleSaveAsEntry}
                    variant="outline"
                    size="sm"
                    disabled={messages.filter(m => m.role === 'user').length === 0}
                  >
                    Als Eintrag speichern
                  </Button>
                </>
              )}
              
              {!isAiMode && (
                <Button 
                  onClick={handleSaveAsEntry}
                  variant="outline"
                  size="sm"
                  disabled={messages.filter(m => m.role === 'user').length === 0}
                >
                  Eintrag speichern
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Error Display */}
      {error && isAiMode && (
        <div className="max-w-4xl mx-auto px-4 py-2">
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
            <p className="text-destructive text-sm">{error}</p>
          </div>
        </div>
      )}

      {/* Chat Messages */}
      <ScrollArea className="flex-1 pb-20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="space-y-6">
            {/* Show messages if there are any, or show placeholder */}
            {messages.length > 0 ? (
              <>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-3 ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground ml-12'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.content}
                      </p>
                      <div className="text-xs opacity-70 mt-2">
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </div>
                    </div>

                    {message.role === 'user' && (
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-secondary-foreground" />
                      </div>
                    )}
                  </div>
                ))}

                {isLoading && isAiMode && (
                  <div className="flex items-start space-x-3 justify-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="bg-muted rounded-2xl px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center text-muted-foreground py-8">
                <p className="text-lg mb-2">
                  {isAiMode ? 'Starte ein Gespräch mit der AI' : 'Schreibe deinen Tagebucheintrag'}
                </p>
                <p className="text-sm">
                  {isAiMode 
                    ? 'Die AI hilft dir beim Reflektieren und Schreiben deiner Gedanken.'
                    : 'Verwende das Textfeld unten, um deine Gedanken festzuhalten.'
                  }
                </p>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t border-border bg-background/95 backdrop-blur-sm sticky bottom-0 pb-20">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="relative">
            <Textarea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={isAiMode ? "Schreibe deine Nachricht hier..." : "Schreibe deinen Tagebucheintrag hier..."}
              className="min-h-[60px] max-h-32 resize-none pr-12 rounded-xl border-2 focus:border-primary"
              disabled={isLoading && isAiMode}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || (isLoading && isAiMode)}
              size="icon"
              className="absolute bottom-2 right-2 rounded-lg"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default CreateEntry;
