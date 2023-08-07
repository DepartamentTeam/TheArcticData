import { arrow_left_icon } from "@/shared/assets/icons"
import { ChatboxHaeder } from "./ChatboxHeader"
import { Message } from "./ChatboxMessage"

import Chip from "@/shared/ui/Chip/Chip"

const PainPlaceConfig = [
  {
    id: 1,
    label: "Боль в пояснице",
    value: "Голова",
  },
  {
    id: 2,
    label: "Боль в животе",
    value: "Боль в желудке",
  },
  {
    id: 3,
    label: "Боль в почках",
    value: "Боль в боку",
  },
  {
    id: 4,
    label: "Боль печени",
    value: "Боль в боку",
  },
]

export const Chatbox = () => {
  return (
    <section className="chatbox">
      <div className="chatbox-container">
        <ChatboxHaeder />
        <div className="chatbox-message-bar">
          <Message from="bot" text="👋 Привет, я RKT или просто Аркти " />
          <Message
            from="bot"
            text="Я могу подсказать примерный диагноз по симптомам. Но я не смогу заменить доктора, и мои подсказки не являются медицинскими"
          />
          <Message
            from="bot"
            text="Я помогаю найти ближайшую поликлинику или больницу с нужными специалистами"
          />

          <Message
            from="sender"
            text="Боль в животе
    Боль в почках
Боль в пояснице"
          />

          <Message
            from="bot"
            text="Возможный диагноз -  Пиелонефрит, Камни в почках"
          />
           <Message
            image="/img/chat-asset"
            from="bot"
            link="https://arctida.tech/dashboard/map/arch/..."
            mediaTitle="ГБУЗ АРХАНГЕЛЬСКОЙ ОБЛАСТИ 'ПЕРВАЯ ГКБ ИМ. Е.Е. ВОЛОСЕВИЧ', КОРПУС № 6"
            text="Ближайшая организация с нужным специалистом находится здесь. Рекомендую обратиться к терапевту, ближайшего я также выделил на карте "
          />
        </div>
        <form className="chatbox-footer">
          <div className="chatbox-footer__chips">
            {PainPlaceConfig.map((chip) => (
              <Chip
                value={chip.value}
                id={chip.id}
                removeHandler={null}
                addHandler={null}
                key={chip.id}
                label={chip.label}
              />
            ))}
          </div>
          <button className="btn btn--primary btn--icon" type="submit">
            {arrow_left_icon}
          </button>
        </form>
      </div>
    </section>
  )
}
