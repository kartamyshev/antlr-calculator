// Generated from src/grammar/CQL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CQLParser.
function CQLListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CQLListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CQLListener.prototype.constructor = CQLListener;

// Enter a parse tree produced by CQLParser#prog.
CQLListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by CQLParser#prog.
CQLListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by CQLParser#printExpr.
CQLListener.prototype.enterPrintExpr = function(ctx) {
};

// Exit a parse tree produced by CQLParser#printExpr.
CQLListener.prototype.exitPrintExpr = function(ctx) {
};


// Enter a parse tree produced by CQLParser#assign.
CQLListener.prototype.enterAssign = function(ctx) {
};

// Exit a parse tree produced by CQLParser#assign.
CQLListener.prototype.exitAssign = function(ctx) {
};


// Enter a parse tree produced by CQLParser#blank.
CQLListener.prototype.enterBlank = function(ctx) {
};

// Exit a parse tree produced by CQLParser#blank.
CQLListener.prototype.exitBlank = function(ctx) {
};


// Enter a parse tree produced by CQLParser#parens.
CQLListener.prototype.enterParens = function(ctx) {
};

// Exit a parse tree produced by CQLParser#parens.
CQLListener.prototype.exitParens = function(ctx) {
};


// Enter a parse tree produced by CQLParser#MulDiv.
CQLListener.prototype.enterMulDiv = function(ctx) {
};

// Exit a parse tree produced by CQLParser#MulDiv.
CQLListener.prototype.exitMulDiv = function(ctx) {
};


// Enter a parse tree produced by CQLParser#AddSub.
CQLListener.prototype.enterAddSub = function(ctx) {
};

// Exit a parse tree produced by CQLParser#AddSub.
CQLListener.prototype.exitAddSub = function(ctx) {
};


// Enter a parse tree produced by CQLParser#id.
CQLListener.prototype.enterId = function(ctx) {
};

// Exit a parse tree produced by CQLParser#id.
CQLListener.prototype.exitId = function(ctx) {
};


// Enter a parse tree produced by CQLParser#int.
CQLListener.prototype.enterInt = function(ctx) {
};

// Exit a parse tree produced by CQLParser#int.
CQLListener.prototype.exitInt = function(ctx) {
};



exports.CQLListener = CQLListener;