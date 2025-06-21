# from google.cloud import translate_v2 as translate
#
# translate_client = translate.Client()
#
# translation = translate_client.translate("पीरियड्स क्या होते हैं?", target_language='en-IN')           #change the value and target_language (both coming from outside files)
# translated_text = translation['translatedText']
# print("🌐 Translated to English:", translated_text)


from google.cloud import translate_v2 as translate


def translate_text(text, source_language=None, target_language='en'):
    """
    Translate text from source language to target language using Google Cloud Translate.

    Args:
        text (str): The text to be translated
        source_language (str, optional): Source language code (e.g., 'hi', 'es', 'fr').
                                       If None, Google will auto-detect the language.
        target_language (str): Target language code (default: 'en' for English)
                              Examples: 'en', 'hi', 'es', 'fr', 'de', 'en-IN', etc.

    Returns:
        str: The translated text

    Raises:
        Exception: If translation fails
    """
    try:
        # Initialize the Google Translate client
        translate_client = translate.Client()

        # Perform translation
        if source_language:
            translation = translate_client.translate(
                text,
                source_language=source_language,
                target_language=target_language
            )
        else:
            # Auto-detect source language
            translation = translate_client.translate(
                text,
                target_language=target_language
            )

        # Extract translated text
        translated_text = translation['translatedText']

        return translated_text

    except Exception as e:
        raise Exception(f"Translation failed: {str(e)}")
