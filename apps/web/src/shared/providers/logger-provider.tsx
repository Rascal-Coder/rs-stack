import { createContext, useContext } from "react";

import { log } from "@rs-stack/logger/client";

type LoggerContextValue = {
  logger: typeof log;
};

const LoggerContext = createContext<LoggerContextValue | null>(null);

export function LoggerProvider({ children }: { children: React.ReactNode }) {
  return <LoggerContext.Provider value={{ logger: log }}>{children}</LoggerContext.Provider>;
}

export function useLogger(): typeof log {
  const context = useContext(LoggerContext);
  if (!context) {
    log.warn("logger-provider", "Called outside of LoggerProvider");
    return log;
  }
  return context.logger;
}
