import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativeLockscreenViewProps } from './ReactNativeLockscreenView.types';

const NativeView: React.ComponentType<ReactNativeLockscreenViewProps> =
  requireNativeViewManager('ReactNativeLockscreenView');

export default function ReactNativeLockscreenView(props: ReactNativeLockscreenViewProps) {
  return <NativeView {...props} />;
}
