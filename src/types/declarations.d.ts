// CSS Module type declarations
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.css' {
  const content: string;
  export default content;
}

// JSON module declarations
declare module '*.json' {
  const value: Record<string, unknown>;
  export default value;
}
