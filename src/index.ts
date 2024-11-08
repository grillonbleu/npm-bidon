function bidon(name: string|undefined): string {
    return `Hello, ${name || 'world'}.`;
}

function bidonFra(name: string|undefined): string {
    return `Allô, ${name || 'monde'}!!!`;
}

export {
    bidon,
    bidonFra
}
