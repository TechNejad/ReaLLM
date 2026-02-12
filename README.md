# ReaLLM: Transparent Intelligence –> [live prototype](https://reallm.netlify.app/)

ReaLLM is a research prototype that reveals what typical AI chatbots hide: the system prompts and constraints that guide every response. Unlike standard chatbots that conceal their instructions, ReaLLM shows you exactly what rules, boundaries, and guidelines are shaping the AI's behavior.

## The Research

This project is developed for the AI Safety, Ethics, and Society (AISES) course by the Centre for AI Safety.

**Research Question**: Can making system prompts visible reduce overreliance on AI and improve users' mental models of how AI works?

Read the full paper: [Project Description.pdf](Assets/ReaLLM_Paper.pdf)

## Why It Matters

Most people interact with AI without knowing that hidden instructions are attached to every conversation. These instructions define:
- How the AI should communicate
- What topics it should avoid
- When to express uncertainty
- What boundaries it must follow

This lack of transparency creates risks: people may overtrust AI, misunderstand its limitations, or feel misled when they discover these hidden controls.

ReaLLM explores **interface-level transparency** as a safety mechanism – making these constraints visible and understandable to everyone, not just AI researchers.

## Key Features

### **Live Transparency Panel**
As you chat, a side panel shows you what's shaping each response:
- **Role & Identity**: What persona is the AI playing?
- **Active Constraints**: What rules is it following?
- **Tone & Stance**: Why does it sound this way?
- **Uncertainty Signals**: How confident is it?

### **System Prompt Viewer**
Click a button to see the complete hidden instruction set that defines the AI's behavior – displayed like code to show you exactly what's "under the hood."

### **Dual-Model Architecture**
Two AI models work together:
1. **Primary Model**: Responds to your questions
2. **Interpreter Model**: Analyzes and explains what constraints shaped that response

## Limitations

  This is a **demonstration prototype** for research purposes:
  - Not empirically validated through user studies
  - Designed for demonstration, not production deployment

## Technology

Built with vanilla JavaScript and the Groq API. The entire interface runs as a single-page application.

## Dependencies

For a complete list of external dependencies and version specifications, see [DEPENDENCIES.md](DEPENDENCIES.md).

## Author

**Mohsen Hassan Nejad**
Artificial Intelligence for Sustainable Societies (AISS) Program

## License

MIT License

