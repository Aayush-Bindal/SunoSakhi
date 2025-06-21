from google.cloud import speech
import io

def detect_language_from_audio(audio_path, possible_languages=None):

    if possible_languages is None:
        possible_languages = [
            "hi-IN",  # Hindi (India)
            "bn-IN",  # Bengali (India)
            "gu-IN",  # Gujarati (India)
            "kn-IN",  # Kannada (India)
            "ml-IN",  # Malayalam (India)
            "mr-IN",  # Marathi (India)
            "or-IN",  # Oriya (India)
            "pa-IN",  # Punjabi (India)
            "ta-IN",  # Tamil (India)
            "te-IN",  # Telugu (India)
            "ur-IN",  # Urdu (India)
        ]
        #Don't add English here to prevent wrong language detection (periods is an English word)

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

    return transcript, detected_language
