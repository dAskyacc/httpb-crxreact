export function compressAddress(address) {
  if (typeof address !== 'string' || address.length <= 10) return address;

  return /^(0x|0X)[\w+]/.test(address)
    ? address.substring(0, 6) + '...' + address.substring(address.length - 4)
    : '0x' +
        address.substring(0, 4) +
        '...' +
        address.substring(address.length - 4);
}
