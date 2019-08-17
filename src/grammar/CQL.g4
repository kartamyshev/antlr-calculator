grammar CQL;
import LexerRules;

prog
  : stat+
  ;

stat
  : expr NEWLINE          # printExpr
  | ID '=' expr NEWLINE   # assign
  | NEWLINE               # blank
  ;

expr
  : expr op='*' expr       # Multiply
  | expr op='/' expr       # Division
  | expr op='+' expr       # Addition
  | expr op='-' expr       # Subtraction
  | expr op='^' expr       # DegreeRoot
  | INT                    # int
  | FLOAT                  # float
  | ID                     # id
  | '(' expr ')'           # parens
  ;
