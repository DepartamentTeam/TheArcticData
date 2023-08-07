import Avatar from "@/shared/ui/Avatar/Avatar"
import Link from "next/link"


export const ChatboxHaeder = () => {
    return(
        <div className="chatbox-header">
           
            <Avatar name="🤖" />
            <div className="chatbox-header__profiler">
           
            <strong>RKT Bot</strong>
            <span className="small-1"> Первичная диагностика</span>
            </div>
           
        </div>
    )
}