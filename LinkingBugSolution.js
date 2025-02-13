This solution uses an event listener to listen for URL changes after the app loads, providing a more robust way to handle deep links than relying solely on `getInitialURL()`:

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrlChange = (event) => {
      setInitialUrl(event.url);
    };

    Linking.addEventListener('url', handleUrlChange);
    return () => {
      Linking.removeEventListener('url', handleUrlChange);
    };
  }, []);

  useEffect(() => {
    (async () => {
      let url = await Linking.getInitialURL();
      if(url) {
        setInitialUrl(url);
      }
    })();
  }, []);

  return (
    <View>
      {initialUrl && (
        <Text>Initial URL: {initialUrl}</Text>
      )}
    </View>
  );
}
export default App;
```