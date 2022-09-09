
export class EdiBuildError extends Error { }

export class EdiBuildMandatoryFieldError extends EdiBuildError {
  constructor(name: string) {
    super(`Campo mandatório ausente: ${name}`);
  }
}
