// Generated from src/grammar/CQL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\r=\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0006\u0005!\n\u0005\r\u0005\u000e\u0005\"\u0003\u0006",
    "\u0006\u0006&\n\u0006\r\u0006\u000e\u0006\'\u0003\u0007\u0005\u0007",
    "+\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0006\b0\n\b\r\b\u000e\b1",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0002\u0002\r\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0003",
    "\u0002\u0005\u0004\u0002C\\c|\u0003\u00022;\u0004\u0002\u000b\u000b",
    "\"\"\u0002@\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002",
    "\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0003\u0019\u0003\u0002",
    "\u0002\u0002\u0005\u001b\u0003\u0002\u0002\u0002\u0007\u001d\u0003\u0002",
    "\u0002\u0002\t \u0003\u0002\u0002\u0002\u000b%\u0003\u0002\u0002\u0002",
    "\r*\u0003\u0002\u0002\u0002\u000f/\u0003\u0002\u0002\u0002\u00115\u0003",
    "\u0002\u0002\u0002\u00137\u0003\u0002\u0002\u0002\u00159\u0003\u0002",
    "\u0002\u0002\u0017;\u0003\u0002\u0002\u0002\u0019\u001a\u0007?\u0002",
    "\u0002\u001a\u0004\u0003\u0002\u0002\u0002\u001b\u001c\u0007*\u0002",
    "\u0002\u001c\u0006\u0003\u0002\u0002\u0002\u001d\u001e\u0007+\u0002",
    "\u0002\u001e\b\u0003\u0002\u0002\u0002\u001f!\t\u0002\u0002\u0002 \u001f",
    "\u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002",
    "\u0002\"#\u0003\u0002\u0002\u0002#\n\u0003\u0002\u0002\u0002$&\t\u0003",
    "\u0002\u0002%$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\'",
    "%\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002(\f\u0003\u0002",
    "\u0002\u0002)+\u0007\u000f\u0002\u0002*)\u0003\u0002\u0002\u0002*+\u0003",
    "\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,-\u0007\f\u0002\u0002-",
    "\u000e\u0003\u0002\u0002\u0002.0\t\u0004\u0002\u0002/.\u0003\u0002\u0002",
    "\u000201\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002",
    "\u0002\u000223\u0003\u0002\u0002\u000234\b\b\u0002\u00024\u0010\u0003",
    "\u0002\u0002\u000256\u0007,\u0002\u00026\u0012\u0003\u0002\u0002\u0002",
    "78\u00071\u0002\u00028\u0014\u0003\u0002\u0002\u00029:\u0007-\u0002",
    "\u0002:\u0016\u0003\u0002\u0002\u0002;<\u0007/\u0002\u0002<\u0018\u0003",
    "\u0002\u0002\u0002\u0007\u0002\"\'*1\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function CQLLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

CQLLexer.prototype = Object.create(antlr4.Lexer.prototype);
CQLLexer.prototype.constructor = CQLLexer;

Object.defineProperty(CQLLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

CQLLexer.EOF = antlr4.Token.EOF;
CQLLexer.T__0 = 1;
CQLLexer.T__1 = 2;
CQLLexer.T__2 = 3;
CQLLexer.ID = 4;
CQLLexer.INT = 5;
CQLLexer.NEWLINE = 6;
CQLLexer.WS = 7;
CQLLexer.MUL = 8;
CQLLexer.DIV = 9;
CQLLexer.ADD = 10;
CQLLexer.SUB = 11;

CQLLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CQLLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CQLLexer.prototype.literalNames = [ null, "'='", "'('", "')'", null, null, 
                                    null, null, "'*'", "'/'", "'+'", "'-'" ];

CQLLexer.prototype.symbolicNames = [ null, null, null, null, "ID", "INT", 
                                     "NEWLINE", "WS", "MUL", "DIV", "ADD", 
                                     "SUB" ];

CQLLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "ID", "INT", "NEWLINE", 
                                 "WS", "MUL", "DIV", "ADD", "SUB" ];

CQLLexer.prototype.grammarFileName = "CQL.g4";



exports.CQLLexer = CQLLexer;

