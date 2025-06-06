import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './Testmodule.types';

type TestmoduleModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class TestmoduleModule extends NativeModule<TestmoduleModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(TestmoduleModule, 'TestmoduleModule');
