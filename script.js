function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const chatWindow = document.getElementById('chat-window');
    
    if (messageInput.value.trim() !== "") {
        // Создание элемента сообщения
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerText = messageInput.value;
        
        // Добавление сообщения в чат
        chatWindow.appendChild(messageElement);
        
        // Прокрутка окна чата вниз
        chatWindow.scrollTop = chatWindow.scrollHeight;
        
        // Очистка поля ввода
        messageInput.value = "";
    }
}