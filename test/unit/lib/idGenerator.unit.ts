import { expect } from 'chai';
import { isValidUUIDV4 } from 'is-valid-uuid-v4';
import * as idGenerator  from '../../../src/lib/idGenerator';

describe('idGenerator', function () {
  it('generateId', () => {
	const uuid = idGenerator.generateId();
	expect(isValidUUIDV4(uuid)).to.be.true;
  });
});
