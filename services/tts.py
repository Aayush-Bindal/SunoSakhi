from google.cloud import texttospeech

def text_to_speech(
    text: str,
    language_code: str,
    output_filepath: str = "output/output.mp3"
) -> str:

    # Initialize the Google Cloud Text-to-Speech client
    client = texttospeech.TextToSpeechClient()

    # Set the text input
    synthesis_input = texttospeech.SynthesisInput(text=text)

    # Configure the voice parameters
    voice_params = texttospeech.VoiceSelectionParams(
        language_code=language_code,
        name="hi-IN-Chirp3-HD-Autonoe",
    )

    # Configure the audio output format for MP3
    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3,
    )

    try:
        # Perform the text-to-speech synthesis
        response = client.synthesize_speech(
            input=synthesis_input,
            voice=voice_params,
            audio_config=audio_config
        )

        # Write the audio content to the specified file
        with open(output_filepath, "wb") as out:
            out.write(response.audio_content)
        print(f"Audio content written to file: {output_filepath}")
        return output_filepath

    except Exception as e:
        print(f"An error occurred during TTS: {e}")
        return f"Error: {e}"