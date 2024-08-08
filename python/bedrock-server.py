import os
from dotenv import load_dotenv
import json
import boto3
from flask import Flask, request, jsonify
from botocore.exceptions import ClientError

# Load environment variables from .env files
load_dotenv(dotenv_path="../.env")
load_dotenv(dotenv_path="../.local.env")

# AWS credentials
AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")

print(AWS_ACCESS_KEY_ID)
print(AWS_SECRET_ACCESS_KEY)
accept = "application/json"
contentType = "application/json"

# Create a Bedrock Runtime client in the AWS Region of your choice.
client = boto3.client("bedrock-runtime", region_name="us-east-1")

# Initialize Flask app
app = Flask(__name__)

def invoke_model(client, model_id, request, stream=False):
    try:
        if stream:
            # Invoke the model with the request and stream the response.
            streaming_response = client.invoke_model_with_response_stream(
                modelId=model_id, body=request
            )

            # Extract and print the response text in real-time.
            response_text = ""
            for event in streaming_response["body"]:
                chunk = json.loads(event["chunk"]["bytes"])
                if "outputs" in chunk:
                    response_text += chunk["outputs"][0].get("text", "")
            return response_text
        else:
            # Invoke the model with the request.
            response = client.invoke_model(modelId=model_id, body=request)

            # Decode the response body.
            model_response = json.loads(response["body"].read())

            # Extract and return the response text.
            return model_response["outputs"][0]["text"]

    except (ClientError, Exception) as e:
        return f"ERROR: Can't invoke '{model_id}'. Reason: {e}"

@app.route('/invoke', methods=['POST'])
def invoke():
    data = request.json
    model_id = data.get("model_id", "mistral.mistral-large-2402-v1:0")
    prompt = data.get("prompt", "")
    max_tokens = data.get("max_tokens", 512)
    temperature = data.get("temperature", 0.5)
    stream = data.get("stream", False)

    # Embed the prompt in Mistral's instruction format.
    formatted_prompt = f"<s>[INST] {prompt} [/INST]"

    # Format the request payload using the model's native structure.
    native_request = {
        "prompt": formatted_prompt,
        "max_tokens": max_tokens,
        "temperature": temperature,
    }

    # Convert the native request to JSON.
    request_payload = json.dumps(native_request)

    # Invoke the model and get the response.
    response_text = invoke_model(client, model_id, request_payload, stream)

    return jsonify({"response": response_text})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)



# / should be a basic ui to interact with the model
@app.route('/')
def index():
    html_form