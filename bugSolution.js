To address the issue of AsyncStorage failing in background tasks or when the app is closed, consider using a more robust solution such as MMKV, SQLite, or a cloud-based storage solution like Firebase.

MMKV is a high-performance embedded key-value storage library that's suitable for Expo.  Here's an example using MMKV:

```javascript
import * as MMKVStorage from 'react-native-mmkv-storage';

const mmkv = new MMKVStorage.Loader().initialize();

// Store data
await mmkv.setStringAsync('myKey', 'myValue');

// Retrieve data
const value = await mmkv.getStringAsync('myKey');
console.log(value); // Output: myValue
```

Remember to install MMKV:
```bash
expo install react-native-mmkv-storage
```

For larger data or more complex data structures, SQLite or a cloud-based solution offers even better reliability and scalability.