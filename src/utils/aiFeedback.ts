
export const generateAIFeedback = (entryText: string, selectedGroup?: string): string => {
  const feedbackMessages = {
    family: [
      "Schön, dass du das mit deiner Familie teilst. Solche Momente verbinden euch.",
      "Danke, dass du das geteilt hast. Familie ist so wichtig für unsere emotionale Gesundheit.",
      "Das wird deiner Familie zeigen, wie sehr du sie schätzt."
    ],
    'best-friend': [
      "Das wird deiner besten Freundin zeigen, wie viel sie dir bedeutet.",
      "Freundschaften leben von solchen offenen Momenten. Schön geteilt!",
      "Danke, dass du das geteilt hast. Echte Freundschaft braucht solche Ehrlichkeit."
    ],
    'work-colleagues': [
      "Professionelle Beziehungen werden durch solche Reflexionen gestärkt.",
      "Das zeigt deine Wertschätzung für das Team. Gut gemacht!",
      "Arbeitskollegen zu schätzen macht den Alltag so viel besser."
    ],
    private: [
      "Danke, dass du dir Zeit für diese Reflexion genommen hast.",
      "Selbstreflexion ist ein Geschenk an dein zukünftiges Ich.",
      "Solche privaten Momente sind wertvoll für dein persönliches Wachstum."
    ]
  };

  // Get messages for the group or use general messages
  const groupMessages = selectedGroup ? feedbackMessages[selectedGroup as keyof typeof feedbackMessages] : feedbackMessages.private;
  const messages = groupMessages || feedbackMessages.private;
  
  // Select a random message
  return messages[Math.floor(Math.random() * messages.length)];
};
