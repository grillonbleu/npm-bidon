/**
 * In english please
 * @param name The name.
 */
function bidon(name: string|undefined): string {
    return `Hello, ${name || 'world'}.`;
}

export default bidon;