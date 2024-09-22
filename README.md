# GaiaNet AI Chat with Yann LeCun

This project is a React-based web application that simulates a conversation with an AI version of Yann LeCun, a prominent figure in artificial intelligence. The app leverages GaiaNet's decentralized AI inference network to generate responses in the style and perspective of Yann LeCun.

## About GaiaNet

GaiaNet provides decentralized AI inference via public and private hosted nodes. This approach offers several advantages:
- Distributed computing power
- Increased reliability and fault tolerance
- Potential for lower latency depending on node proximity

## How It Works

1. The application uses a large language model accessed through GaiaNet's decentralized network.
2. The model is fine-tuned with approximately 200 scraped tweets from Yann LeCun's Twitter account.
3. These tweets are used to create a system prompt that guides the AI to respond in a manner similar to Yann LeCun's writing style, opinions, and areas of expertise.
4. When a user sends a message, it's sent along with this system prompt to the GaiaNet API.
5. The API returns a response generated by the AI model, which is then displayed in the chat interface.

This approach allows the AI to mimic Yann LeCun's communication style and knowledge base, creating a more authentic conversational experience.

## Features

- Chat interface with AI-generated responses mimicking Yann LeCun's style
- Utilizes GaiaNet's decentralized AI inference network
- AI responses based on ~200 scraped tweets from Yann LeCun
- Suggested conversation topics
- Real-time message updates
- Responsive design

## Installation

1. Clone the repository:
   ```
   git clone  https://github.com/internettrashh/Gaianet-submission.git
   cd Gaianet-submission
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your GaiaNet API endpoint:
   ```
   VITE_GAIANET_API_ENDPOINT=your_gaianet_api_endpoint_here
   ```

## Running the Project

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Building for Production

To create a production build:
