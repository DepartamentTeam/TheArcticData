import { UserData } from "@/shared/models"

const Avatar = ({name}: UserData) => {

    return (
        <div className="sc-header__profile-avatar">
            
                {name[0]}
          
        </div>
    )
}

export default Avatar