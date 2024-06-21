export function base64(data: string): string {
  return btoa(data);
}

function generateRandomString(length: number) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export async function generateCodeVerifier(): Promise<string> {
  return generateRandomString(96);
}

const sha256 = async (str: string) => {
  const digestOp = await crypto.subtle.digest({ name: 'SHA-256' }, new TextEncoder().encode(str));
  return bufferToBase64UrlEncoded(digestOp);
};

const bufferToBase64UrlEncoded = (hash: ArrayBuffer): string => {
  const uintArray = new Uint8Array(hash);
  const numberArray = Array.from(uintArray);
  const hashString = String.fromCharCode(...numberArray);
  return urlEncodeB64(base64(hashString));
};

const urlEncodeB64 = (input: string) => {
  const b64Chars: Record<string, string> = { '+': '-', '/': '_', '=': '' };
  return input.replace(/[+/=]/g, m => b64Chars[m]);
};

export async function generateChallenge(codeVerifierString: string): Promise<string> {
  return await sha256(codeVerifierString);
}
