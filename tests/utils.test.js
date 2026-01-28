/**
 * Tests for ReaLLM utility functions
 * These tests verify the core logic used in the ReaLLM application
 */

import { describe, it, expect } from 'vitest';
import {
    formatText,
    createInsightCardData,
    isValidMessageRole,
    createMessageData,
    parseTransparencyInsights
} from '../src/utils.js';

describe('formatText', () => {
    it('should convert **bold** markdown to HTML strong tags', () => {
        const input = 'This is **bold** text';
        const result = formatText(input);
        expect(result).toContain('<strong>bold</strong>');
    });

    it('should convert *italic* markdown to HTML em tags', () => {
        const input = 'This is *italic* text';
        const result = formatText(input);
        expect(result).toContain('<em>italic</em>');
    });

    it('should convert line breaks to <br> tags', () => {
        const input = 'Line 1\nLine 2';
        const result = formatText(input);
        expect(result).toContain('<br>');
        expect(result).toBe('Line 1<br>Line 2');
    });

    it('should escape HTML to prevent XSS', () => {
        const input = '<script>alert("xss")</script>';
        const result = formatText(input);
        expect(result).not.toContain('<script>');
        expect(result).toContain('&lt;script&gt;');
    });

    it('should handle mixed markdown formatting', () => {
        const input = 'This is **bold** and *italic* text';
        const result = formatText(input);
        expect(result).toContain('<strong>bold</strong>');
        expect(result).toContain('<em>italic</em>');
    });

    it('should handle empty string', () => {
        const result = formatText('');
        expect(result).toBe('');
    });
});

describe('createInsightCardData', () => {
    it('should create valid insight card data', () => {
        const insight = {
            label: 'Role',
            value: 'Helpful Assistant',
            detail: 'The AI is playing a helpful assistant role'
        };
        const result = createInsightCardData(insight);
        expect(result).toEqual({
            label: 'Role',
            value: 'Helpful Assistant',
            detail: 'The AI is playing a helpful assistant role'
        });
    });

    it('should throw error for missing properties', () => {
        const insight = { label: 'Role', value: 'Assistant' };
        expect(() => createInsightCardData(insight)).toThrow('Insight must have label, value, and detail properties');
    });

    it('should throw error for non-object input', () => {
        expect(() => createInsightCardData('not an object')).toThrow('Insight must be an object');
    });

    it('should convert values to strings', () => {
        const insight = {
            label: 123,
            value: 456,
            detail: 789
        };
        const result = createInsightCardData(insight);
        expect(typeof result.label).toBe('string');
        expect(typeof result.value).toBe('string');
        expect(typeof result.detail).toBe('string');
    });
});

describe('isValidMessageRole', () => {
    it('should return true for "user" role', () => {
        expect(isValidMessageRole('user')).toBe(true);
    });

    it('should return true for "assistant" role', () => {
        expect(isValidMessageRole('assistant')).toBe(true);
    });

    it('should return false for invalid roles', () => {
        expect(isValidMessageRole('admin')).toBe(false);
        expect(isValidMessageRole('system')).toBe(false);
        expect(isValidMessageRole('')).toBe(false);
    });
});

describe('createMessageData', () => {
    it('should create valid message data for user', () => {
        const result = createMessageData('user', 'Hello!');
        expect(result.role).toBe('user');
        expect(result.content).toBe('Hello!');
        expect(result.timestamp).toBeTypeOf('number');
    });

    it('should create valid message data for assistant', () => {
        const result = createMessageData('assistant', 'Hi there!');
        expect(result.role).toBe('assistant');
        expect(result.content).toBe('Hi there!');
    });

    it('should throw error for invalid role', () => {
        expect(() => createMessageData('invalid', 'content')).toThrow('Role must be "user" or "assistant"');
    });

    it('should throw error for empty content', () => {
        expect(() => createMessageData('user', '')).toThrow('Content must be a non-empty string');
    });

    it('should throw error for non-string content', () => {
        expect(() => createMessageData('user', null)).toThrow('Content must be a non-empty string');
    });

    it('should include timestamp', () => {
        const before = Date.now();
        const result = createMessageData('user', 'Test');
        const after = Date.now();
        expect(result.timestamp).toBeGreaterThanOrEqual(before);
        expect(result.timestamp).toBeLessThanOrEqual(after);
    });
});

describe('parseTransparencyInsights', () => {
    it('should parse simple insight format', () => {
        const response = 'Role: Helpful Assistant - The AI is being helpful\nTone: Friendly - Using warm language';
        const result = parseTransparencyInsights(response);

        expect(result).toHaveLength(2);
        expect(result[0]).toEqual({
            label: 'Role',
            value: 'Helpful Assistant',
            detail: 'The AI is being helpful'
        });
        expect(result[1]).toEqual({
            label: 'Tone',
            value: 'Friendly',
            detail: 'Using warm language'
        });
    });

    it('should handle empty response', () => {
        const result = parseTransparencyInsights('');
        expect(result).toEqual([]);
    });

    it('should skip lines that do not match pattern', () => {
        const response = 'Role: Helpful - Being helpful\nInvalid line\nTone: Warm - Friendly';
        const result = parseTransparencyInsights(response);
        expect(result).toHaveLength(2);
    });
});
