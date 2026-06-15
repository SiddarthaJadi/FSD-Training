// Load and display tasks on page load
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    const input = document.getElementById('input');
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') createTask();
        });
    }
}

// Load tasks from server
async function loadTasks() {
    try {
        const response = await fetch('http://localhost:2000/tasks', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const tasks = await response.json();
        displayTasks(tasks);
    } catch (err) {
        console.error('Error loading tasks:', err);
        showMessage(' Error loading tasks. Make sure the server is running on http://localhost:2000', 'danger');
    }
}

// Display tasks in UI
function displayTasks(tasks) {
    const taskList = document.getElementById('taskList');
    if (!taskList) return;
    
    taskList.innerHTML = '';
    
    if (!Array.isArray(tasks) || tasks.length === 0) {
        taskList.innerHTML = '<p class="text-muted text-center">📝 No tasks yet. Add one to get started!</p>';
        return;
    }
    
    tasks.forEach(task => {
        if (!task.task) return;
        const taskEl = document.createElement('div');
        taskEl.className = 'task-item card';
        taskEl.innerHTML = `
            <div class="card-body d-flex justify-content-between align-items-center">
                <span class="flex-grow-1">${escapeHtml(task.task)}</span>
                <button onclick="deleteTask(${task.id})" class="btn btn-sm btn-danger ms-2" title="Delete this task">
                     Delete
                </button>
            </div>
        `;
        taskList.appendChild(taskEl);
    });
}

// Create a new task
async function createTask() {
    const input = document.getElementById('input');
    if (!input) return;
    
    const taskText = input.value.trim();
    
    // Validation
    if (!taskText) {
        showMessage(' Please enter a task', 'warning');
        input.focus();
        return;
    }
    
    if (taskText.length > 200) {
        showMessage('Task is too long (max 200 characters)', 'warning');
        return;
    }
    
    // Disable button during request
    const addBtn = document.getElementById('addBtn');
    if (addBtn) addBtn.disabled = true;
    
    try {
        const response = await fetch('http://localhost:2000/tasks', {
            method: 'POST',
            body: JSON.stringify({ task: taskText }),
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to create task');
        }
        
        showMessage(' Task added successfully!', 'success');
        input.value = '';
        input.focus();
        loadTasks(); // Refresh task list
    } catch (err) {
        console.error('Error creating task:', err);
        showMessage(` Error: ${err.message}`, 'danger');
    } finally {
        if (addBtn) addBtn.disabled = false;
    }
}

// Delete a task
async function deleteTask(id) {
    if (!confirm('Are you sure you want to delete this task?')) return;
    
    try {
        const response = await fetch(`http://localhost:2000/tasks/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (!response.ok) throw new Error('Failed to delete task');
        
        showMessage(' Task deleted!', 'success');
        loadTasks(); // Refresh task list
    } catch (err) {
        console.error('Error deleting task:', err);
        showMessage(` Error deleting task: ${err.message}`, 'danger');
    }
}

// Show temporary message to user
function showMessage(text, type) {
    const messageEl = document.getElementById('message');
    if (!messageEl) return;
    
    messageEl.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${escapeHtml(text)}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
        if (messageEl.firstChild) {
            messageEl.innerHTML = '';
        }
    }, 5000);
}

// Prevent XSS attacks by escaping HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return String(text).replace(/[&<>"']/g, m => map[m]);
}