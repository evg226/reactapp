import {Container} from "react-bootstrap";

export const Footer=()=>{
    return (
        <footer className={"app__footer bg-dark text-secondary" } >
            <Container>
                Copyright &copy; evg226 {new Date().toLocaleDateString()}
            </Container>
        </footer>
    )
}