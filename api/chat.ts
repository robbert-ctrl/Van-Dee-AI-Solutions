import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

// Rate limiting (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 20; // requests per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const clientIp = (req.headers['x-forwarded-for'] as string) || (req.headers['x-real-ip'] as string) || 'unknown';
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({ error: 'Rate limit exceeded. Please try again later.' });
  }

  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Invalid message' });
    }

    // Get API key from environment
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Initialize Google GenAI
    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `Je bent de AI-assistent van "Van Dee AI Solutions".
    Jouw doel is om bezoekers te helpen begrijpen wat wij doen.
    Wij zijn een Nederlands bedrijf gespecialiseerd in AI-workflows, automatisering en data-analyse voor bedrijven.
    Wij bieden:
    1. Workflow Automatisering (tijd besparen).
    2. Custom AI Chatbots (klantenservice).
    3. Data Analyse & Voorspelling.

    Antwoord altijd beleefd, professioneel, maar met een futuristisch en innovatief tintje.
    Antwoord in het Nederlands. Hou antwoorden kort en bondig (max 50 woorden tenzij gevraagd om meer).
    Als mensen een afspraak willen, verwijs ze naar de "Gratis Verkenningsgesprek" knop op de site.`;

    const chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
      history: Array.isArray(history) ? history.map((h: any) => ({
        role: h.role,
        parts: h.parts
      })) : []
    });

    const result = await chatSession.sendMessage({
      message: message
    });

    return res.status(200).json({
      text: result.text,
      success: true
    });

  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({
      error: 'Failed to process chat message',
      details: error.message
    });
  }
}
