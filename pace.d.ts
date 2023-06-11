declare module 'pace-js' {
  const pace: Pace;
  export default pace;
}

interface Pace {
  start(options?: PaceOptions): void;
  restart(): void;
  stop(): void;
  finish(): void;
  track(fn: () => void): void;
  ignore(fn: () => void): void;
  catch(fn: () => void): void;
  once(event: string, callback: () => void): void;
}

interface PaceOptions {
  // Define your desired options here
}
