import { createContext, useContext, useState } from "react";

type AnyFunction = (args: any) => any;

type EventADT = {
  eventManager: EventManager;
};

export class EventManager {
  listeners: Map<string, AnyFunction>;

  constructor() {
    this.listeners = new Map();
  }

  addListener(name: string, listener: AnyFunction) {
    this.listeners.set(name, listener);
  }

  removeListener(name: string) {
    this.listeners.delete(name);
  }

  emit(name: string, data: any) {
    if (this.listeners.has(name)) {
      (this.listeners.get(name) as AnyFunction)(data);
    }
  }
}

export const EventContext = createContext<EventADT>({} as EventADT);

export const useEventManager = () => useContext(EventContext);

export const EventProvider = ({ children }: Children) => {
  const [eventManager] = useState(() => new EventManager());

  return (
    <EventContext.Provider value={{ eventManager }}>
      {children}
    </EventContext.Provider>
  );
};
