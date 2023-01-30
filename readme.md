## WIP iOS only

- View to be appeared in app switcher when app goes to background on iOS.

## Usage

- Checkout example/ folder

```jsx
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

const Passcode = ({ hide }) => {
  return (
    <Modal visible>
      <View style={styles.container}>
        <Button title="Tap to unlock" onPress={hide} />
      </View>
    </Modal>
  );
};
```
