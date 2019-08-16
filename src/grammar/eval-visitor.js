import { CQLVisitor } from './CQLVisitor';

export class EvalVisitor extends CQLVisitor {

  constructor() {
    super();
    this.memory = new Map();
    this.result = 0;
  }

  getOperands(ctx) {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));

    return { left, right };
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

  visitFloat(ctx) {
    return parseFloat(ctx.FLOAT().getText());
  }

  visitId(ctx) {
    const id = ctx.ID().getText();
    if (this.memory.has(id)) {
      return this.memory.get(id);
    }
    return 0;
  }

  visitMultiply(ctx) {
    const { left, right } = this.getOperands(ctx);
    return left * right;
  }

  visitDivision(ctx) {
    const { left, right } = this.getOperands(ctx);
    return left / right;
  }

  visitAddition(ctx) {
    const { left, right } = this.getOperands(ctx);
    return +left + +right;
  }

  visitSubtraction(ctx) {
    const { left, right } = this.getOperands(ctx);
    return +left - +right;
  }

  visitDegreeRoot(ctx) {
    const { left, right } = this.getOperands(ctx);
    return left ** (1 / right);
  }

  visitParens(ctx) {
    return this.visit(ctx.expr())
  }

}
