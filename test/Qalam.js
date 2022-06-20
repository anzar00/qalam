const Qalam = artifacts.require('./Qalam.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Qalam', (accounts) => {
  let Qalam

  before(async () => {
    Qalam = await Qalam.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await Qalam.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await Qalam.name()
      assert.equal(name, 'Qalam ~ An App That Makes You Write')
    })
  })
})