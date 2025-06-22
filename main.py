import os
# from dotenv import load_dotenv
from services.stt import detect_language_from_audio
from services.translate import translate_text
from services.llm import generate_response
# from services.llm2 import generate_response2
from services.tts import text_to_speech

# Set Google Cloud credentials
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "credentials.json"

# Load environment variables from .env file
# load_dotenv()
# api_key = os.getenv("HF_TOKEN")

#start
audio_path = "files/input/input.wav"
transcript, lang_code = detect_language_from_audio(audio_path)
translated_text = translate_text(transcript, source_language=lang_code, target_language='en')
response = generate_response(translated_text)
# response = generate_response2("why are my periods late", api_key)
translated_response = translate_text(response, source_language='en', target_language=lang_code)
text_to_speech(translated_response, language_code=lang_code)


# for debugging
# print("Transcript:", transcript)
# print("Detected Language Code:", lang_code)
# print("Trans:", translated_text)
# print("response:", response)
# print("output", translated_response)
