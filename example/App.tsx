import { useState } from "react";
import { StyleSheet, Text, View, Modal, Button } from "react-native";

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

const Passcode = ({ hide }: any) => {
  return (
    <Modal visible>
      <View style={styles.container}>
        <Button title="Tap to unlock" onPress={hide} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
