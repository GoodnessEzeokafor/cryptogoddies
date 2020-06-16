
require('chai')
    .use(require('chai-as-promised'))
    .should()



const AccessControl = artifacts.require("AccessControl")


contract("ELESARR CONTRACT TOKEN", ([dep, user, user2, user3]) => {
    before(async() => {
        this.contract = await AccessControl.deployed()
    })


    describe('ELESARRTOKEN TEST SUITE 1', () => {
        it("CHECKS IF DEPLOYED SUCCESSFULLY",async() => {
            const address = this.contract.address
            assert.notEqual(address, null)
            assert.notEqual(address, 0x0)
            assert.notEqual(address, undefined)
            assert.notEqual(address, "")
        })

        it("CALLS ACCESSCONTROL FUNCTION", async() => {
            await this.contract.accessControl({from:dep})
            const ceoAddress = await this.contract.ceoAddress();
            const cooAddress = await this.contract.cooAddress()
            // assert.equal(totalSupply.toString(), 2000000)
            assert.equal(ceoAddress, dep)
            assert.equal(cooAddress, dep)
            
        })

        it("CHECKS IF SETCEO FUNCTION REJECT FUNCTIONALITY IS WORKING", async() => {
            await this.contract.setCEO(user,{from:user3}).should.be.rejected
            await this.contract.setCEO(user2,{from:user3}).should.be.rejected
            
            // await this.contract.setCEO(user,{from:dep})
            // await this.contract.setCOO(user2, {from:dep})
        })
        it("CHECKS IF SET COO FUNCTION IS WORKING", async() => {
            await this.contract.setCEO(user,{from:dep})
            await this.contract.setCEO(user2,{from:dep}).should.be.rejected
            await this.contract.setCOO(user2, {from:user})
            const ceoAddress = await this.contract.ceoAddress();
            const cooAddress = await this.contract.cooAddress()
            assert.equal(ceoAddress, user)
            assert.equal(cooAddress, user2)
            
        })

        // it("CHECKS DEPLOYER TOKEN BALANCE", async() => {
        //     const balanceOfOwner = await this.contract.balanceOf(dep)
        //     assert.equal(balanceOfOwner.toString(), 2000000)
        // })
        // it("CHECKS THE TOKEN NAME", async() => {
        //     const name= await this.contract.name()
        //     assert.equal(name, "GoodyToken")
        // })
        
        // it("CHECKS THE SYMBOL NAME", async() =>{
        //     const symbol = await this.contract.symbol()
        //     assert.equal(symbol, "GT")
        // })
        
        // it("CHECKS THE TOKEN STANDARD", async() => {
        //     const standard = await this.contract.standard()
        //     assert.equal(standard, "Goody Token v1.0")
        // })

    });
    
})

// require('chai')
//     .use(require('chai-as-promised'))
//     .should()

// const Elesarr = artifacts.require("./Elesarr.sol")

// contract("ELESARR CONTRACT TOKEN", ([dep, user, user2, user3]) => {
//     before(async() => {
//         this.contract = await Elesarr.deployed()
//     })

//     describe('ELESARRTOKEN TEST SUITE 1', () => {
//         it("CHECKS IF DEPLOYED SUCCESSFULLY",async() => {
//             const address = this.contract.address
//             assert.notEqual(address, null)
//             assert.notEqual(address, 0x0)
//             assert.notEqual(address, undefined)
//             assert.notEqual(address, "")
//         })
//         it("CHECKS IF TOTALSUPPLY IS 1000000", async() => {
//             const totalSupply = await this.contract.totalSupply()
//             assert.equal(totalSupply.toString(), 2000000)
//         })
//         it("CHECKS DEPLOYER TOKEN BALANCE", async() => {
//             const balanceOfOwner = await this.contract.balanceOf(dep)
//             assert.equal(balanceOfOwner.toString(), 2000000)
//         })
//         it("CHECKS THE TOKEN NAME", async() => {
//             const name= await this.contract.name()
//             assert.equal(name, "GoodyToken")
//         })
//         it("CHECKS THE SYMBOL NAME", async() =>{
//             const symbol = await this.contract.symbol()
//             assert.equal(symbol, "GT")
//         })
//         it("CHECKS THE TOKEN STANDARD", async() => {
//             const standard = await this.contract.standard()
//             assert.equal(standard, "Goody Token v1.0")
//         })
//     });
//     describe('CHECKS IF THE TRANSFER FUNTIONALITY IS WORKING', async() => {
//         it("CHECK THE TRANSFER FUNCTIONALITY", async() => {
//             await this.contract.transfer(user, 3000000, {from:dep}).should.be.rejected
//             await this.contract.transfer(user, 1000000, {from:dep})

//             const balanceOfUser = await this.contract.balanceOf(user)
//             const balanceOfDep = await this.contract.balanceOf(dep)
//             assert.equal(balanceOfUser.toString(),1000000)
//             assert.equal(balanceOfDep.toString(),1000000)
//         })
//         it("approves for delegated transfer", async() => {
            
//         })
//     })
    
// })