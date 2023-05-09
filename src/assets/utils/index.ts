export function isLocalHost(): boolean {
  const url = window.location.href;
  return (
    url.includes('localhost') ||
    url.includes('192.168') ||
    url.includes('169.254')
  );
}
