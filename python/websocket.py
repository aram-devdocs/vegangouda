# create a basic web socket using flask_socketio

from flask import Flask, render_template_string
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)


@app.route("/")
def index():
    return render_template_string(
        """
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>SocketIO Example</title>
          
        </head>
        <body>
            <h1>SocketIO Example</h1>
        </body>
        </html>
    """
    )


@socketio.on("connect")
def handle_connect():
    print("Client connected")
    emit("message", "Hello from the server")


@socketio.on("disconnect")
def handle_disconnect():
    print("Client disconnected")
    emit("message", "Goodbye from the server")


if __name__ == "__main__":
    print("Starting server")

    socketio.run(app, host="0.0.0.0", port=5001)
