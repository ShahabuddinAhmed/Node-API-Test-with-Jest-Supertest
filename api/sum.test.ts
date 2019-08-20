import { sum } from './sum';

describe("testing sum function", () => {
  it("it should return 6 for 3 + 3", async (done) => {
    await expect(sum(3,3)).toBe(6);
    done();
  })

  it("it should should throw error for not number parameter", async () => {
    await expect( () => sum(12, "12") ).toThrowError("parameter must be number");
  })
})