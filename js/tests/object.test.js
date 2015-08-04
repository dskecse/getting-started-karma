describe('myFunction', function() {
  var myfunc = NS.myFunction;

  beforeEach(function() {
    spyOn(myfunc, 'init').and.callThrough();
  });

  afterEach(function() {
    myfunc.reset();
  });

  it('is able to initialize', function() {
    expect(myfunc.init).toBeDefined();
    myfunc.init();
    expect(myfunc.init).toHaveBeenCalled();
  });

  it('populates stuff during initialization', function() {
    myfunc.init();
    expect(myfunc.stuff.length).toEqual(1);
    expect(myfunc.stuff[0]).toEqual('Testing');
  });

  it('is able to append strings', function() {
    expect(myfunc.append).toBeDefined();
  });

  it('appends two strings', function() {
    expect(myfunc.append('hello', 'world')).toEqual('hello world');
  });
});
