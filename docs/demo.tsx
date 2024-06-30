import Render from '@aipmorg/chat-plugin-drawing';

import { data } from './data';

export default () => {
  return (
    <div style={{ maxWidth: 960 }}>
      <Render content={data} name={'search_engine'} />
    </div>
  );
};
