export function getAllPrivateAttributes<T extends { new(...args: any[]): {} }>(constructor: T) {
    const privateAttributes = Object.getOwnPropertyNames(constructor.prototype)
        .filter((prop) => prop.startsWith(""));

    class PrivateAttributesClass extends constructor {
        get allPrivateAttributes() {
            return privateAttributes;
        }
    }

    return PrivateAttributesClass;
}