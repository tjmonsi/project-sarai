import MantraExampleComponent from './../components/mantra-example.jsx';
import {useDeps} from 'mantra-core';

const dependencyInjection = (context, actions) => ({
  list: actions.core.getCoreMenu(),
  context: () => context
});

export default useDeps(dependencyInjection)(MantraExampleComponent);

// const x = useDeps(dependencyInjection)
// export default x(MantraExampleComponent)

// function dependencyInjection (context, actions) {
//   return {
//     list: actions.core.getCoreMenu(),
//     context: function() {
//       return context;
//     }
//   }
// }
