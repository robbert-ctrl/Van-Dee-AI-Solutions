/**
 * Gemini API service - now using backend API to protect API keys
 * The API key is securely stored on the server side
 */

export interface ChatMessage {
  role: string;
  parts: { text: string }[];
}

export const chatWithGemini = async (
  userMessage: string,
  history: ChatMessage[] = []
): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage,
        history: history
      }),
    });

    if (!response.ok) {
      // Handle specific error codes
      if (response.status === 429) {
        return "Mijn excuses, er zijn te veel verzoeken. Probeer het over een paar minuten opnieuw.";
      }

      if (response.status === 500) {
        return "Mijn excuses, ik kan momenteel geen verbinding maken met de neurale link. Probeer het later opnieuw.";
      }

      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (!data.success || !data.text) {
      throw new Error('Invalid response format from API');
    }

    return data.text;

  } catch (error) {
    console.error("Gemini Error:", error);

    // User-friendly error messages
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return "Mijn excuses, ik kan geen verbinding maken met de server. Controleer je internetverbinding.";
    }

    return "Mijn excuses, ik kan momenteel geen verbinding maken met de neurale link. Probeer het later opnieuw.";
  }
};