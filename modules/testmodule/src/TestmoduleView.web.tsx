import * as React from 'react';

import { TestmoduleViewProps } from './Testmodule.types';

export default function TestmoduleView(props: TestmoduleViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
