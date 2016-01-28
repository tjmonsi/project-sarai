import {NavList} from '/client/modules/ui-components';
import {useDeps} from '/client/libs/mantra';

const depsToAppNav = (context, action) => ({
  position: 'app-bar',
  navs: action.core.getCoreMenu(),
  context: () => context
});

export default useDeps(depsToAppNav)(NavList);
