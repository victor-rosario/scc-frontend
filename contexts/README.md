# 📁 contexts

This folder contains React contexts used within your application.

Feel free to add, modify, or organize the contexts within this folder to manage your application's state and provide global data and functionality to your components.

## Usage

To use a context within your components, you can import it from the corresponding file in this folder. For example:

```javascript
import { UserContext } from '../contexts/user';

// Use the UserContext within your components
<UserContext.Provider value={userData}>
  {/* Your component's JSX */}
</UserContext.Provider>
