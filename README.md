# 🌸 SunoSakhi

**SunoSakhi** is an AI-powered, call-based voice assistant for rural Indian women to ask queries related to **menstrual, sexual, and reproductive health** — in their **own regional languages**.

---

## 📱 Features

- 📞 Call-based interaction using **Exotel**
- 🗣️ Multi-turn conversations (follow-ups supported)
- 🧠 AI model trained on women’s health data (Menstrual-LLaMA)
- 🌐 Supports Hindi, Marathi, Bengali (extendable)
- 🔐 Consent-first data collection (no audio stored)

---

## 🧠 System Architecture

1. **User calls**
2. System asks for **consent**
3. **STT** converts voice → text
4. **Translate to Hindi**
5. **LLM** generates the answer
6. Translated back to **local language**
7. **TTS** converts text → speech
8. System speaks the answer
9. Ask for **follow-up question**

---

## 💻 Tech Stack

| Component | Tool |
|----------|------|
| Voice ↔ Text | IndicASR, Indic-TTS |
| Translation | IndicTrans2 |
| LLM | Menstrual-LLaMA |
| Backend | FastAPI |
| Telephony | Exotel |
| Storage | JSONL (consent-based) |

---

## 🤝 Team Roles

- **Backend & LLM** – Prompt engineering, session context
- **Voice I/O** – STT, TTS, language processing
- **Telephony** – Exotel IVR, webhook integration
- **Docs & Privacy** – Consent, encrypted logs, README, PPT

---

## 🔒 Privacy-First Approach

- ❌ No recordings saved
- ✅ Only Q&A stored if user opts in
- 🔐 Data is AES encrypted
- 📄 User is informed during the call

---

## 📸 Demo

[Will be uploaded]

---

## 🧩 Future Scope

- WhatsApp chatbot version
- NGO collaboration
- Offline voice support
