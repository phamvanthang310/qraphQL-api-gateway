import { ProductServiceApplication } from '../..';
import { Client, createRestAppClient, givenHttpServerConfig, } from '@loopback/testlab';

export async function setupApplication(): Promise<AppWithClient> {
  const app = new ProductServiceApplication({
    rest: givenHttpServerConfig(),
  });

  await app.boot();
  await app.start();

  const client = createRestAppClient(app);

  return {app, client};
}

export interface AppWithClient {
  app: ProductServiceApplication;
  client: Client;
}
