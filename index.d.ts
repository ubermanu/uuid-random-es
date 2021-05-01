declare function uuid(): string;

declare namespace uuid {
  let BUFFER_SIZE: number;

  function bin(): Uint8Array;

  function test(uuid: string): boolean;
}

export default uuid;
