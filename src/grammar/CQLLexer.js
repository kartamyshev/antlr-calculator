// Generated from src/grammar/CQL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000fn\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0006\u0006)\n\u0006\r\u0006\u000e\u0006*\u0003",
    "\u0007\u0006\u0007.\n\u0007\r\u0007\u000e\u0007/\u0003\b\u0005\b3\n",
    "\b\u0003\b\u0003\b\u0003\t\u0006\t8\n\t\r\t\u000e\t9\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\u000e\u0006\u000eG\n\u000e\r\u000e\u000e\u000eH\u0003\u000e",
    "\u0003\u000e\u0007\u000eM\n\u000e\f\u000e\u000e\u000eP\u000b\u000e\u0003",
    "\u000e\u0005\u000eS\n\u000e\u0003\u000e\u0003\u000e\u0006\u000eW\n\u000e",
    "\r\u000e\u000e\u000eX\u0003\u000e\u0005\u000e\\\n\u000e\u0003\u000e",
    "\u0006\u000e_\n\u000e\r\u000e\u000e\u000e`\u0003\u000e\u0005\u000ed",
    "\n\u000e\u0003\u000f\u0003\u000f\u0005\u000fh\n\u000f\u0003\u000f\u0006",
    "\u000fk\n\u000f\r\u000f\u000e\u000fl\u0002\u0002\u0010\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b",
    "\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0002\u0003\u0002\u0007",
    "\u0004\u0002C\\c|\u0003\u00022;\u0004\u0002\u000b\u000b\"\"\u0004\u0002",
    "GGgg\u0004\u0002--//\u0002z\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002",
    "\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002",
    "\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0003",
    "\u001f\u0003\u0002\u0002\u0002\u0005!\u0003\u0002\u0002\u0002\u0007",
    "#\u0003\u0002\u0002\u0002\t%\u0003\u0002\u0002\u0002\u000b(\u0003\u0002",
    "\u0002\u0002\r-\u0003\u0002\u0002\u0002\u000f2\u0003\u0002\u0002\u0002",
    "\u00117\u0003\u0002\u0002\u0002\u0013=\u0003\u0002\u0002\u0002\u0015",
    "?\u0003\u0002\u0002\u0002\u0017A\u0003\u0002\u0002\u0002\u0019C\u0003",
    "\u0002\u0002\u0002\u001bc\u0003\u0002\u0002\u0002\u001de\u0003\u0002",
    "\u0002\u0002\u001f \u0007?\u0002\u0002 \u0004\u0003\u0002\u0002\u0002",
    "!\"\u0007`\u0002\u0002\"\u0006\u0003\u0002\u0002\u0002#$\u0007*\u0002",
    "\u0002$\b\u0003\u0002\u0002\u0002%&\u0007+\u0002\u0002&\n\u0003\u0002",
    "\u0002\u0002\')\t\u0002\u0002\u0002(\'\u0003\u0002\u0002\u0002)*\u0003",
    "\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002",
    "+\f\u0003\u0002\u0002\u0002,.\t\u0003\u0002\u0002-,\u0003\u0002\u0002",
    "\u0002./\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002/0\u0003\u0002",
    "\u0002\u00020\u000e\u0003\u0002\u0002\u000213\u0007\u000f\u0002\u0002",
    "21\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u000234\u0003\u0002\u0002",
    "\u000245\u0007\f\u0002\u00025\u0010\u0003\u0002\u0002\u000268\t\u0004",
    "\u0002\u000276\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u000297\u0003",
    "\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002",
    ";<\b\t\u0002\u0002<\u0012\u0003\u0002\u0002\u0002=>\u0007,\u0002\u0002",
    ">\u0014\u0003\u0002\u0002\u0002?@\u00071\u0002\u0002@\u0016\u0003\u0002",
    "\u0002\u0002AB\u0007-\u0002\u0002B\u0018\u0003\u0002\u0002\u0002CD\u0007",
    "/\u0002\u0002D\u001a\u0003\u0002\u0002\u0002EG\u00042;\u0002FE\u0003",
    "\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002HF\u0003\u0002\u0002\u0002",
    "HI\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JN\u00070\u0002",
    "\u0002KM\u00042;\u0002LK\u0003\u0002\u0002\u0002MP\u0003\u0002\u0002",
    "\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002OR\u0003\u0002",
    "\u0002\u0002PN\u0003\u0002\u0002\u0002QS\u0005\u001d\u000f\u0002RQ\u0003",
    "\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002Sd\u0003\u0002\u0002\u0002",
    "TV\u00070\u0002\u0002UW\u00042;\u0002VU\u0003\u0002\u0002\u0002WX\u0003",
    "\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002",
    "Y[\u0003\u0002\u0002\u0002Z\\\u0005\u001d\u000f\u0002[Z\u0003\u0002",
    "\u0002\u0002[\\\u0003\u0002\u0002\u0002\\d\u0003\u0002\u0002\u0002]",
    "_\u00042;\u0002^]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002",
    "`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002",
    "\u0002bd\u0005\u001d\u000f\u0002cF\u0003\u0002\u0002\u0002cT\u0003\u0002",
    "\u0002\u0002c^\u0003\u0002\u0002\u0002d\u001c\u0003\u0002\u0002\u0002",
    "eg\t\u0005\u0002\u0002fh\t\u0006\u0002\u0002gf\u0003\u0002\u0002\u0002",
    "gh\u0003\u0002\u0002\u0002hj\u0003\u0002\u0002\u0002ik\u00042;\u0002",
    "ji\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lj\u0003\u0002\u0002",
    "\u0002lm\u0003\u0002\u0002\u0002m\u001e\u0003\u0002\u0002\u0002\u0010",
    "\u0002*/29HNRX[`cgl\u0003\b\u0002\u0002"].join("");


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
CQLLexer.T__3 = 4;
CQLLexer.ID = 5;
CQLLexer.INT = 6;
CQLLexer.NEWLINE = 7;
CQLLexer.WS = 8;
CQLLexer.MUL = 9;
CQLLexer.DIV = 10;
CQLLexer.ADD = 11;
CQLLexer.SUB = 12;
CQLLexer.FLOAT = 13;

CQLLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CQLLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CQLLexer.prototype.literalNames = [ null, "'='", "'^'", "'('", "')'", null, 
                                    null, null, null, "'*'", "'/'", "'+'", 
                                    "'-'" ];

CQLLexer.prototype.symbolicNames = [ null, null, null, null, null, "ID", 
                                     "INT", "NEWLINE", "WS", "MUL", "DIV", 
                                     "ADD", "SUB", "FLOAT" ];

CQLLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "ID", "INT", 
                                 "NEWLINE", "WS", "MUL", "DIV", "ADD", "SUB", 
                                 "FLOAT", "EXPONENT" ];

CQLLexer.prototype.grammarFileName = "CQL.g4";



exports.CQLLexer = CQLLexer;

