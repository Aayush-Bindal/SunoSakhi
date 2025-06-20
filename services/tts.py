from google.cloud import texttospeech
import os

# Set Google Cloud credentials
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "credentials.json"

def text_to_speech(text, language_code, output_filename="output.mp3"):          

    client = texttospeech.TextToSpeechClient()

    synthesis_input = texttospeech.SynthesisInput(text=text)

    # Select voice (you can change gender or language)
    voice = texttospeech.VoiceSelectionParams(
        language_code=language_code,
        ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL
    )

    # Set audio format
    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3
    )

    # Perform the request
    response = client.synthesize_speech(
        input=synthesis_input,
        voice=voice,
        audio_config=audio_config
    )

    # Save the output
    with open(output_filename, "wb") as out:
        out.write(response.audio_content)
        print(f"✅ Audio content written to '{output_filename}'")


# Example usage
if __name__ == "__main__":
    text = "Periods are a normal part of the menstrual cycle."                  #add variable to get text
    lang = "en-US"                                                              #change language code
    text_to_speech(text, language_code=lang, output_filename="tts_output.mp3")
