import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'bestride.professional',
  appName: 'BestRide Professional',
  webDir: 'www',
  bundledWebRuntime: false,

  server: {
    url: "http://18.217.130.28",
    cleartext: true
  }
};

export default config;
