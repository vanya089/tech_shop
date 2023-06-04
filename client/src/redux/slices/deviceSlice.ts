import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type TypeDeviceItem = {
    id: number;
    name: string;
    price: number;
    rating: number;
    imageUrl: string;
};
export type TypeDevicesTypesAndBrands = {
    id: number;
    name: string;
};


interface IDeviceSliceState {
    items: TypeDeviceItem[];
    types: TypeDevicesTypesAndBrands[];
    brands: TypeDevicesTypesAndBrands[];
}

const initialState: IDeviceSliceState = {
    items: [],
    types: [],
    brands: [],

};

const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<TypeDeviceItem[]>) {
            state.items = action.payload;
        },
        setTypes(state, action: PayloadAction<TypeDevicesTypesAndBrands[]>) {
            state.types = action.payload;
        },
        setBrands(state, action: PayloadAction<TypeDevicesTypesAndBrands[]>) {
            state.brands = action.payload;
        },
    }
});


export const {setItems, setTypes,setBrands} = deviceSlice.actions;

export default deviceSlice.reducer;
