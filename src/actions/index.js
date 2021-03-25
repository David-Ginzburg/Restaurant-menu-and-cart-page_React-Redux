const menuLoaded = (newMenu) => ({type: 'MENU_LOADED', payload: newMenu});
const menuRequested  = () => ({type: 'MENU_REQUESTED'});
const menuError  = () => ({type: 'MENU_ERROR'}); 
const addedToCart  = (id) => ({type: 'ITEM_ADD_TO_CART', payload: id});
const deleteFromCart  = (id) => ({type: 'ITEM_DELETE_FROM_CART', payload: id});

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFromCart
}