// Code Keypad Component Here

class Keypad extends React.Component {
 
  Keypad = () => {
    console.log('Tee hee!');
  }
 
  render() {
    return (
      <input onKeyUp ={this.Keypad} />
    );
  }
}
