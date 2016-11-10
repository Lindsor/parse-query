'use strict';

const parser = require("../index");
const mocha = require("mocha");

const assert = require("chai").assert;

describe("query-parser", function() {

  it("should return empty object if nothing passed in", function() {
    assert.deepEqual(parser(), {});
  });

  it("should return empty object if null passed in", function() {
    assert.deepEqual(parser(null), {});
  });

  it("should return empty object if boolean passed in", function() {
    assert.deepEqual(parser(null), {});
  });

  it("should return empty object if number passed in", function() {
    assert.deepEqual(parser(300), {});
  });

  it("should return empty object if NaN passed in", function() {
    assert.deepEqual(parser(NaN), {});
  });

  it("should parse hashes correctly", function() {
    assert.deepEqual(parser("#hello=goodbye"), {
      hello: "goodbye"
    });
  });

  it("should parse querystrings correctly", function() {
    assert.deepEqual(parser("hello=goodbye"), {
      hello: "goodbye"
    });
  });

  it("should handle numbers", function() {
    assert.deepEqual(parser("hello=3"), {
      hello: "3"
    });
  });

  it("should handle trailing equal", function() {
    assert.deepEqual(parser("hello=&foo=bar"), {
      hello: "",
      foo: "bar"
    });
  });

  it("should handle no equal sign", function() {
    assert.deepEqual(parser("hello&foo=bar"), {
      hello: "",
      foo: "bar"
    });
  });

  it("should same key for multiple values", function() {
    assert.deepEqual(parser("hello&foo=bar&foo=baz"), {
      hello: "",
      foo: ["bar", "baz"]
    });
  });

  it("should same key for multiple values", function() {
    assert.deepEqual(parser("hello&foo=bar&foo=baz&hello=what"), {
      hello: ["", "what"],
      foo: ["bar", "baz"]
    });
  });

});