import antlr4 from 'antlr4';
import { CQLLexer } from '../grammar/CQLLexer';
import { CQLParser } from '../grammar/CQLParser';
import { EvalVisitor } from '../grammar/eval-visitor';

export const parseLine = (input: string) => {
  const chars = new antlr4.InputStream(input);
  const lexer = new CQLLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new CQLParser(tokens);
  parser.buildParseTrees = true;

  const tree = parser.prog();
  const evalVisitor = new EvalVisitor();

  evalVisitor.visit(tree);
  return evalVisitor.result;
};
