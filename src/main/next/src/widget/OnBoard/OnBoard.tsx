"use client"
import { Dialog } from "@/enteties/Dialog/Dialog"
import Tabs from "@/enteties/Tabs/Tabs"
import { question_mark_icon } from "@/shared/assets/icons"
import { Image } from "@/shared/ui/Image"

 const OnBoard = () => {
  
  const tabs = [
    {
      label: "Главная",
      content: (
        <div className="on-board__container">
          <Image src="/img/on-board-data-lens" title="on-board-data-lens" />
          <p>Собрали <strong>все наши данные</strong> с помощью Yandex Data Lens </p>
        </div>
      ),
    },
    {
      label: "Карта",
      content: (
        <div className="on-board__container">
          <Image src="/img/on-board-map" title="on-board-map" />
  
          <p className="body-2">
            Активные слои подсвечены, кликните по карте, чтобы получить
            информацию.
            Если после клика <strong>ничего не изменилось</strong>, попробуйте
            приблизить карту и повторить
          </p>
        </div>
      ),
    },
    {
      label: "Аналитика",
      content: (
        <div className="on-board__container">
          <Image src="/img/on-board-analytics" title="on-board-analytics" />
          <p className="body-2">Узнайте о подходе команды аналитиков!</p>
        </div>
      ),
    },

    {
      label: "Параметры",
      content: (
        <div className="on-board__container">
          <Image src="/img/on-board-settings" title="on-board-settings" />
          <p>Настройте тему карты на свой вкус</p>
        </div>
      ),
    },
    {
      label: "О проекте",
      content: (
        <div className="on-board__container">
          <Image src="/img/on-board-about" title="on-board-data-lens" />
          <p>
            Информация о команде, <strong>бизнес модель</strong> и дорожная
            карта
          </p>
        </div>
      ),
    },
  ]

  return (
    <Dialog
      openTitle={question_mark_icon}
      dialogTitle="🚀 Добро пожаловать на борт! "
    >
      <Tabs tabs={tabs} order={1} />
    </Dialog>
  )
}
export default OnBoard