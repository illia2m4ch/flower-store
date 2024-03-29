import "./Catalog.css"
import {useState} from "react";

const initItems = [
    {
        name: "Розы",
        image: "https://kvetku.by/image/cache/catalog/Flowers/pionovidnye-rozy/buket-cvetov-44-652x652.jpg"
    },
    {
        name: "Пионы",
        image: "https://kvetku.by/image/cache/catalog/Flowers/pionovidnye-rozy/buket-cvetov-44-652x652.jpg"
    },
    {
        name: "Гипсофилы",
        image: "https://kvetku.by/image/cache/catalog/Flowers/pionovidnye-rozy/buket-cvetov-44-652x652.jpg"
    },
    {
        name: "Ромашки",
        image: "https://kvetku.by/image/cache/catalog/Flowers/pionovidnye-rozy/buket-cvetov-44-652x652.jpg"
    },
    {
        name: "Герберы",
        image: "https://kvetku.by/image/cache/catalog/Flowers/pionovidnye-rozy/buket-cvetov-44-652x652.jpg"
    },
    {
        name: "Лилии",
        image: "https://kvetku.by/image/cache/catalog/Flowers/pionovidnye-rozy/buket-cvetov-44-652x652.jpg"
    },
    {
        name: "Гвоздики",
        image: "https://kvetku.by/image/cache/catalog/Flowers/pionovidnye-rozy/buket-cvetov-44-652x652.jpg"
    },
    {
        name: "Подсолнухи",
        image: "https://kvetku.by/image/cache/catalog/Flowers/pionovidnye-rozy/buket-cvetov-44-652x652.jpg"
    },
    {
        name: "Орхидеи",
        image: "https://kvetku.by/image/cache/catalog/Flowers/pionovidnye-rozy/buket-cvetov-44-652x652.jpg"
    },
    {
        name: "Георгины",
        image: "https://kvetku.by/image/cache/catalog/Flowers/pionovidnye-rozy/buket-cvetov-44-652x652.jpg"
    },
]

function Catalog() {
    const [search, setSearch] = useState('');
    const [items, setItems] = useState(initItems)

    const handleSearch = (event: { target: { value: string; }; }) => {
        let search = event.target.value
        setSearch(search)
        setItems(
            initItems.filter(value =>
                value.name.toLowerCase().includes(search.toLowerCase())
            )
        )
    }

    return <div className="tab-content">
        <section className="tab-section">
            <p className="text-page-header">Каталог</p>
            <input
                value={search}
                onChange={handleSearch}
                placeholder="Поиск"
            />
            <div className="catalog-container">
                {
                    items.map(item => (
                        <div className="catalog-item">
                            <div className="catalog-item-image-container">
                                <img src={item.image} className="catalog-item-image"/>
                            </div>
                            <p className="catalog-item-title">{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    </div>
}

export default Catalog