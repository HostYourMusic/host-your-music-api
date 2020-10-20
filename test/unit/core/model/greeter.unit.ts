import assert from 'assert';
import { expect } from 'chai';
import { Greeter } from '../../../../src/core/model/greeter';



describe('Greeter test', function () {
  it('Greeter test', function () {
    const result = Greeter('World!')

    expect(result).to.equal('Hello World!');
  });
});
