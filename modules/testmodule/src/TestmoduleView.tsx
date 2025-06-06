import { requireNativeView } from 'expo';
import * as React from 'react';

import { TestmoduleViewProps } from './Testmodule.types';

const NativeView: React.ComponentType<TestmoduleViewProps> =
  requireNativeView('Testmodule');

export default function TestmoduleView(props: TestmoduleViewProps) {
  return <NativeView {...props} />;
}
