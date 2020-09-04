import app from './app';
import 'reflect-metadata';
import './database';

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('🏃 Running Server');
});
