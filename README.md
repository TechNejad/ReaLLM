# ReaLLM: Transparent Intelligence –> [live prototype](https://reallm.netlify.app/)

**Making the invisible visible** – See the hidden instructions that shape AI responses in real-time.

## What is ReaLLM?

ReaLLM is a research prototype that reveals what typical AI chatbots hide: the system prompts and constraints that guide every response. Unlike standard chatbots that conceal their instructions, ReaLLM shows you exactly what rules, boundaries, and guidelines are shaping the AI's behavior.

## Why It Matters

Most people interact with AI without knowing that hidden instructions are attached to every conversation. These instructions define:
- How the AI should communicate
- What topics it should avoid
- When to express uncertainty
- What boundaries it must follow

This lack of transparency creates risks: people may overtrust AI, misunderstand its limitations, or feel misled when they discover these hidden controls.

ReaLLM explores **interface-level transparency** as a safety mechanism – making these constraints visible and understandable to everyone, not just AI researchers.

## Key Features

### 🔍 **Live Transparency Panel**
As you chat, a side panel shows you what's shaping each response:
- **Role & Identity**: What persona is the AI playing?
- **Active Constraints**: What rules is it following?
- **Tone & Stance**: Why does it sound this way?
- **Uncertainty Signals**: How confident is it?

### 📜 **System Prompt Viewer**
Click a button to see the complete hidden instruction set that defines the AI's behavior – displayed like code to show you exactly what's "under the hood."

### 🤖 **Dual-Model Architecture**
Two AI models work together:
1. **Primary Model**: Responds to your questions
2. **Interpreter Model**: Analyzes and explains what constraints shaped that response

## The Research

This project is part of ongoing research into AI safety and human-AI interaction, developed for the AI Safety, Ethics, and Society (AISES) course.

**Research Question**: Can making system prompts visible reduce overreliance on AI and improve users' mental models of how AI works?

Read the full paper: [Project Description.pdf](Assets/ReaLLM_Paper.pdf)

## Design Philosophy

**Transparency should be interpretive, not overwhelming.**

Rather than dumping raw technical details, ReaLLM:
- Provides **short, digestible insights**
- Uses **plain language** for non-technical users
- Offers **progressive disclosure** (click to learn more)
- Updates **contextually** for each conversation turn

## Limitations

This is a **demonstration prototype** for research and discussion:
- Not a production system
- Not empirically validated through user studies
- Uses a single, fixed system prompt (not adaptive)
- Designed for demonstration, not deployment

## Technology

Built with vanilla JavaScript and the Groq API. The entire interface runs as a single-page application.

## Running Locally

To run ReaLLM on your local machine for research or development:

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Python 3 or Node.js (for local server)
- Groq API key (free at [console.groq.com](https://console.groq.com))

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/TechNejad/ReaLLM.git
   cd ReaLLM
   ```

2. **Add your Groq API key**
   - Open `index.html` in a text editor
   - Find line 1461: `const API_KEY = "%%reaLLM_Groq_API%%";`
   - Replace `%%reaLLM_Groq_API%%` with your actual Groq API key

3. **Start a local server**

   Using Python:
   ```bash
   python3 -m http.server 8000
   ```

   Or using Node.js (if installed):
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:8000`
   - Start chatting to see transparency features in action

### Testing (Optional)

To run the automated test suite:

```bash
npm install
npm test
```

See `tests/README.md` for more details on the testing framework.

## Dependencies

For a complete list of external dependencies and version specifications, see [DEPENDENCIES.md](DEPENDENCIES.md).

## Author

**Mohsen Hassan Nejad**
Artificial Intelligence for Sustainable Societies (AISS) Program

## License

MIT License

---

**Try it yourself** and discover what's really shaping AI responses.
