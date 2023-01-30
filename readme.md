## WIP

Control view that should be shown in app switcher when app goes to background. Right now, only works on iOS.

https://user-images.githubusercontent.com/23293248/215400813-25c4986c-2b78-46c4-b8b3-e9fc7b9f49fb.mov

## Installation

```
yarn add react-native-lockscreen-view
// or
npm i react-native-lockscreen-view
```

## Usage

- Checkout example/ folder


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
