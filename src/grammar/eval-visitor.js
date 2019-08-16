import { CQLVisitor } from './CQLVisitor';

export class EvalVisitor extends CQLVisitor {

  constructor() {
    super();
    this.memory = new Map();
    this.result = 0;
  }

  visitAssign(ctx) {
    const id = ctx.ID().getText();
    const value = this.visit(ctx.expr());
    this.memory.set(id, value);
    return value;
  }

  visitPrintExpr(ctx) {
    const value = this.visit(ctx.expr());
    this.result = value;
  }

  visitInt(ctx) {
    return ctx.INT().getText();
  }

  visitId(ctx) {
    const id = ctx.ID().getText();
    if (this.memory.has(id)) {
      return this.memory.get(id);
    }
    return 0;
  }

  visitMulDiv(ctx) {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));

    if (ctx.op.text === '*') {
      return left * right
    }
    return left / right;
  }

  visitAddSub(ctx) {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));

    if (ctx.op.text === '+') {
      return +left + +right;
    }
    return +left - +right;
  }

  visitParens(ctx) {
    return this.visit(ctx.expr())
  }

}
