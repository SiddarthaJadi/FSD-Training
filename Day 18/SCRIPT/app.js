const http = require('http');
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.json');

// Helper to send JSON response
const sendJson = (response, statusCode, data) => {
    response.writeHead(statusCode, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    response.end(JSON.stringify(data));
};

// Load data from file
const loadData = () => {
    try {
        if (fs.existsSync(dataPath)) {
            return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        }
    } catch (err) {
        console.error('Error loading data:', err);
    }
    return [];
};

// Save data to file
const saveData = (data) => {
    try {
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('Error saving data:', err);
    }
};

const server = http.createServer((request, response) => {
    // CORS headers
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (request.method === 'OPTIONS') {
        response.writeHead(200);
        response.end();
        return;
    }

    if (request.url === '/' && request.method === 'GET') {
        sendJson(response, 200, { message: 'Task API Server Running', status: 'ok' });
    } else if (request.url === '/tasks' && request.method === 'GET') {
        const data = loadData();
        sendJson(response, 200, data);
    } else if (request.url === '/tasks' && request.method === 'POST') {
        let body = '';
        
        request.on('data', (chunk) => {
            body += chunk.toString();
        });

        request.on('end', () => {
            try {
                const parsedBody = JSON.parse(body);
                if (!parsedBody.task || typeof parsedBody.task !== 'string') {
                    return sendJson(response, 400, { success: false, error: 'Task must be a non-empty string' });
                }
                
                const data = loadData();
                const newTask = {
                    id: data.length > 0 ? Math.max(...data.map(t => t.id)) + 1 : 1,
                    task: parsedBody.task.trim(),
                    completed: false,
                    createdAt: new Date().toISOString()
                };
                data.push(newTask);
                saveData(data);
                sendJson(response, 201, { success: true, message: 'Task added', task: newTask });
            } catch (err) {
                console.error('Error:', err);
                sendJson(response, 400, { success: false, error: 'Invalid JSON' });
            }
        });
    } else if (request.url.startsWith('/tasks/') && request.method === 'DELETE') {
        const id = parseInt(request.url.split('/')[2]);
        if (isNaN(id)) {
            return sendJson(response, 400, { error: 'Invalid task ID' });
        }
        const data = loadData();
        const filtered = data.filter(t => t.id !== id);
        saveData(filtered);
        sendJson(response, 200, { success: true, message: 'Task deleted' });
    } else {
        sendJson(response, 404, { error: 'Endpoint not found' });
    }
});

server.listen(2000, () => {
    console.log(' Server started on http://localhost:2000');
});
