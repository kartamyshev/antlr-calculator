lexer grammar LexerRules;

ID: [a-zA-Z]+;
INT: [0-9]+;
NEWLINE: '\r'? '\n';
WS: [ \t]+ -> skip;

MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';

FLOAT
  : ('0'..'9')+ '.' ('0'..'9')* EXPONENT?
  | '.' ('0'..'9')+ EXPONENT?
  | ('0'..'9')+ EXPONENT
  ;

fragment EXPONENT
  : ('e'|'E') ('+'|'-')? ('0'..'9')+
  ;
