
import {fakerFR_CA} from "@faker-js/faker";

/**
 * Créer des personnes. Comme une maman!
 */
function createPerson() {
    return fakerFR_CA.person.fullName();
}

export {
    createPerson
}

