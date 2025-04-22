# Thumb Gesture Volume Controller 

This project demonstrates the use of hand gestures to control the volume of a system. The primary gesture is the **thumb up** for volume up and **thumb down** for volume down. The application uses **TensorFlow.js** and the **HandPose model** to track hand gestures through a camera feed.

## Features

- **Thumb Gesture Recognition**: Detects "thumbs up" and "thumbs down" gestures to control the volume.
- **Hand Tracking**: Uses the **HandPose model** to track hand landmarks in real-time.
- **Volume Control**: Sends requests to an API to control the volume based on the hand gesture.
- **Canvas Overlay**: Displays hand tracking landmarks and connecting lines on a canvas, providing a visual feedback of the gesture.

## Requirements to Run

- **Browser**: Any modern web browser that supports WebRTC and WebGL (Google Chrome, Mozilla Firefox, etc.).
- **Node.js** (optional): If you want to set up a server to handle the volume control API.

