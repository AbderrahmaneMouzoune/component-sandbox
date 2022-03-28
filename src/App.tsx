import { Col, Container, Row } from 'reactstrap'
import Card from './Components/Card/Card'
import TinderInteractiveBar from './Components/TinderInteractiveBar/TinderInteractiveBar'
import WrapperComponent from './Components/WrapperComponent/WrapperComponent'

function App() {
    return (
        <Container>
            <h1
                style={{
                    textAlign: 'center',
                    fontSize: '1em',
                    paddingTop: '1em',
                }}
            >
                Hello i'm Abderrahmane Mouzoune and that's where i put all my
                random components
            </h1>
            <Row style={{ marginTop: '1em', gap: '1em', flexWrap: 'wrap' }}>
                <Col className="box">
                    <WrapperComponent
                        component={TinderInteractiveBar}
                        title={'Interactive bar like super like and dislike'}
                    />
                </Col>
                <Col className="box">
                    <WrapperComponent
                        component={Card}
                        title={
                            'Sample card that i use for literraly everything'
                        }
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default App
