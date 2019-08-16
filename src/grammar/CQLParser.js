// Generated from src/grammar/CQL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CQLVisitor = require('./CQLVisitor').CQLVisitor;

var grammarFileName = "CQL.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000e6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0003\u0002\u0006\u0002\n\n\u0002\r\u0002\u000e\u0002\u000b\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0017\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004 \n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004",
    "1\n\u0004\f\u0004\u000e\u00044\u000b\u0004\u0003\u0004\u0002\u0003\u0006",
    "\u0005\u0002\u0004\u0006\u0002\u0002\u0002<\u0002\t\u0003\u0002\u0002",
    "\u0002\u0004\u0016\u0003\u0002\u0002\u0002\u0006\u001f\u0003\u0002\u0002",
    "\u0002\b\n\u0005\u0004\u0003\u0002\t\b\u0003\u0002\u0002\u0002\n\u000b",
    "\u0003\u0002\u0002\u0002\u000b\t\u0003\u0002\u0002\u0002\u000b\f\u0003",
    "\u0002\u0002\u0002\f\u0003\u0003\u0002\u0002\u0002\r\u000e\u0005\u0006",
    "\u0004\u0002\u000e\u000f\u0007\t\u0002\u0002\u000f\u0017\u0003\u0002",
    "\u0002\u0002\u0010\u0011\u0007\u0007\u0002\u0002\u0011\u0012\u0007\u0003",
    "\u0002\u0002\u0012\u0013\u0005\u0006\u0004\u0002\u0013\u0014\u0007\t",
    "\u0002\u0002\u0014\u0017\u0003\u0002\u0002\u0002\u0015\u0017\u0007\t",
    "\u0002\u0002\u0016\r\u0003\u0002\u0002\u0002\u0016\u0010\u0003\u0002",
    "\u0002\u0002\u0016\u0015\u0003\u0002\u0002\u0002\u0017\u0005\u0003\u0002",
    "\u0002\u0002\u0018\u0019\b\u0004\u0001\u0002\u0019 \u0007\b\u0002\u0002",
    "\u001a \u0007\u0007\u0002\u0002\u001b\u001c\u0007\u0005\u0002\u0002",
    "\u001c\u001d\u0005\u0006\u0004\u0002\u001d\u001e\u0007\u0006\u0002\u0002",
    "\u001e \u0003\u0002\u0002\u0002\u001f\u0018\u0003\u0002\u0002\u0002",
    "\u001f\u001a\u0003\u0002\u0002\u0002\u001f\u001b\u0003\u0002\u0002\u0002",
    " 2\u0003\u0002\u0002\u0002!\"\f\n\u0002\u0002\"#\u0007\u000b\u0002\u0002",
    "#1\u0005\u0006\u0004\u000b$%\f\t\u0002\u0002%&\u0007\f\u0002\u0002&",
    "1\u0005\u0006\u0004\n\'(\f\b\u0002\u0002()\u0007\r\u0002\u0002)1\u0005",
    "\u0006\u0004\t*+\f\u0007\u0002\u0002+,\u0007\u000e\u0002\u0002,1\u0005",
    "\u0006\u0004\b-.\f\u0006\u0002\u0002./\u0007\u0004\u0002\u0002/1\u0005",
    "\u0006\u0004\u00070!\u0003\u0002\u0002\u00020$\u0003\u0002\u0002\u0002",
    "0\'\u0003\u0002\u0002\u00020*\u0003\u0002\u0002\u00020-\u0003\u0002",
    "\u0002\u000214\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u000223\u0003",
    "\u0002\u0002\u00023\u0007\u0003\u0002\u0002\u000242\u0003\u0002\u0002",
    "\u0002\u0007\u000b\u0016\u001f02"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'='", "'^'", "'('", "')'", null, null, null, 
                     null, "'*'", "'/'", "'+'", "'-'" ];

var symbolicNames = [ null, null, null, null, null, "ID", "INT", "NEWLINE", 
                      "WS", "MUL", "DIV", "ADD", "SUB" ];

var ruleNames =  [ "prog", "stat", "expr" ];

function CQLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CQLParser.prototype = Object.create(antlr4.Parser.prototype);
CQLParser.prototype.constructor = CQLParser;

Object.defineProperty(CQLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CQLParser.EOF = antlr4.Token.EOF;
CQLParser.T__0 = 1;
CQLParser.T__1 = 2;
CQLParser.T__2 = 3;
CQLParser.T__3 = 4;
CQLParser.ID = 5;
CQLParser.INT = 6;
CQLParser.NEWLINE = 7;
CQLParser.WS = 8;
CQLParser.MUL = 9;
CQLParser.DIV = 10;
CQLParser.ADD = 11;
CQLParser.SUB = 12;

CQLParser.RULE_prog = 0;
CQLParser.RULE_stat = 1;
CQLParser.RULE_expr = 2;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CQLParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

ProgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CQLVisitor ) {
        return visitor.visitProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CQLParser.ProgContext = ProgContext;

CQLParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CQLParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 7; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 6;
            this.stat();
            this.state = 9; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CQLParser.T__2) | (1 << CQLParser.ID) | (1 << CQLParser.INT) | (1 << CQLParser.NEWLINE))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CQLParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;


 
StatContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function BlankContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BlankContext.prototype = Object.create(StatContext.prototype);
BlankContext.prototype.constructor = BlankContext;

CQLParser.BlankContext = BlankContext;

BlankContext.prototype.NEWLINE = function() {
    return this.getToken(CQLParser.NEWLINE, 0);
};
BlankContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CQLVisitor ) {
        return visitor.visitBlank(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrintExprContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrintExprContext.prototype = Object.create(StatContext.prototype);
PrintExprContext.prototype.constructor = PrintExprContext;

CQLParser.PrintExprContext = PrintExprContext;

PrintExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

PrintExprContext.prototype.NEWLINE = function() {
    return this.getToken(CQLParser.NEWLINE, 0);
};
PrintExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CQLVisitor ) {
        return visitor.visitPrintExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignContext.prototype = Object.create(StatContext.prototype);
AssignContext.prototype.constructor = AssignContext;

CQLParser.AssignContext = AssignContext;

AssignContext.prototype.ID = function() {
    return this.getToken(CQLParser.ID, 0);
};

AssignContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignContext.prototype.NEWLINE = function() {
    return this.getToken(CQLParser.NEWLINE, 0);
};
AssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CQLVisitor ) {
        return visitor.visitAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CQLParser.StatContext = StatContext;

CQLParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CQLParser.RULE_stat);
    try {
        this.state = 20;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PrintExprContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 11;
            this.expr(0);
            this.state = 12;
            this.match(CQLParser.NEWLINE);
            break;

        case 2:
            localctx = new AssignContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 14;
            this.match(CQLParser.ID);
            this.state = 15;
            this.match(CQLParser.T__0);
            this.state = 16;
            this.expr(0);
            this.state = 17;
            this.match(CQLParser.NEWLINE);
            break;

        case 3:
            localctx = new BlankContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 19;
            this.match(CQLParser.NEWLINE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CQLParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ParensContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParensContext.prototype = Object.create(ExprContext.prototype);
ParensContext.prototype.constructor = ParensContext;

CQLParser.ParensContext = ParensContext;

ParensContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParensContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CQLVisitor ) {
        return visitor.visitParens(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AdditionContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditionContext.prototype = Object.create(ExprContext.prototype);
AdditionContext.prototype.constructor = AdditionContext;

CQLParser.AdditionContext = AdditionContext;

AdditionContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
AdditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CQLVisitor ) {
        return visitor.visitAddition(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SubtractionContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SubtractionContext.prototype = Object.create(ExprContext.prototype);
SubtractionContext.prototype.constructor = SubtractionContext;

CQLParser.SubtractionContext = SubtractionContext;

SubtractionContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
SubtractionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CQLVisitor ) {
        return visitor.visitSubtraction(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultiplyContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplyContext.prototype = Object.create(ExprContext.prototype);
MultiplyContext.prototype.constructor = MultiplyContext;

CQLParser.MultiplyContext = MultiplyContext;

MultiplyContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
MultiplyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CQLVisitor ) {
        return visitor.visitMultiply(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DivisionContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DivisionContext.prototype = Object.create(ExprContext.prototype);
DivisionContext.prototype.constructor = DivisionContext;

CQLParser.DivisionContext = DivisionContext;

DivisionContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
DivisionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CQLVisitor ) {
        return visitor.visitDivision(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdContext.prototype = Object.create(ExprContext.prototype);
IdContext.prototype.constructor = IdContext;

CQLParser.IdContext = IdContext;

IdContext.prototype.ID = function() {
    return this.getToken(CQLParser.ID, 0);
};
IdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CQLVisitor ) {
        return visitor.visitId(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IntContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntContext.prototype = Object.create(ExprContext.prototype);
IntContext.prototype.constructor = IntContext;

CQLParser.IntContext = IntContext;

IntContext.prototype.INT = function() {
    return this.getToken(CQLParser.INT, 0);
};
IntContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CQLVisitor ) {
        return visitor.visitInt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DegreeRootContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DegreeRootContext.prototype = Object.create(ExprContext.prototype);
DegreeRootContext.prototype.constructor = DegreeRootContext;

CQLParser.DegreeRootContext = DegreeRootContext;

DegreeRootContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
DegreeRootContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CQLVisitor ) {
        return visitor.visitDegreeRoot(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CQLParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, CQLParser.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CQLParser.INT:
            localctx = new IntContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 23;
            this.match(CQLParser.INT);
            break;
        case CQLParser.ID:
            localctx = new IdContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 24;
            this.match(CQLParser.ID);
            break;
        case CQLParser.T__2:
            localctx = new ParensContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 25;
            this.match(CQLParser.T__2);
            this.state = 26;
            this.expr(0);
            this.state = 27;
            this.match(CQLParser.T__3);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 48;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 46;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CQLParser.RULE_expr);
                    this.state = 31;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 32;
                    localctx.op = this.match(CQLParser.MUL);
                    this.state = 33;
                    this.expr(9);
                    break;

                case 2:
                    localctx = new DivisionContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CQLParser.RULE_expr);
                    this.state = 34;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 35;
                    localctx.op = this.match(CQLParser.DIV);
                    this.state = 36;
                    this.expr(8);
                    break;

                case 3:
                    localctx = new AdditionContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CQLParser.RULE_expr);
                    this.state = 37;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 38;
                    localctx.op = this.match(CQLParser.ADD);
                    this.state = 39;
                    this.expr(7);
                    break;

                case 4:
                    localctx = new SubtractionContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CQLParser.RULE_expr);
                    this.state = 40;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 41;
                    localctx.op = this.match(CQLParser.SUB);
                    this.state = 42;
                    this.expr(6);
                    break;

                case 5:
                    localctx = new DegreeRootContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CQLParser.RULE_expr);
                    this.state = 43;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 44;
                    localctx.op = this.match(CQLParser.T__1);
                    this.state = 45;
                    this.expr(5);
                    break;

                } 
            }
            this.state = 50;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


CQLParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CQLParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 5);
		case 4:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CQLParser = CQLParser;
