lexer grammar LexerRules;

// lexical (tokens) rules

ID: [a-zA-Z]+; // match identifiers
INT: [0-9]+; // match integers
NEWLINE: '\r'? '\n'; // return new lines to parser (end-statement signal)
WS: [ \t]+ -> skip; // toos out whitespace

MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
