// Code Keypad Component Here

class Keypad extends React.Component {
 
  Keypad = () => {
    console.log('Entering password...');
  }
 
  render() {
    return (
      <input type="password" onKeyUp ={this.Keypad} />
    );
  }
}
