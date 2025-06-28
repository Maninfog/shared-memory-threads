
import { useState, useCallback } from 'react';
import { chatService } from '../services/chatService';

interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: 'Hallo! Ich bin hier, um dir beim Tagebuchschreiben zu helfen. Was beschäftigt dich heute?',
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await chatService.sendMessage(content);
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein unerwarteter Fehler ist aufgetreten');
      console.error('Chat-Fehler:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addUserMessage = useCallback((content: string) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
  }, []);

  const clearChat = useCallback(() => {
    setMessages([{
      id: '1',
      content: 'Hallo! Ich bin hier, um dir beim Tagebuchschreiben zu helfen. Was beschäftigt dich heute?',
      role: 'assistant',
      timestamp: new Date()
    }]);
    chatService.clearHistory();
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    addUserMessage,
    clearChat
  };
};
