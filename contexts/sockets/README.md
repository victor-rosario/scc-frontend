# 📁 contexts/sockets

This folder contains contexts that are related to specific sockets used in your application.

## Usage

To use a socket-related context within your components, you can import it from the corresponding file in this folder. For example:

```javascript
import { ChatSocketContext } from '../contexts/sockets/chatSocket';

// Use the ChatSocketContext within your components
<ChatSocketContext.Provider value={chatSocket}>
  {/* Your component's JSX */}
</ChatSocketContext.Provider>
