describe('Helpers test (with setup and teardown)', () => {

  beforeEach(() => {

  })
  

  it('read the individual keys in the allPayments object and return the key that was input as an arg of sumPaymentTotal()', () => {
    allPayments = {payment1: {billAmt: '50', tipAmt: '15', tipPercent: 30}}
    expect(sumPaymentTotal('tipAmt')).toEqual(15);
    expect(sumPaymentTotal('billAmt')).toEqual(50);
    expect(sumPaymentTotal('tipPercent')).toEqual(30);
  })
  
  it('should return the percentage of the total bill that is tip from the combined bill and tip dollar ammount', () => {
    expect(calculateTipPercent(50, 15)).toEqual(30);
  })

  it('should add a td to a table row with the specified value as the content', () => {
    let newTr = document.createElement('tr')
    appendTd(newTr, 10)
    expect(newTr.firstElementChild.innerHTML).toEqual('10');


  })

  
  afterEach(() => {
  
  allPayments = {};
  
  })
  
  })