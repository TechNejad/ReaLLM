# ReaLLM Dependencies

This document lists all external dependencies required to run ReaLLM, ensuring reproducibility for research purposes.

## Runtime Dependencies

### 1. Groq SDK
- **Version**: 0.8.0
- **Source**: `https://esm.sh/groq-sdk@0.8.0`
- **Purpose**: JavaScript client for interacting with Groq's LLM API
- **Loaded via**: ES Module import from CDN
- **License**: Apache 2.0

### 2. Groq API Access
- **Service**: Groq Cloud API
- **Model Used**: `llama-3.3-70b-versatile`
- **Purpose**:
  - Primary model: Responds to user queries
  - Interpreter model: Analyzes system prompt influence
- **Authentication**: Requires API key
- **Cost**: Free tier available at [console.groq.com](https://console.groq.com)

### 3. Google Fonts
- **Fonts**:
  - Inter (weights: 300, 400, 500, 600, 700)
  - JetBrains Mono (weights: 400, 500, 600)
- **Source**: `https://fonts.googleapis.com`
- **Purpose**: Typography for UI and code display
- **Loaded via**: CSS link in HTML head
- **License**: Open Font License

## Development Dependencies

### Testing Framework
- **Vitest**: ^1.2.0
  - Modern test runner for JavaScript/TypeScript
  - Used for automated testing of core functions

### Coverage Tools
- **@vitest/coverage-v8**: ^1.2.0
  - Code coverage reporting for test suite

See `package.json` for complete development dependency specifications.

## Browser Requirements

ReaLLM requires a modern browser with:
- ES6 module support
- Fetch API
- CSS Grid and Flexbox
- Local Storage (for API key storage in local development)

**Tested on**:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Deployment Dependencies

### Netlify
- **Service**: Static site hosting
- **Configuration**: `netlify.toml`
- **Build Command**: None (static HTML)
- **Purpose**: Hosts live demo at [reallm.netlify.app](https://reallm.netlify.app)

## External Services

### APIs
1. **Groq API**
   - Endpoint: Managed by Groq SDK
   - Rate Limits: As per Groq free tier
   - Required for: All chat functionality

### CDNs
1. **esm.sh** - ES Module CDN for Groq SDK
2. **Google Fonts CDN** - Font delivery

## Version Pinning

All external dependencies use **explicit version numbers** to ensure reproducibility:
- Groq SDK: `@0.8.0` (pinned)
- Font families: Specific weights declared
- Node.js (for development): 18.x or 20.x

## Reproducibility Notes

### For Researchers Running Locally:

1. **No build process required** - ReaLLM is vanilla JavaScript
2. **API Key needed** - Replace `%%reaLLM_Groq_API%%` in `index.html` with your Groq API key
3. **Serve via HTTP** - Run `npm run dev` or any static server (required for ES modules)

### For Researchers Analyzing Code:

- All dependencies are **external** (no npm install needed for main app)
- Core logic is in `index.html` (lines 1458-2133)
- Test dependencies in `package.json` are optional (for verification only)

## Dependency Integrity

### Security Considerations
- **CDN Risk**: Dependencies loaded from third-party CDNs could theoretically change
- **Mitigation**: Version pinning (`@0.8.0`) ensures consistent behavior
- **For Production**: Consider vendoring dependencies locally

### API Key Security
- **Development**: Store API key locally (not in git)
- **Production**: Use environment variables or build-time replacement
- **Live Demo**: API key embedded server-side (Netlify)

## Updating Dependencies

To update Groq SDK version:
1. Change version in import statement (line 1458 of `index.html`)
2. Test thoroughly with new version
3. Update this file with new version number
4. Document any breaking changes

## Offline Use

ReaLLM **requires internet connection** for:
- Groq API calls (essential)
- Google Fonts (optional - system fonts fallback)
- Groq SDK from CDN (essential)

**No offline mode available** - this is an API-dependent research prototype.

## License Compatibility

All dependencies use permissive licenses compatible with ReaLLM's MIT License:
- Groq SDK: Apache 2.0 ✓
- Google Fonts: Open Font License ✓
- Vitest: MIT ✓

---

**Last Updated**: 2025-01-28
**ReaLLM Version**: 1.0.0
