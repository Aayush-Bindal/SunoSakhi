from google.cloud import translate_v2 as translate
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "credentials.json"           #API key calling

translate_client = translate.Client()

translation = translate_client.translate("पीरियड्स क्या होते हैं?", target_language='en')           #change the value and target_language (both coming from outside files)
translated_text = translation['translatedText']
print("🌐 Translated to English:", translated_text)
