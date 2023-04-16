import React, { Component } from "react";
import Celcius from "./celcius";
import Fahrenheit from "./fahrenheit";
import Kelvin from "./kelvin";
import { Container, Row, Col, Button } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempreture: 0,
    };
  }
  increaseTempreture = () => {
    this.setState({
      tempreture: this.state.tempreture + 1,
    });
  };

  render() {
    let fullCelcius = { title: "Celcius :", level: "0" };
    let fullFahrenheit = { title: "Fahrenheit :", level: "-32" };
    let fullKelvin = { title: "Kelvin :", level: "273" };

    fullCelcius.level = this.state.tempreture;
    fullFahrenheit.level = (this.state.tempreture * 9) / 5 + 32;
    fullKelvin.level = this.state.tempreture + 273;

    return (
      <div>
        <Container>
          <Row>
            <h1>Hava Nasıl</h1>
            <p>Şu an sıcaklık: {this.state.tempreture} derece</p>
            <Button
              color="secondary"
              onClick={this.increaseTempreture}
              style={{ maxWidth: 200 }}
            >
              Sıcaklık Artır
            </Button>
            <p>3 Birimde Sıcaklık Ölçümü</p>
          </Row>

          <Row>
            <Col xs="4">
              <Celcius cFull={fullCelcius} />
            </Col>
            <Col xs="4">
              <Fahrenheit fFull={fullFahrenheit} />
            </Col>
            <Col xs="4">
              <Kelvin kFull={fullKelvin} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
