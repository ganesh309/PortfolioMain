import handler from '../api/chat';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Manually load .env from root
const envPath = path.resolve(__dirname, '../.env');

if (fs.existsSync(envPath)) {
    const envFile = fs.readFileSync(envPath, 'utf8');
    envFile.split('\n').forEach(line => {
        const [key, ...values] = line.split('=');
        if (key && values.length > 0) {
            const value = values.join('=').trim();
            // Remove quotes if present
            const cleanValue = value.replace(/^["']|["']$/g, '');
            if (!process.env[key.trim()]) {
                process.env[key.trim()] = cleanValue;
            }
        }
    });
} else {
    console.warn("⚠️ .env file not found at", envPath);
}

// Mock Request
const req = {
    method: 'POST',
    body: {
        message: 'how much experience ganesh has ai ailabs?'
    }
};

// Mock Response
const res = {
    status: (code: number) => {
        console.log(`\n[Response Status]: ${code}`);
        return res;
    },
    json: (data: any) => {
        console.log('[Response Data]:');
        console.log(JSON.stringify(data, null, 2));
        return res;
    }
};

console.log(`\nTesting Chat API...`);
console.log(`Query: "${req.body.message}"`);
console.log(`API Key Present: ${!!process.env.OPENROUTER_API_KEY}`);

// Run Handler
// @ts-ignore
handler(req, res).catch(err => {
    console.error("Handler error:", err);
});
