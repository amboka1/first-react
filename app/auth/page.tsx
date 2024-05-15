import { AuthBtn } from "../components/authBtn/authBtn";

export default function Auth() {
    const userIsLoggin = false;
    return (
        <>
            {
                userIsLoggin ? <AuthBtn title="აქაუნთიდან გასვლა" /> : <AuthBtn title="აქაუნთზე შესვლა" />
                
            }
            
        </>
    )
}