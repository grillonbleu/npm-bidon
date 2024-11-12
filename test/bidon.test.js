import {bidon, bidonFra, bidonPt} from "@";
import {test, expect} from "vitest";

test('check bidon', () => {
    const foo = "foo";
    expect(bidon(foo)).toContain(foo);
});