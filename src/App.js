import { Card, Col,Row } from "react-bootstrap";
import RegistrationForm from "./components/RegistrationForm";


function App() {
  return (
    <>
       <Row style = {{ justifyContent : 'center' }}>
        <Col xs={8} className="mt-5">
          <Card className='p-4'>
            <h1 className="mb-4 text-center">Sign Up</h1>
            <RegistrationForm/>

          </Card>
        </Col>
      </Row>
    </>
  );
}

export default App;
