# ReaLLM: Interface-Level Transparency as a Safety Intervention

A demonstration prototype that makes AI system prompts and constraints visible to users in real-time.

## Overview

ReaLLM is a research prototype exploring **interface-level transparency** as a soft safety mechanism for human-LLM interaction. Unlike typical chatbots that hide their instructions, ReaLLM reveals the constraints, guidelines, and reasoning that shape AI responses.

## Key Features

### 1. **Dual-Model Architecture**
- **Primary Model**: Standard chatbot with condensed system prompt
- **Interpreter Model**: Analyzes constraints and translates them into human-readable insights

### 2. **Two-Panel Interface**
- **Left Panel**: Standard chat interaction
- **Right Panel**: Live transparency insights showing:
  - Model role and identity
  - Active constraints
  - Tone and stance
  - Uncertainty indicators

### 3. **System Prompt Viewer**
- Full system prompt displayed in code-like format
- Makes hidden instructions explicit and accessible
- One-click access via header button

## Design Philosophy

> **Transparency is interpretive, not a code dump**

Explanations are:
- **Short**: Digestible insights, not overwhelming detail
- **Structured**: Organized by constraint categories
- **User-friendly**: Written for non-technical audiences
- **Context-sensitive**: Updated for each response

## Technology Stack

- **Frontend**: Vanilla JavaScript (ES6 modules), HTML5, CSS3
- **AI Model**: Groq API with `llama-3.3-70b-versatile`
- **Deployment**: Netlify (static hosting with environment variables)

## Installation & Setup

### Local Development

1. **Clone the repository**
   ```bash
   cd /Users/Mo/Documents/GitHub/ReaLLM
   ```

2. **Set up API key**

   Replace `%%GROQ_API_KEY%%` in `index.html` with your Groq API key, or use the build command:
   ```bash
   export GROQ_API_KEY="your_key_here"
   sed -i '' "s|%%GROQ_API_KEY%%|$GROQ_API_KEY|g" index.html
   ```

3. **Run local server**
   ```bash
   python3 -m http.server 8000
   ```

4. **Open in browser**
   ```
   http://localhost:8000
   ```

### Netlify Deployment

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Configure Netlify**
   - Connect repository to Netlify
   - Add environment variable: `GROQ_API_KEY`
   - Build settings are in `netlify.toml`

3. **Deploy**
   - Netlify will automatically build and deploy
   - API key is injected during build

## Project Structure

```
/ReaLLM/
├── index.html                          # Main application (SPA)
├── netlify.toml                        # Netlify deployment config
├── package.json                        # Project metadata
├── README.md                           # Documentation
├── .gitignore                          # Git ignore rules
├── System_Prompt_Main_Model.md         # Primary model instructions
├── System_Prompt_Interpreter.md        # Interpreter model instructions
└── Project_ Description.pdf            # Research paper
```

## How It Works

### Dual-Model Flow

1. **User sends message** → Primary model generates response
2. **Interpreter model receives**:
   - System prompt
   - User message
   - Assistant response
3. **Interpreter analyzes** what constraints shaped the response
4. **Transparency panel updates** with structured insights
5. **User sees both** the response AND the reasoning behind it

### Transparency Insights

Each insight card shows:
- **Label**: Category (e.g., "Active Constraints")
- **Value**: Short summary (5-8 words)
- **Detail**: Full explanation (click to expand)

Categories include:
- **Role Identity**: What persona is the model playing?
- **Active Constraints**: What rules are being followed?
- **Tone & Stance**: What communication style is used?
- **Uncertainty Signals**: How is the model handling knowledge limits?

## Research Context

This prototype demonstrates concepts from the research paper:

**"ReaLLM: Interface-Level Transparency as a Safety Intervention in Human–LLM Interaction"**
by Mohsen HassanNejad

### Key Arguments

1. **System prompts are hidden** from users in most LLM interfaces
2. **Hidden instructions create risks**: overreliance, mistrust, poor mental models
3. **Interface transparency** is complementary to algorithmic interpretability
4. **Selective disclosure** outperforms both total opacity and maximal transparency

### Safety Mechanisms Addressed

- **Overreliance reduction**: Users see model limitations explicitly
- **Mental model calibration**: Understanding of AI construction
- **Capability disclosure**: Clear boundaries on what model can/cannot do
- **Confidence communication**: Uncertainty made visible

## Usage Tips

### For Demonstrations

- Start with simple questions to show baseline behavior
- Try edge cases (medical advice, legal questions) to see boundary enforcement
- Ask for uncertain information to trigger uncertainty indicators
- Compare responses with/without transparency panel visible

### For Research

- Observe how transparency affects user trust
- Test different levels of detail disclosure
- Explore cognitive load vs. understanding trade-offs
- Investigate "gaming" behaviors when prompts are visible

## Limitations

This is a **demonstration prototype**, not a production system:

- ✅ Conceptual proof-of-concept
- ✅ Working dual-model architecture
- ✅ Real-time transparency generation
- ❌ Not empirically validated
- ❌ No user studies conducted
- ❌ Single system prompt (not adaptive)
- ❌ No personalization or learning

## Future Work

Potential extensions:
- **Adaptive transparency**: Adjust detail level based on user expertise
- **Empirical validation**: User studies measuring reliance, trust, understanding
- **Multi-modal insights**: Visual representations of constraint hierarchies
- **Prompt editing**: Allow users to modify constraints and see effects
- **Comparative studies**: Test against baseline and full-transparency interfaces

## Academic Context

Developed for the **AI Safety, Ethics, and Society (AISES)** course as part of the Artificial Intelligence for Sustainable Societies (AISS) program.

### Related Work

- Ehsan et al. (2021): Social transparency in AI systems
- Amershi et al. (2019): Guidelines for human-AI interaction
- Vasconcelos et al. (2023): Explanations reducing overreliance
- Wang et al. (2025): Mental models of LLM ecosystems

## License

MIT License - See LICENSE file for details

## Contact

**Mohsen HassanNejad**
AISS Program, Track 1B: Technical Research with Write-Up

---

**Note**: This prototype uses the Groq API with browser-side execution (`dangerouslyAllowBrowser: true`). For production use, implement proper backend API routes to secure credentials.
