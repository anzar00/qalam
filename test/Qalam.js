const Qalam = artifacts.require('./Qalam.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Qalam', ([deployer, author, tipper]) => {
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

describe('posts', async () => {
    let result, postCount

    before(async () => {
      result = await Qalam.createPost('This is my first post', { from: author })
      postCount = await Qalam.postCount()
    })

    it('creates posts', async () => {
      // SUCESS
      assert.equal(postCount, 1)
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), postCount.toNumber(), 'id is correct')
      assert.equal(event.content, 'This is my first post', 'content is correct')
      assert.equal(event.tipAmount, '0', 'tip amount is correct')
      assert.equal(event.author, author, 'author is correct')

      // FAILURE: Post must have content
      await Qalam.createPost('', { from: author }).should.be.rejected;
    })

})