namespace Network {
  export namespace HTTP {
    export function get<T>(url: string): Promise<T> {
      return new Promise<T>((resolve, reject) => {});
    }
  }
}
