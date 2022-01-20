describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server to allServers on submitServerInfo()', () => {
    serverNameInput.value = '';
    submitServerInfo(); 

    expect(Object.keys(allServers).length).toEqual(0)
  })

  it('should add new element to the DOM', () => {
    submitServerInfo(); 
    //this will check the first <tr> of the <tbody> is defined(or basically if it exists). 
    //if it exists then the an element was added to the DOM. 
    expect(serverTbody.childElementCount).toEqual(1);
    
  })

  it('should update the #servertable on updateServerTable()', () => {
    submitServerInfo();
    updateServerTable(); 

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(2);
    expect(curTdList[0].innerHTML).toEqual('Alice');
    expect(curTdList[1].innerHTML).toEqual('$0.00')

  })

  afterEach(function() {
  serverNameInput.value = '';
  allServers = {}

  if(serverTbody.childElementCount > 0) {
    serverTbody.lastElementChild.remove();
  }
  });
});
