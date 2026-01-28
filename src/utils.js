/**
 * ReaLLM Utility Functions
 * Core logic extracted for testing and reusability
 */

/**
 * Format text with basic markdown support
 * Converts **bold**, *italic*, and line breaks to HTML
 * @param {string} text - Raw text to format
 * @returns {string} HTML-formatted text
 */
export function formatText(text) {
    // Escape HTML to prevent XSS
    const escapeHtml = (str) => {
        if (typeof document !== 'undefined') {
            const div = document.createElement('div');
            div.textContent = str;
            return div.innerHTML;
        }
        // Node.js fallback for testing
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    };

    let formatted = escapeHtml(text);

    // Convert markdown bold **text** to <strong>text</strong>
    formatted = formatted.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Convert markdown italic *text* to <em>text</em>
    formatted = formatted.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Convert line breaks to <br>
    formatted = formatted.replace(/\n/g, '<br>');

    return formatted;
}

/**
 * Create insight card data structure
 * @param {Object} insight - Insight object with label, value, and detail
 * @returns {Object} Validated insight card data
 */
export function createInsightCardData(insight) {
    if (!insight || typeof insight !== 'object') {
        throw new Error('Insight must be an object');
    }

    if (!insight.label || !insight.value || !insight.detail) {
        throw new Error('Insight must have label, value, and detail properties');
    }

    return {
        label: String(insight.label),
        value: String(insight.value),
        detail: String(insight.detail)
    };
}

/**
 * Validate message role
 * @param {string} role - Message role (user or assistant)
 * @returns {boolean} Whether role is valid
 */
export function isValidMessageRole(role) {
    return role === 'user' || role === 'assistant';
}

/**
 * Create message data structure
 * @param {string} role - Message role (user or assistant)
 * @param {string} content - Message content
 * @returns {Object} Message data object
 */
export function createMessageData(role, content) {
    if (!isValidMessageRole(role)) {
        throw new Error('Role must be "user" or "assistant"');
    }

    if (!content || typeof content !== 'string') {
        throw new Error('Content must be a non-empty string');
    }

    return {
        role,
        content,
        timestamp: Date.now()
    };
}

/**
 * Parse transparency insights from interpreter response
 * @param {string} response - Raw interpreter model response
 * @returns {Array} Array of insight objects
 */
export function parseTransparencyInsights(response) {
    const insights = [];

    // This is a simplified parser - adjust based on your actual API response format
    const lines = response.split('\n').filter(line => line.trim());

    for (const line of lines) {
        // Look for patterns like "Label: Value - Detail"
        const match = line.match(/^(.+?):\s*(.+?)\s*-\s*(.+)$/);
        if (match) {
            insights.push({
                label: match[1].trim(),
                value: match[2].trim(),
                detail: match[3].trim()
            });
        }
    }

    return insights;
}
