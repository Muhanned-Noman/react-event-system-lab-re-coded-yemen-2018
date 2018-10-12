// Code Keypad Component Here

class Keypad extends React.Component {
 
  Keypad = () => {
    console.log('Tee hee!');
  }
 
  render() {
    return (
      <button onKeyUp ={this.Keypad}>Tickle me!</button>
    );
  }
}
