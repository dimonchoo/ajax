;(function ( root, factory ) {
  'use strict';
  /* istanbul ignore next */
  if ( typeof define === 'function' && define.amd ) {
    define( function() {
      require([ 'Ajax' ]);
    });
  }
  else if ( typeof exports === 'object' ) {
    exports = module.exports = factory( require( 'chai' ).should(), require( '../src/ajax' ) );
  }
  else {
    root.Ajax = factory( root.chai.should(), root.Ajax );
  }
})(this, function( should, Ajax ) {
  'use strict';

  describe( 'Test module interface', function() {
    it( 'Should have `get` method', function() {
      var ajax = new Ajax();
      ajax.should.have.property( 'get' );
    });

    it( 'Should have `post` method', function() {
      var ajax = new Ajax();
      ajax.should.have.property( 'post' );
    });

    it( 'Should have `put` method', function() {
      var ajax = new Ajax();
      ajax.should.have.property( 'put' );
    });

    it( 'Should have `delete` method', function() {
      var ajax = new Ajax();
      ajax.should.have.property( 'delete' );
    });

    it( 'Should `get` method returns `done` method', function() {
      var ajax = new Ajax();
      var getRequest = ajax.get();
      getRequest.should.have.property( 'done' );
    });

    it( 'Should `get` method returns `error` method', function() {
      var ajax = new Ajax();
      var getRequest = ajax.get();
      getRequest.should.have.property( 'error' );
    });

    it( 'Should `post` method returns `done` method', function() {
      var ajax = new Ajax();
      var postRequest = ajax.post();
      postRequest.should.have.property( 'done' );
    });

    it( 'Should `post` method returns `error` method', function() {
      var ajax = new Ajax();
      var postRequest = ajax.post();
      postRequest.should.have.property( 'error' );
    });

    it( 'Should `put` method returns `done` method', function() {
      var ajax = new Ajax();
      var putRequest = ajax.put();
      putRequest.should.have.property( 'done' );
    });

    it( 'Should `put` method returns `error` method', function() {
      var ajax = new Ajax();
      var putRequest = ajax.put();
      putRequest.should.have.property( 'error' );
    });

    it( 'Should `delete` method returns `done` method', function() {
      var ajax = new Ajax();
      var deleteRequest = ajax.delete();
      deleteRequest.should.have.property( 'done' );
    });

    it( 'Should `delete` method returns `error` method', function() {
      var ajax = new Ajax();
      var deleteRequest = ajax.delete();
      deleteRequest.should.have.property( 'error' );
    });
  });
});