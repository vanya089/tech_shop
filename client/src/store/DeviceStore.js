import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
        ]

        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Acer'},
            {id: 4, name: 'Xiaomi'},
        ]

        this._devices = [
            {
                id: 1,
                name: 'Iphone 12 pro',
                price: 30000,
                rating: 5,
                img: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fjmart.kz%2Fproducts%2F630218%2FP&psig=AOvVaw05idtuI_U5iI4V3xjkWPL-&ust=1667729604848000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPjJiojnlvsCFQAAAAAdAAAAABAH`
            },
            {
                id: 2,
                name: 'Iphone 12 pro',
                price: 30000,
                rating: 5,
                img: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fjmart.kz%2Fproducts%2F630218%2FP&psig=AOvVaw05idtuI_U5iI4V3xjkWPL-&ust=1667729604848000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPjJiojnlvsCFQAAAAAdAAAAABAH`
            },
            {
                id: 3,
                name: 'Iphone 12 pro',
                price: 30000,
                rating: 5,
                img: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fjmart.kz%2Fproducts%2F630218%2FP&psig=AOvVaw05idtuI_U5iI4V3xjkWPL-&ust=1667729604848000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPjJiojnlvsCFQAAAAAdAAAAABAH`
            },
            {
                id: 4,
                name: 'Iphone 12 pro',
                price: 30000,
                rating: 5,
                img: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fjmart.kz%2Fproducts%2F630218%2FP&psig=AOvVaw05idtuI_U5iI4V3xjkWPL-&ust=1667729604848000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPjJiojnlvsCFQAAAAAdAAAAABAH`
            },
            {
                id: 5,
                name: 'iPhone 12 pro',
                price: 30000,
                rating: 5,
                img: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fjmart.kz%2Fproducts%2F630218%2FP&psig=AOvVaw05idtuI_U5iI4V3xjkWPL-&ust=1667729604848000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPjJiojnlvsCFQAAAAAdAAAAABAH`
            },
            {
                id: 6,
                name: 'iPhone 12 pro',
                price: 30000,
                rating: 5,
                img: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fjmart.kz%2Fproducts%2F630218%2FP&psig=AOvVaw05idtuI_U5iI4V3xjkWPL-&ust=1667729604848000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPjJiojnlvsCFQAAAAAdAAAAABAH`
            },

        ]

        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}
