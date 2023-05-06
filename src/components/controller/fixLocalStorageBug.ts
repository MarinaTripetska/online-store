export function fixLocalStorageBug() {
  const cart = localStorage.getItem('cart');
  if (cart) {
    const cartObj = JSON.parse(cart);
    if (cartObj.discount !== undefined) {
      console.log('OK');
    } else {
      localStorage.clear();
    }
  }
}
