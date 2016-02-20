import coreAuthenticate from './core-authenticate';

export default (context, redirect) => {
  const {queryParams} = context;
  const {edit} = queryParams;
  if (edit && edit === 'true') {
    if (!coreAuthenticate()) {
      redirect('/');
    }
  }
};
