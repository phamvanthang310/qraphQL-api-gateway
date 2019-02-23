import { ConsumerServiceApplication } from '../..';
import { Client, createRestAppClient, givenHttpServerConfig, } from '@loopback/testlab';

export async function setupApplication(): Promise<AppWithClient> {
  const app = new ConsumerServiceApplication({
    rest: givenHttpServerConfig(),
  });

  await app.boot();
  await app.start();

  const client = createRestAppClient(app);

  return {app, client};
}

export interface AppWithClient {
  app: ConsumerServiceApplication;
  client: Client;
}
