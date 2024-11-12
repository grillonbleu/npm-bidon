import { faker } from "@faker-js/faker";
/**
 * Crée des pages. Bing bang, fling flang.
 */
function createRandomPage() {
    return faker.lorem.paragraphs({ min: 5, max: 10 });
}
export { createRandomPage };
