import { NativeModule, requireNativeModule } from 'expo';

import { TestmoduleModuleEvents } from './Testmodule.types';

declare class TestmoduleModule extends NativeModule<TestmoduleModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<TestmoduleModule>('Testmodule');
