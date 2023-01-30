import * as React from 'react';

import { ReactNativeLockscreenViewProps } from './ReactNativeLockscreenView.types';

export default function ReactNativeLockscreenView(props: ReactNativeLockscreenViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
