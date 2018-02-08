
pragma solidity ^0.4.19;

contract Greetings {
  string message;

  function Greetings() {
     message = "i am ready";
  }

  function setGreetings(string _message) {
    message = _message;
  }

  function getGreetings() constant returns (string) {
    return message;
  }
}
