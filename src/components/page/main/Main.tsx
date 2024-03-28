import './Main.css'

const weeklySales = [
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
]

function Main() {
    return <div className="tab-content">
        <section className="tab-section">
            <p className="text-page-header">Цветочный</p>
            <p className="text-body">Накануне важного события всегда задаешься вопросом – где купить цветы в Минске? Чтобы доставка цветов была в нужное место и в нужное время. Среди цветочных магазинов иногда не просто найти именно тот, где устроит все - приятное общение, профессионализм флористов, высокое качество обслуживания и, конечно же, качество цветов. Команда флористов Cactus.by всегда нацелена на результат - доставка букетов и композиций займет у вас минимум времени и подарит максимум удовольствия.</p>
        </section>
        <section>
            <p className="text-section-header" style={{ paddingLeft: "32px", paddingRight: "32px" }}>Продажи недели</p>
            <div className="slider-container">
                {
                    weeklySales.map(item => (
                        <div className="slider-item">
                            <div className="slider-item-image-container">
                                <img src={item.image} className="slider-item-image"/>
                            </div>
                            <p className="slider-item-title">{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </section>
        <section className="tab-section">
            <p className="text-section-header">Почему именно мы?</p>
            <p className="text-body">Учитывая ключевые сценарии поведения, разбавленное изрядной долей эмпатии, рациональное мышление способствует подготовке и реализации позиций, занимаемых участниками в отношении поставленных задач. В целом, конечно, дальнейшее развитие различных форм деятельности является качественно новой ступенью экспериментов, поражающих по своей масштабности и грандиозности. Банальные, но неопровержимые выводы, а также интерактивные прототипы, вне зависимости от их уровня, должны быть ограничены исключительно образом мышления.</p>
        </section>
    </div>
}

export default Main