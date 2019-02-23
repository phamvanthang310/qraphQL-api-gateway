const sharedConfig = {
  instances: 1,
  autorestart: true,
  watch: false,
  max_memory_restart: '1G',
  env: {
    NODE_ENV: 'development'
  },
  env_production: {
    NODE_ENV: 'production'
  }
};

const apps = [
  {
    name: 'consumer-service',
    cwd: './consumer-service',
    script: './index.js',
    port: 8080,
    ...sharedConfig
  }, {
    name: 'order-service',
    cwd: './order-service',
    script: './index.js',
    port: 8081,
    ...sharedConfig
  }, {
    name: 'product-service',
    cwd: './product-service',
    script: './index.js',
    port: 8082,
    instances: 1,
    ...sharedConfig
  }
];

const deploy = {
  production: {}
};

module.exports = {apps, deploy};
