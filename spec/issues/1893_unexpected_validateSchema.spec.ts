import _Ajv from "../ajv2020"
import * as assert from "assert"

describe("Error thrown during compilation with validateSchema: false #1893", () => {
  it('should not throw an error for empty-enums when validateSchema', () => {
    const ajv = new _Ajv({ validateSchema: false })

    const schema = {
      enum: [],
    }

    const compile = () => ajv.compile(schema)

    assert.doesNotThrow(compile)
  })
})
