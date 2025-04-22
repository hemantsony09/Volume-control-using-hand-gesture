# Thumb Gesture Volume Controller 

This project demonstrates the use of hand gestures to control the volume of a system. The primary gesture is the **thumb up** for volume up and **thumb down** for volume down. The application uses **TensorFlow.js** and the **HandPose model** to track hand gestures through a camera feed.

## Features

- **Thumb Gesture Recognition**: Detects "thumbs up" and "thumbs down" gestures to control the volume.
- **Hand Tracking**: Uses the **HandPose model** to track hand landmarks in real-time.
- **Volume Control**: Sends requests to an API to control the volume based on the hand gesture.
- **Canvas Overlay**: Displays hand tracking landmarks and connecting lines on a canvas, providing a visual feedback of the gesture.

## Requirements

- **Browser**: Any modern web browser that supports WebRTC and WebGL (Google Chrome, Mozilla Firefox, etc.).
- **Node.js** (optional): If you want to set up a server to handle the volume control API.

## Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/thumb-gesture-volume-controller.git
    cd thumb-gesture-volume-controller
    ```

2. **Open `index.html` in a web browser**:

   You can open `index.html` directly in any modern web browser that supports WebRTC. It should automatically start the camera feed and display the hand tracking with dots and lines.

3. **API (optional)**:

   The application is designed to send requests to an API for controlling volume. Here's an example of a simple Node.js server to handle the API calls.

   Create a **`server.js`** file:

   ```javascript
   const express = require("express");
   const app = express();
   const port = 3000;

   app.get("/volume/up", (req, res) => {
     console.log("Volume Up");
     // You can add logic to increase the system volume here
     res.send("Volume Up");
   });

   app.get("/volume/down", (req, res) => {
     console.log("Volume Down");
     // You can add logic to decrease the system volume here
     res.send("Volume Down");
   });

   app.listen(port, () => {
     console.log(`Volume control API listening at http://localhost:${port}`);
   });
