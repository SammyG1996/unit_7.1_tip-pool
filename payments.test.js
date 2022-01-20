describe('Payments test (with setup and teardown)', () => {

beforeEach(() => {
  billAmtInput.value = '50';
  tipAmtInput.value = '15';
})

it('should append to table to table', () => {
  submitPaymentInfo();
  expect(paymentTbody.childElementCount).toEqual(1);
})

it('should add nothing if the input is left empty', () => {
  billAmtInput.value = '';
  tipAmtInput.value = '';

  submitPaymentInfo();
  expect(paymentTbody.childElementCount).toEqual(0);
})


it('should append input values and calculation to table with appendPaymentTable()', () => {
  let curPayment = createCurPayment();
  appendPaymentTable(curPayment);

  let curTableBody = document.querySelectorAll('#paymentTable tbody tr td');

  expect(curTableBody.length).toEqual(3);
  expect(curTableBody[0].innerHTML).toEqual('$50')
  expect(curTableBody[1].innerHTML).toEqual('$15')
  expect(curTableBody[2].innerHTML).toEqual('30%')
})

it('should return if there is no input in the forms', () => {
  billAmtInput.value = '';
  tipAmtInput.value = '';
  
  expect(createCurPayment()).toBeUndefined()

})

it('should return numebrs that will make up the values on the table in an object', () => {

  expect(createCurPayment()).toEqual({
    billAmt: "50",
    tipAmt: "15",
    tipPercent: calculateTipPercent("50", "15"),
  })

})

it('should add a new row with 3 td\'s to the #summaryTable body', () => {
  expect(summaryTds.length).toEqual(3);
})




afterEach(() => {
billAmtInput.value = '';
tipAmtInput.value = '';

allPayments = {};

if(paymentTbody.childElementCount > 0) {
  paymentTbody.lastElementChild.remove();
}
})

})