describe("sum()函數的測試", function () {
    context("沒有參數的", function () {
        it("空的傳回0", () => {
            expect(sum()).to.equal(0)
        })
    })
    context("正確的數值型態", function () {
        it("傳回正確的總和", function () {
            expect(sum(1, 2, 3, 4, 5)).to.equal(15)
        })
        it("單一值應該正確傳回", function () {
            expect(sum(5)).to.equal(5)
        })
    })
    context("如果傳入數值外的參數", function () {
        it("應該會看到例外", function () {
            expect(function () {
                sum(null, 1, 2, "3", [4], 5)
            }).to.throw(TypeError, "sum() expects only numbers")
        })
    })
})