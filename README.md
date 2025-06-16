# 🌸 SunoSakhi – Voice AI for Women’s Health (Hackathon Project)

**SunoSakhi** is a voice-based AI assistant that allows rural women to call a number and ask questions about menstrual, sexual, and reproductive health in their **own regional language** — with **complete privacy** and no need for smartphones.

## 📱 Features

- 📞 Call-based interaction using **Exotel**
- 🗣️ Multi-turn conversations (follow-ups supported)
- 🧠 AI model trained on women’s health data

## 🧱 Architecture

Caller → Exotel → FastAPI Webhook →
Vakyansh STT → IndicTrans2 →
LLM (adi2606) → IndicTrans2 →
Vakyansh TTS → Exotel
1. **User calls** 
2. **STT** converts voice → text
3. **Translate to English**
4. **LLM** generates the answer
5. Translated back to **local language**
6. **TTS** converts text → speech
7. System speaks the answer
8. Ask for **follow-up question**

## 🛠️ Tech Stack

| Function | Tool |
|----------|------|
| Telephony | Exotel |
| Backend | FastAPI |
| STT | Vakyansh ASR |
| TTS | Vakyansh TTS / Coqui |
| Translation | IndicTrans2 |
| LLM | adi2606/Menstrual-Health-Awareness-Chatbot |

## 📸 Demo

[Will be uploaded]
