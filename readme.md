## WIP

Control view that should be shown in app switcher when app goes to background. Only works on iOS for now.

https://user-images.githubusercontent.com/23293248/215400813-25c4986c-2b78-46c4-b8b3-e9fc7b9f49fb.mov

## Installation

```
yarn add react-native-lockscreen-view
// or
npm i react-native-lockscreen-view
```

## Usage

- Checkout example/ directory

```jsx
import { ReactNativeLockscreenView } from "react-native-lockscreen-view";

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Text>hello world</Text>
      <ReactNativeLockscreenView onReset={() => setVisible(true)}>
        {visible ? <Passcode hide={() => setVisible(false)} /> : null}
      </ReactNativeLockscreenView>
    </View>
  );
}

const Passcode = (props) => {
  const { hide } = props;
  return (
    <Modal visible>
      <View style={styles.container}>
        <Button title="Tap to unlock" onPress={hide} />
      </View>
    </Modal>
  );
};
```

## Expo support

- ✅ You can use this library with [Development Builds](https://docs.expo.dev/development/introduction/). No config plugin is required.

  - After installing the library, run [expo prebuild](https://docs.expo.dev/workflow/prebuild/) command to rebuild the native app.

- ❌ This library can't be used in the "Expo Go" app because it requires [custom native code](https://docs.expo.dev/workflow/customizing/).
