export type Busy = 'idle' | 'prompt' | 'grammar'

declare module 'claude-code' {
  interface PluginState {
    'prompt-master': { busy: Busy; lastError: string | null }
  }
}
