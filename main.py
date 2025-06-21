import os
from services.stt import detect_language_from_audio
from services.translate import translate_text

# Set Google Cloud credentials
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "credentials.json"         #API Key calling

#stt
audio_path = "input/2.wav"
transcript, lang_code = detect_language_from_audio(audio_path)
translate_text = translate_text(transcript, source_language=lang_code, target_language='en')

print("Transcript:", transcript)
print("Detected Language Code:", lang_code)
print("Trans", translate_text)
