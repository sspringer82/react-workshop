import { ReactElement } from 'react';

import C from './C';

const A = (props: any): ReactElement => {
  return (
    <div>
      This is A!
      <div>
        <C />
      </div>
    </div>
  );
};

export default A;
