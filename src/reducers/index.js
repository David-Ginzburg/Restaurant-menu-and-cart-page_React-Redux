const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    total: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED': {
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            }
        }
        case 'MENU_REQUESTED': {
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: false
            }
        }
        case 'MENU_ERROR': {
            return {
                ...state,
                menu: state.menu,
                loading: false,
                error: true
            }
        }
        case 'ITEM_ADD_TO_CART': {
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const itemInd = state.items.findIndex(item => item.product.id === id);
            const qtty = itemInd >= 0 ? state.items[itemInd].qtty + 1 : 1;
            const sum = itemInd >= 0 ? state.items[itemInd].sum + item.price : item.price;
            const total = state.total + item.price;
            
            const newItem = {
                product: {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id
                },
                qtty,
                sum
            };

            if (itemInd >= 0) {
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemInd),
                        newItem,
                        ...state.items.slice(itemInd + 1)
                    ],
                    total
                }
            } else {
                return {
                    ...state,
                    items: [
                        ...state.items,
                        newItem
                    ],
                    total
                }
            };
        }
        case 'ITEM_DELETE_FROM_CART': {
            const id = action.payload;
            const items = state.items.filter(item => item.product.id !== id);
            const total = items ? items.reduce((sum, item) => sum + item.sum, 0) : 0;
            return {
                ...state,
                items: items,
                total
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;