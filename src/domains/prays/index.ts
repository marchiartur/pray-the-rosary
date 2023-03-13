export const PRAYS_NAMESPACE = 'prays'

export class Pray {
    private name: string;
    private pray: string;

    constructor(name: string, pray: string) {
        this.name = name;
        this.pray = pray;
    }

    getAttributes() {
      return {
        name: this.name,
        pray: this.pray
      }
    }
}

export interface PraysNamespaceAttributes {
  [key: string]: {
    name: string;
    pray: string; 
  }
}