from google.cloud import speech
import io
import os

# Set Google Cloud credentials
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "credentials.json"         #API Key calling

def detect_language_from_audio(audio_path, possible_languages=None):

    if possible_languages is None:
        possible_languages = ['hi-IN', 'ta-IN', 'te-IN']          #DOn't add english here to prevent wrong language detection (periods is a english word)

    client = speech.SpeechClient()

    # Read audio
    with io.open(audio_path, "rb") as audio_file:
        content = audio_file.read()

    audio = speech.RecognitionAudio(content=content)

    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz=16000,
        language_code=possible_languages[0],  # must be set
        alternative_language_codes=possible_languages[1:],  # others for auto-detect
        enable_automatic_punctuation=True
    )

    response = client.recognize(config=config, audio=audio)

    if not response.results:
        print("No speech detected.")
        return None, None

    result = response.results[0]
    transcript = result.alternatives[0].transcript
    detected_language = result.language_code if hasattr(result, 'language_code') else possible_languages[0]

    # Save detected language to env var
    os.environ["DETECTED_LANGUAGE"] = detected_language

    return transcript, detected_language


# Run detection
if __name__ == "__main__":
    transcript, lang_code = detect_language_from_audio("test_16k.wav")       #Change the audio file path from here

    print("Transcript:", transcript)
    print("Detected Language Code:", lang_code)
    print("Environment Variable DETECTED_LANGUAGE =", os.getenv("DETECTED_LANGUAGE"))
