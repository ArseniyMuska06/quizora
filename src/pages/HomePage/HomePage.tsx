import type { TestType } from "../../App"
import "./HomePage.css"

function HomePage() {
    const QuizoraTests: TestType[] = JSON.parse(
        localStorage.getItem("QuizoraTests") ?? "[]"
    )

    return (
        <>
            <header className="home-header">
                <div className="content">
                    <p className="quizora-logo">Quizora</p>
                    <div className="header-buttons">
                        <button className="edit-tests-button">Редагувати тести</button>
                        <button className="create-test-button">Створити</button>
                    </div>
                </div>
            </header>

            <main className="home-main">
                <div className="content">
                    <h1>Усі тести</h1>
                    <div className="tests-list">
                        {QuizoraTests.length === 0 && (
                            <p>Тестів поки немає. Створи свій перший тест.</p>
                        )}

                        {QuizoraTests.map((item) => {
                            return <div className="test-preview" key={item.id}>
                                <p>{item.name}</p>
                            </div>
                        })}
                    </div>
                </div>
            </main>

            <footer className="home-footer">
                <div className="content">
                    <p>Quizora — створюй тести та перевіряй знання</p>
                    <p>© 2026 Quizora</p>
                </div>
            </footer>
        </>
    )
}

export default HomePage