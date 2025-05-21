import { Banner } from "src/widgets/banner";
import { Intro } from "src/widgets/intro";

const MainPage = (): React.ReactNode => {
  return (
    <main>
      <Banner />
      <Intro>
        <h2>УСЛУГИ НАШЕЙ КОМПАНИИ:</h2>
      </Intro>
    </main>
  )
}

export default MainPage;