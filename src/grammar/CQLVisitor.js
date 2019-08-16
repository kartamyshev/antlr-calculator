// Generated from src/grammar/CQL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by CQLParser.

function CQLVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

CQLVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
CQLVisitor.prototype.constructor = CQLVisitor;

// Visit a parse tree produced by CQLParser#prog.
CQLVisitor.prototype.visitProg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CQLParser#printExpr.
CQLVisitor.prototype.visitPrintExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CQLParser#assign.
CQLVisitor.prototype.visitAssign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CQLParser#blank.
CQLVisitor.prototype.visitBlank = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CQLParser#parens.
CQLVisitor.prototype.visitParens = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CQLParser#MulDiv.
CQLVisitor.prototype.visitMulDiv = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CQLParser#AddSub.
CQLVisitor.prototype.visitAddSub = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CQLParser#id.
CQLVisitor.prototype.visitId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CQLParser#int.
CQLVisitor.prototype.visitInt = function(ctx) {
  return this.visitChildren(ctx);
};



exports.CQLVisitor = CQLVisitor;